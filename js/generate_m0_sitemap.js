const axios = require('axios');
const xml2js = require('xml2js');
const fs = require('fs').promises;
const path = require('path');

async function fetchSitemap(url) {
  const response = await axios.get(url);
  return response.data;
}

async function modifySitemap(sitemapXml, appendParam = '?m=0') {
  const parser = new xml2js.Parser({ explicitArray: false });
  const builder = new xml2js.Builder();
  
  const result = await parser.parseStringPromise(sitemapXml);
  const urls = result.urlset.url;
  
  if (Array.isArray(urls)) {
    urls.forEach(url => {
      if (!url.loc.endsWith(appendParam)) {
        url.loc += appendParam;
      }
    });
  } else if (urls && !urls.loc.endsWith(appendParam)) {
    urls.loc += appendParam;
  }
  
  return builder.buildObject(result);
}

async function saveSitemap(content, outputFile) {
  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(outputFile, content, 'utf8');
}

async function main() {
  const sitemaps = [
    'https://www.ai-image-journey.com/sitemap.xml',
    'https://www.ai-image-journey.com/sitemap-pages.xml'
  ];

  for (const sitemapUrl of sitemaps) {
    console.log(`Processing ${sitemapUrl}`);
    const sitemapContent = await fetchSitemap(sitemapUrl);
    const modifiedSitemap = await modifySitemap(sitemapContent);
    const outputFile = `docs/sitemaps/${sitemapUrl.split('/').pop().replace('.xml', '_m0.xml')}`;
    await saveSitemap(modifiedSitemap, outputFile);
    console.log(`Saved modified sitemap to ${outputFile}`);
  }
}

main().catch(console.error);