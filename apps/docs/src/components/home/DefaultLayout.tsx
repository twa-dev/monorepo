import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Redirect} from '@docusaurus/router';

/**
 * Component which is rendered in case, current environment is usual browser.
 * @constructor
 */
export function DefaultLayout() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout noFooter={true} description={siteConfig.tagline}>
      <Redirect to={'docs/introduction/about-platform'}/>
    </Layout>
  );
}