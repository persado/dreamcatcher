import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Dreamcatcher is a service that provides a lightweight API for
          generating JPEG/PNG and PDF representations of a web page, using
          headless Chrome and Puppeteer.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Introduction
          </Link>
          &nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick_start">
            Quick Start
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Dreamcatcher web page image / PDF snapshot service">
      <HomepageHeader />
    </Layout>
  );
}
