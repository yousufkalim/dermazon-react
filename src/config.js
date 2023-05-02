let baseUrl = 'http://localhost:5000/api';
let mediaUrl = 'http://localhost:5000';

if (window.location.host === 'dermazon-dev.falconweb.app') {
  baseUrl = 'https://dermazon-api-dev.falconweb.app/api';
  mediaUrl = 'https://dermazon-api-dev.falconweb.app';
} else if (window.location.host === 'dermazon-qa.falconweb.app') {
  baseUrl = 'https://dermazon-api-qa.falconweb.app/api';
  mediaUrl = 'https://dermazon-api-qa.falconweb.app';
} else if (window.location.host === 'dermazon-staging.falconweb.app') {
  baseUrl = 'https://dermazon-api-staging.falconweb.app/api';
  mediaUrl = 'https://dermazon-api-staging.falconweb.app';
} else if (window.location.host.includes('dermazon.')) {
  baseUrl = 'https://api.dermazon.fr/api';
  mediaUrl = 'https://api.dermazon.fr';
}

module.exports = { baseUrl, mediaUrl };
