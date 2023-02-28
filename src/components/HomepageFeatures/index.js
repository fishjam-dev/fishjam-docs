import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ready-to-use elements',
    image: require('@site/static/img/puzzle.png').default,
    description: (
      <>
        Jellyfish provides frequently needed tools that are packed into plugins and allows you to create a pipeline out of them.
      </>
    ),
  },
  {
    title: 'Easy to customize',
    image: require('@site/static/img/edit.png').default,
    description: (
      <>
        If you need to do some custom job, you can write your own element. Jellyfish simply defines the rules of creating them.

      </>
    ),
  },
  {
    title: 'Powered by Elixir',
    image: require('@site/static/img/elixir_logo.png').default,
    description: (
      <>
        Jellyfish is built in Elixir. It reaps the benefits of Elixir's scalability and fault tolerance.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* {image} */}
        {/* <img src={image}/> */}
        <img src={image} className={styles.featurePng}  />
        {/* <img src={image} className={styles.featurePng} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
