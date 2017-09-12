import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import stylesheet from './../styles/main.scss';

const Layout = props => (
  <div>
    <Head>
      <title> { props.title } </title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header />
    <main>
      { props.children }
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: 'McMakler NextJS Seed',
};

export default Layout;
