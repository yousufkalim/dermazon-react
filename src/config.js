let baseUrl = 'http://localhost:5000/api';

if (window.location.host === 'dermazon-dev.falconweb.app') {
  baseUrl = 'https://dermazon-api-dev.falconweb.app/api';
} else if (window.location.host === 'dermazon-qa.falconweb.app') {
  baseUrl = 'https://dermazon-api-qa.falconweb.app/api';
} else if (window.location.host === 'dermazon-staging.falconweb.app') {
  baseUrl = 'https://dermazon-api-staging.falconweb.app/api';
} else if (window.location.host === 'dermazon-prod.falconweb.app/') {
  baseUrl = 'https://dermazon-api-prod.falconweb.app/api';
}

module.exports = { baseUrl };
