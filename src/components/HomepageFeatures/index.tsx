import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Small-Batch Roasting',
    Svg: require('@site/static/img/coffee1.png').default,
    description: (
      <>
        Each batch is hand-roasted in limited quantities to ensure peak freshness, aroma, and flavor in every cup
      </>
    ),
  },
  {
    title: 'Ethically Sourced Beans',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We partner directly with farmers to source high-quality beans, ensuring fair practices and sustainable farming methods.
      </>
    ),
  },
  {
    title: 'Freshness Guaranteed',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Roasted to order and shipped quickly, our coffee reaches you at its flavorful, aromatic best—never stale.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
