import React from "react";
import { server } from '../config/index';

const sitemapXml = data => {
  let projectsXML = "";

  data.map(post => {
    const projectURL = `https://humoq.com/game/${post.slug}`;
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
        <loc>https://humoq.com/</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/adventure</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/arcade</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/puzzle</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/multiplayer</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/action</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/3d</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/racing</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/sports</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/2-player</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/hypercasual</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/io</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/farming</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/top-picks</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/clicker</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/bejeweled</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/social</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/ingame-purchase</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/boys</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/girls</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/stickman</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/shooting</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/soccer</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/cooking</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/baby</loc>
        <lastmod>2021-12-09T22:10:53+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://humoq.com/category/.io</loc>
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