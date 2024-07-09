import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Our Community',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        Join the NorAir Labs community and contribute to our open-source documentation project.
        Our community-driven approach ensures that everyone can help improve and expand our documentation, making it more comprehensive and useful for all users.
      </>
    ),
  },
  {
    title: 'Open-Standards',
    Svg: require('@site/static/img/open-standards.svg').default,
    description: (
      <>
        Our documentation leverages open standards like Git and Markdown to ensure accessibility and collaboration.
        By using Git for version control and Markdown for easy-to-write, easy-to-read formatting, we empower our community to contribute seamlessly. 
      </>
    ),
  },
  {
    title: 'API & Examples',
    Svg: require('@site/static/img/seamless-integration.svg').default,
    description: (
      <>
        Dive into our detailed API documentation, enriched with practical examples to simplify your integration process.
        Our clear instructions and real-world scenarios make it easy to understand and utilize our API.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
