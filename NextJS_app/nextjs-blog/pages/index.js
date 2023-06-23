import Head from 'next/head';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I'm Joseph Cristian Silva Casas, student of mathematics and systems engineering.</p>
        <p>
          Take a look to my posts! {''}
          <Link href="/posts/first-post">go to post!</Link>
        </p>
      </section>
    </Layout>
  );
}
