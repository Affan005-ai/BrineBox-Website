import { siteConfig } from "../../config/site";

export interface SubmissionData {
  formType: "quote" | "contact";
  [key: string]: FormDataEntryValue | string;
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
        return getUnsupportedProviderResult(provider);
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : undefined;

    return {
      success: false,
      message: message || "An unexpected error occurred during submission. Please try again.",
    };
  }
}

async function submitToFormspree(data: SubmissionData): Promise<SubmissionResult> {
  const formId = siteConfig.form.formspreeId;
  if (!formId) {
    throw new Error("Formspree Form ID is not configured in config/site.ts.");
  }

  const endpoint = `https://formspree.io/f/${formId}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return {
      success: true,
      message: "Thank you. Your request has been successfully submitted.",
    };
  }

  const errorData = await response.json();
  throw new Error(errorData.error || "Failed to submit form to Formspree.");
}

async function submitToEmailJS(data: SubmissionData): Promise<SubmissionResult> {
  const { emailjsServiceId, emailjsTemplateId, emailjsPublicKey } = siteConfig.form;
  
  if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
    throw new Error("EmailJS credentials are not configured in config/site.ts.");
  }

  const endpoint = "https://api.emailjs.com/api/v1.0/email/send";
  
  const payload = {
    service_id: emailjsServiceId,
    template_id: emailjsTemplateId,
    user_id: emailjsPublicKey,
    template_params: {
      ...data,
      formatted_details: Object.entries(data)
        .map(([key, val]) => `${key.replace(/([A-Z])/g, ' $1').toUpperCase()}: ${val}`)
        .join("\n"),
    },
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return {
      success: true,
      message: "Thank you. Your request has been successfully submitted.",
    };
  }

  const errorText = await response.text();
  throw new Error(errorText || "Failed to submit form to EmailJS.");
}

async function submitToResend(data: SubmissionData): Promise<SubmissionResult> {
  const { resendEndpointUrl } = siteConfig.form;
  if (!resendEndpointUrl) {
    throw new Error("Resend endpoint URL is not configured in config/site.ts.");
  }

  const response = await fetch(resendEndpointUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return {
      success: true,
      message: "Thank you. Your request has been successfully submitted.",
    };
  }

  const errorText = await response.text();
  throw new Error(errorText || "Failed to submit form to the Resend endpoint.");
}

async function submitToCloudflareWorker(data: SubmissionData): Promise<SubmissionResult> {
  const { cfWorkerUrl } = siteConfig.form;
  
  if (!cfWorkerUrl) {
    throw new Error("Cloudflare Worker URL is not configured in config/site.ts.");
  }

  const response = await fetch(cfWorkerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return {
      success: true,
      message: "Thank you. Your request has been successfully submitted.",
    };
  }

  const errorText = await response.text();
  throw new Error(errorText || "Failed to submit form to Cloudflare Workers.");
}

function getUnsupportedProviderResult(provider: never): SubmissionResult {
  return {
    success: false,
    message: `Form submission failed: Provider "${provider}" is not supported.`,
  };
}
