import Head from 'next/head';
import Link from 'next/link'
import { request } from "../lib/datocms";
import styles from '../styles/App.module.css';

export default function Home({englishArticles, frenchArticles, defaultArticles}) {
  return (
    <div>
      <Head>
        <title>Multilanguage blog</title>
      </Head>
      <p>This is a <a href="https://nextjs.org/">Next.js</a> example of a multilanguage blog with translated slugs. Powered by <a href="https://www.datocms.com/">DatoCMS</a>.</p>
      <b>Default locale</b>
      <ul>
        {defaultArticles.map((article, idx) => {
          return (<li key={idx} >
            <Link href={article.href} passHref><a>{article.name} <i>(#{article.id})</i></a></Link>
          </li>)
        })}
      </ul>
      <b>English locale</b>
      <ul>
        {englishArticles.map((article, idx) => {
          return (<li key={idx} >
            <Link href={article.href} passHref><a>{article.name} <i>(#{article.id})</i></a></Link>
          </li>)
        })}
      </ul>
      <b>French locale</b>
      <ul>
        {frenchArticles.map((article, idx) => {
          return (<li key={idx} >
            <Link href={article.href} passHref><a>{article.name} <i>(#{article.id})</i></a></Link>
          </li>)
        })}
      </ul>
    </div>
  )
}

export async function getServerSideProps(context) {
  const dataEN = await request({query: `{allArticles(locale: en, orderBy: _createdAt_ASC) { id slug name }}`});
  const dataFR = await request({query: `{allArticles(locale: fr, orderBy: _createdAt_ASC) { id slug name }}`});

  return {
    props: {
      defaultArticles: dataEN.allArticles.map((article) => ({...article, href: `articles/${article.slug}`})),
      englishArticles: dataEN.allArticles.map((article) => ({...article, href: `en/articles/${article.slug}`})),
      frenchArticles: dataFR.allArticles.map((article) => ({...article, href: `fr/articles/${article.slug}`})),
    },
  };
}