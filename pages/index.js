import React from 'react';

import Layout from './../components/Layout';

const Index = () => (
  <Layout>
    <div>Hello World!</div>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Index;
