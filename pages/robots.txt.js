import React from "react";

class Robots extends React.Component {
  static async getInitialProps({ res }) {

    let settedLocale = "com";
  
    if (typeof window !== 'undefined') {
        if (window.location.origin.includes('humoq.de')) {
            settedLocale = "de";
        } else {
            settedLocale = "com";
        }
    }

res.setHeader("Content-Type", "text/plain");
res.write(`User-agent: *
Allow: /

Sitemap: https://humoq.${settedLocale}/sitemap.xml`);
res.end();

  }
}

export default Robots;