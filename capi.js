export default async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    response.setHeader('Allow', 'POST, OPTIONS');
    return response.status(204).end();
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST, OPTIONS');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const accessToken = process.env.META_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID;

  if (!accessToken || !pixelId) {
    return response.status(500).json({ error: 'Meta CAPI environment variables are missing' });
  }

  const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body || {};
  const eventId = body.event_id || `tg_sub_${Date.now()}`;
  const eventTime = Number(body.event_time) || Math.floor(Date.now() / 1000);
  const userAgent = body.user_agent || request.headers['user-agent'] || '';
  const userData = {
    client_ip_address: request.headers['x-forwarded-for']?.split(',')[0]?.trim() || '',
    client_user_agent: userAgent,
  };

  if (body.fbc) userData.fbc = body.fbc;
  if (body.fbp) userData.fbp = body.fbp;

  const payload = {
    data: [{
      event_name: 'Subscribe',
      event_time: eventTime,
      action_source: 'website',
      event_id: eventId,
      event_source_url: body.page || '',
      user_data: userData,
    }],
  };

  try {
    const metaResponse = await fetch(
      `https://graph.facebook.com/v20.0/${encodeURIComponent(pixelId)}/events?access_token=${encodeURIComponent(accessToken)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      },
    );

    const result = await metaResponse.json();
    return response.status(metaResponse.ok ? 200 : metaResponse.status).json(result);
  } catch (error) {
    return response.status(502).json({ error: 'Meta CAPI request failed' });
  }
}
