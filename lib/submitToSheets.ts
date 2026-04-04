const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxwNxYbDVw_KuFNKKGkfKRAUHBIdx0kvaX8toIJh53uuUuASMxrfcSTgnQ1z_5rQa30/exec";

export type LeadData = {
  type: "Buyer" | "Vendor" | "Contact";
  name: string;
  mobile: string;
  email: string;
  company?: string;
  city?: string;
  category?: string;
  message?: string;
  source?: string;
};

export async function submitToSheets(data: LeadData): Promise<boolean> {
  try {
    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors", // required for Google Apps Script
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        source: data.source || "Website",
      }),
    });
    // no-cors means we can't read the response, but if no error thrown = success
    return true;
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return false;
  }
}
