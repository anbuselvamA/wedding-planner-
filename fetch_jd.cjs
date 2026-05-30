const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

fetchUrl('https://jsdl.in/RSL-YDA1780165098')
  .then(html => {
    const regex = /https:\/\/content\.jdmagicbox\.com\/[^\s"']+\.(?:jpg|jpeg)/gi;
    const matches = html.match(regex);
    if (matches) {
      const unique = [...new Set(matches)];
      console.log(JSON.stringify(unique, null, 2));
    } else {
      console.log('No images found.');
    }
  })
  .catch(console.error);
