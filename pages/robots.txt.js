import React from "react";

class Robots extends React.Component {

  static async getInitialProps({ req, res }) {

res.setHeader("Content-Type", "text/plain");
res.write(`User-agent: *
Allow: /

res.end();

  }
}

export default Robots;