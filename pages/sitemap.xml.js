import React from "react";
import { server } from '../config/index';
import { useRouter } from 'next/router'

// Languages
const languages = {
  en: require('../locale/en.json'),
  de: require('../locale/de.json')
}
const sitemapXml = data => {
  let projectsXML = "";
  const router = useRouter();
  const { locale } = router;
  const domain = languages[locale].DOMAIN;
  data.map(post => {
    const projectURL = `https://${domain}/game/${post.slug}`;
    projectsXML += `
      <url>
        <loc>${projectURL}</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>https://${domain}/</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://${domain}/category/adventure</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/arcade</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/puzzle</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/multiplayer</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/action</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/3d</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/racing</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/sports</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/2-player</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/hypercasual</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/io</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/farming</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/top-picks</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/clicker</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/bejeweled</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/social</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/ingame-purchase</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/boys</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/girls</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/stickman</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/shooting</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/soccer</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/cooking</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/baby</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://${domain}/category/.io</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      ${projectsXML}
    </urlset>`;
};

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const data = await fetch(`${server}/summary/`)
    const games = await data.json();
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemapXml(games));
    res.end();
  }
}

export default Sitemap;