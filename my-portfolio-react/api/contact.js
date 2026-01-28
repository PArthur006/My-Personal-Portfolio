// Vercel Serverless Function: /api/contact
// Recebe POST com { from_name, from_email, subject, message }

function sanitize(str) {
  if (!str) return '';
  return String(str).replace(/[<>]/g, '');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  try {
    const { from_name, from_email, subject, message } = req.body || {};

    // Validação mínima
    if (!from_name || !from_email || !message) {
      res.status(400).json({ success: false, error: 'Missing required fields' });
      return;
    }

    const name = sanitize(from_name);
    const email = sanitize(from_email);
    const subj = sanitize(subject || 'Contato via site');
    const msg = sanitize(message);

    // Prefer server-side EMAILJS_* vars (set on Vercel). For local dev fall back to REACT_APP_*.
    const serviceId = process.env.EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.EMAILJS_USER_ID || process.env.REACT_APP_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      res.status(500).json({ success: false, error: 'Email service not configured. Set environment variables.' });
      return;
    }

    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        from_name: name,
        from_email: email,
        subject: subj,
        message: msg
      }
    };

    // Use global fetch (available on Vercel / Node 18+). If running in an environment
    // without fetch, developers should run via `vercel dev` or install node-fetch.
    const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error('EmailJS error:', resp.status, text);
      // Include the provider response text to aid debugging (no secrets are returned by EmailJS API).
      res.status(502).json({ success: false, error: 'Failed sending email', detail: text });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
