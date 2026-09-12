import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import FeatureHighlights from '@site/src/components/FeatureHighlights';
import Reveal from '@site/src/components/Reveal';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={clsx(styles.heroGridSingle, 'text--center')}>
          <Heading as="h1" className="hero__title">
            Network configuration
            <br />
            for Linux.
          </Heading>
          <p className="hero__subtitle">
            Async-first network configuration manager with a{' '}
            <code>systemctl</code>-style interface. Integrates with
            systemd-networkd, systemd-resolved, and systemd-hostnamed over
            D-Bus, and uses netlink for link, address, and route
            operations.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/zyvorai/netctl#quick-start">
              Get Started
            </Link>
            <Link
              className="button button--outline button--lg button--secondary"
              to="https://github.com/zyvorai/netctl">
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProblemStatement() {
  return (
    <section className={styles.problem}>
      <div className="container">
        <Reveal className="row">
          <div className="col col--8 col--offset-2 text--center">
            <Heading as="h2" className={styles.sectionHeading}>
              Why netctl
            </Heading>
            <p>
              Linux network configuration is usually either raw{' '}
              <code>ip</code>/<code>nmcli</code> commands with no
              declarative story, or a heavyweight full network manager.
              netctl takes the <code>systemctl</code> shape people already
              know and applies it to networking: link, address, route,
              DNS, and hostname management, talking directly to
              systemd-networkd/resolved/hostnamed over D-Bus and to the
              kernel over netlink.
            </p>
            <p>
              Declarative YAML/TOML apply, profiles, backup/restore, diff,
              and a <code>doctor</code> diagnostics command round out the
              day-2 story — JSON output, watch mode, a TUI, shell
              completions, and dry-run previews are all part of the same
              CLI, not bolted-on extras.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustBand() {
  return (
    <section className={styles.trust}>
      <div className="container">
        <Reveal className={styles.trustGrid}>
          <div>
            <Heading as="h3" className={styles.sectionHeading}>
              Open source, Rust
            </Heading>
            <p>
              Apache-2.0 licensed, written in Rust. The Community Edition
              in this repo ships the full feature set — link/address/
              route/DNS/hostname management, declarative apply, doctor
              diagnostics, TUI, and shell completions. Zyvor Enterprise
              operates the same feature set at fleet scale with SLA-backed
              support, alongside netevd and cloud-netconfig.
            </p>
            <Link to="/docs/enterprise">See the Enterprise comparison →</Link>
          </div>
          <div className={styles.trustBadges}>
            <img
              src="https://github.com/zyvorai/netctl/actions/workflows/ci.yml/badge.svg"
              alt="CI status"
            />
            <img
              src="https://img.shields.io/badge/license-Apache--2.0-blue.svg"
              alt="Apache 2.0 license"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EnterpriseCTA() {
  return (
    <section className={styles.enterprise}>
      <div className="container text--center">
        <Reveal>
          <Heading as="h2" className={styles.sectionHeading}>
            Need fleet-scale, SLA-backed support?
          </Heading>
          <p className={styles.enterpriseCopy}>
            netctl's Community Edition is Apache-2.0 and free to run in
            production. Zyvor Enterprise operates the same feature set at
            fleet scale, alongside netevd and cloud-netconfig, with
            professional services and SLA-backed support.
          </p>
          <Link
            className="button button--primary button--lg"
            href="mailto:sales@zyvor.dev">
            Contact sales@zyvor.dev
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="netctl — network configuration CLI for Linux"
      description="Async-first network configuration manager with a systemctl-style interface, for systemd-networkd/resolved/hostnamed and netlink.">
      <HomepageHeader />
      <main>
        <ProblemStatement />
        <Reveal>
          <FeatureHighlights />
        </Reveal>
        <TrustBand />
        <EnterpriseCTA />
      </main>
    </Layout>
  );
}
