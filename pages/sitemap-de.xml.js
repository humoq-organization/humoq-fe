import React from "react";
import { server } from '../config/index';

const sitemapXml = data => {
  let projectsXML = "";

  data.map(post => {
    const projectURL = `https://humoq.de/game/${post.slug}`;
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
        <loc>https://humoq.de/</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/adventure</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/arcade</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/puzzle</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/multiplayer</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/action</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/3d</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/racing</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/sports</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/2-player</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/hypercasual</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/io</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/farming</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/top-picks</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/clicker</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/bejeweled</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/social</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/ingame-purchase</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/boys</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/girls</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/stickman</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/shooting</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/soccer</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/cooking</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/baby</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.de/category/.io</loc>
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