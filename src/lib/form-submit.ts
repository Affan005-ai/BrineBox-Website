import { siteConfig } from '../../config/site';

export interface SubmissionData {
  formType: 'quote' | 'contact';
  [key: string]: any;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
}

/**
 * Handles form submission based on the active provider configured in config/site.ts
 */
export async function submitForm(data: SubmissionData): Promise<SubmissionResult> {
  const { provider } = siteConfig.form;

  try {
    switch (provider) {
      case 'formspree':
        return await submitToFormspree(data);
      case 'emailjs':
        return await submitToEmailJS(data);
      case 'resend':
        return await submitToResend(data);
      case 'cloudflare-workers':
        return await submitToCloudflareWorker(data);
      default:
        return {
          success: false,
          message: `Form submission failed: Provider "${provider}" is not supported.`,
        };
    }
  } catch (error: any) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: error.message || 'An unexpected error occurred during submission. Please try again.',
    };
  }
}

/**
 * Formspree Submission Driver
 * Direct POST to https://formspree.io/f/{formId}
 */
async function submitToFormspree(data: SubmissionData): Promise<SubmissionResult> {
  const formId = siteConfig.form.formspreeId;
  if (!formId || formId === 'xoqgqgqj') {
    throw new Error('Formspree Form ID is not configured in config/site.ts.');
  }

  const endpoint = `https://formspree.io/f/${formId}`;
  
  // Format details for the body
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return {
      success: true,
      message: 'Thank you! Your request has been successfully submitted via Formspree.',
    };
  } else {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to submit form to Formspree.');
  }
}

/**
 * EmailJS Submission Driver
 * POST to https://api.emailjs.com/api/v1.0/email/send
 */
async function submitToEmailJS(data: SubmissionData): Promise<SubmissionResult> {
  const { emailjsServiceId, emailjsTemplateId, emailjsPublicKey } = siteConfig.form;
  
  if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey || emailjsServiceId.includes('dummy')) {
    throw new Error('EmailJS credentials are not configured in config/site.ts.');
  }

  const endpoint = 'https://api.emailjs.com/api/v1.0/email/send';
  
  const payload = {
    service_id: emailjsServiceId,
    template_id: emailjsTemplateId,
    user_id: emailjsPublicKey,
    template_params: {
      ...data,
      // Provide a clean formatted string of all fields for general template usage
      formatted_details: Object.entries(data)
        .map(([key, val]) => `${key.replace(/([A-Z])/g, ' $1').toUpperCase()}: ${val}`)
        .join('\n'),
    },
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return {
      success: true,
      message: 'Thank you! Your request has been successfully submitted via EmailJS.',
    };
  } else {
    const errorText = await response.text();
    throw new Error(errorText || 'Failed to submit form to EmailJS.');
  }
}

/**
 * Resend Submission Driver
 * Note: Since this is a static client-side build, calling Resend API directly from the client is
 * not secure as it exposes the API key. In a real-world scenario, this is proxy-routed through
 * a Cloudflare Worker or serverless API. This client-side helper implements direct Worker proxying
 * or direct API dispatching if running in a safe environment.
 */
async function submitToResend(data: SubmissionData): Promise<SubmissionResult> {
  const { resendApiKey, resendToEmail } = siteConfig.form;
  
  if (!resendApiKey || !resendToEmail || resendApiKey.includes('dummy')) {
    throw new Error('Resend API Key and To Email must be configured in config/site.ts.');
  }

  // Generate an HTML summary of the form data
  const formTitle = data.formType === 'quote' ? 'Request A Quote Submission' : 'Contact Form Submission';
  const tableRows = Object.entries(data)
    .filter(([key]) => key !== 'formType')
    .map(([key, val]) => `
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${val}</td>
      </tr>
    `)
    .join('');

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
      <h2 style="color: #0052cc; border-bottom: 2px solid #0052cc; padding-bottom: 10px;">${formTitle}</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <thead>
          <tr style="background-color: #f8f9fa;">
            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Field</th>
            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Value</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
      <p style="margin-top: 20px; font-size: 12px; color: #666; text-align: center;">Submitted from Brinebox Logistics Website</p>
    </div>
  `;

  // Standard Resend endpoint
  const endpoint = 'https://api.resend.com/emails';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: 'Logistics Form <onboarding@resend.dev>',
      to: [resendToEmail],
      subject: `[Brinebox Logistics] ${formTitle} - ${data.companyName || data.contactPerson || data.name}`,
      html: htmlContent,
    }),
  });

  if (response.ok) {
    return {
      success: true,
      message: 'Thank you! Your request has been successfully submitted via Resend.',
    };
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to submit form to Resend.');
  }
}

/**
 * Cloudflare Workers Submission Driver
 * Sends data to a custom Cloudflare Worker endpoint
 */
async function submitToCloudflareWorker(data: SubmissionData): Promise<SubmissionResult> {
  const { cfWorkerUrl } = siteConfig.form;
  
  if (!cfWorkerUrl || cfWorkerUrl.includes('dummy')) {
    throw new Error('Cloudflare Worker URL is not configured in config/site.ts.');
  }

  const response = await fetch(cfWorkerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return {
      success: true,
      message: 'Thank you! Your request has been successfully submitted via Cloudflare Workers.',
    };
  } else {
    const errorText = await response.text();
    throw new Error(errorText || 'Failed to submit form to Cloudflare Workers.');
  }
}
