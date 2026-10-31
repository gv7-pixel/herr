/**
 * Resolves the full URL for backend API requests.
 * In production (Vercel): uses VITE_API_URL pointing to the Render backend.
 * In local development: falls back to relative path '/api/...' using Vite dev proxy.
 */
const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

export function getApiUrl(endpoint = '') {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return API_BASE_URL ? `${API_BASE_URL}${cleanEndpoint}` : cleanEndpoint;
}
