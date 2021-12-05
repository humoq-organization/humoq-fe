import React from "react";
import { server } from '../config/index';

const sitemapXml = data => {
  let projectsXML = "";
  
  let settedLocale = "com";
  
  if (typeof window !== 'undefined') {
      if (window.location.origin.includes('humoq.de')) {
          settedLocale = "de";
      } else {
          settedLocale = "com";
      }
  }

  data.map(post => {
    const projectURL = `https://humoq.${settedLocale}/game/${post.slug}`;
    projectsXML += `
      <url>
        <loc>${projectURL}</loc>
      </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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