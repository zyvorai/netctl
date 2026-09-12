import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Link, address, route management',
    description:
      'Direct netlink operations for interfaces, addresses, and routes — no shelling out to ip or parsing its text output.',
    to: 'https://github.com/zyvorai/netctl#features',
  },
  {
    title: 'DNS and hostname, over D-Bus',
    description:
      'Talks directly to systemd-resolved and systemd-hostnamed over D-Bus for DNS and hostname management, alongside systemd-networkd integration.',
    to: 'https://github.com/zyvorai/netctl#features',
  },
  {
    title: 'Declarative YAML/TOML apply',
    description:
      'Profiles, backup/restore, and diff — describe the network state you want and apply it, instead of scripting imperative commands.',
    to: 'https://github.com/zyvorai/netctl#configuration-samples',
  },
  {
    title: 'doctor diagnostics',
    description:
      'A built-in doctor command surfaces configuration problems directly, rather than leaving you to cross-reference several tools.',
    to: 'https://github.com/zyvorai/netctl#troubleshooting',
  },
  {
    title: 'systemctl-style interface',
    description:
      'The command shape people already know from systemd, applied to network configuration — not a new mental model to learn.',
    to: 'https://github.com/zyvorai/netctl#quick-start',
  },
  {
    title: 'JSON output, TUI, dry-run',
    description:
      'Scriptable JSON output and watch mode for automation, a TUI and shell completions for interactive use, and dry-run previews before anything changes.',
    to: 'https://github.com/zyvorai/netctl#features',
  },
];

function Feature({title, description, to}: FeatureItem) {
  return (
    <div className="col col--4">
      <Link to={to} className={styles.card}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function FeatureHighlights(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
