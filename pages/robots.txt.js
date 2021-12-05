import React from "react";

class Robots extends React.Component {
  static async getInitialProps({ req, res }) {

res.setHeader("Content-Type", "text/plain");
res.write(`User-agent: *
Allow: /

Sitemap: https://${req.headers['host']}/sitemap.xml`);
res.end();

  }
}

export default Robots;