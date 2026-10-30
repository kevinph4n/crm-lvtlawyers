// Inserts a lead through Supabase's REST API (no client library needed for one insert).
// Columns must match supabase/migrations/0001_create_leads.sql: Zapier and the Google Sheet
// downstream map these names, so renaming one breaks the pipeline silently.
export interface LeadInput {
  full_name: string;
  phone: string;
  email: string | null;
  legal_field: string;
  message: string | null;
}

export async function submitLead(lead: LeadInput) {
  const url = import.meta.env.PUBLIC_SUPABASE_URL;
  const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('PUBLIC_SUPABASE_URL / PUBLIC_SUPABASE_ANON_KEY are not set');

  const headers: Record<string, string> = {
    apikey: key,
    'Content-Type': 'application/json',
    // anon may only INSERT; asking for the row back would need SELECT and fail.
    Prefer: 'return=minimal',
  };
  // Legacy anon keys are JWTs and also go in Authorization; new sb_publishable_ keys must not.
  if (key.startsWith('eyJ')) headers.Authorization = `Bearer ${key}`;

  const response = await fetch(`${url}/rest/v1/leads`, {
    method: 'POST',
    headers,
    body: JSON.stringify(lead),
  });
  if (!response.ok) throw new Error(`Lead insert failed: ${response.status} ${await response.text()}`);
}
