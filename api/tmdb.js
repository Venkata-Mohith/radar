// Vercel Serverless Function — TMDB Proxy
// Your API key stays secret on the server. Users never see it.

export default async function handler(req, res) {
  // Allow all origins (your site visitors)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const TMDB_KEY = process.env.TMDB_API_KEY;
  if (!TMDB_KEY) {
    return res.status(500).json({ error: 'TMDB API key not configured on server.' });
  }

  // Get the path after /api/tmdb — e.g. /trending/tv/week
  const { path, ...queryParams } = req.query;

  if (!path) {
    return res.status(400).json({ error: 'Missing path parameter.' });
  }

  // Build the TMDB URL with all query params + the secret key
  const tmdbPath = Array.isArray(path) ? path.join('/') : path;
  const params = new URLSearchParams({ ...queryParams, api_key: TMDB_KEY });
  const tmdbUrl = `https://api.themoviedb.org/3/${tmdbPath}?${params.toString()}`;

  try {
    const response = await fetch(tmdbUrl);
    const data = await response.json();
    
    // Cache for 5 minutes to reduce API calls
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch from TMDB.' });
  }
}
