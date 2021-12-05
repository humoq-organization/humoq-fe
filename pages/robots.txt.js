import React from "react";

class Robots extends React.Component {
  static async getInitialProps({ req, res }) {

    const domain = req.headers.host;
    console.log(`request_source ${domain}`);
  
    if (domain === "humoq.de") {

res.setHeader("Content-Type", "text/plain");
res.write(`User-agent: *
Allow: /

Sitemap: https://humoq.de/sitemap.xml`);
res.end();

    } else {

res.setHeader("Content-Type", "text/plain");
res.write(`User-agent: *
Allow: /

Sitemap: https://humoq.com/sitemap.xml`);
res.end();

    }

  }
}

export default Robots;