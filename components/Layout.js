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
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: 'McMakler NextJS Seed',
};

export default Layout;
