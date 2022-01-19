import Head from 'next/head';
import Link from 'next/link'
import { request } from "../lib/datocms";

export default function Home({allArticles}) {
  return (
    <div>
      <Head>
        <title>Multilanguage blog</title>
      </Head>
      <p>This is a <a href="https://nextjs.org/">Next.js</a> example of a multilanguage blog with translated slugs. Powered by <a href="https://www.datocms.com/">DatoCMS</a>.</p>
      <b>Default locale:</b>
      <ul>
        {allArticles.map((article, idx) => {
          return (<li key={idx} >
            <Link href={`articles/${article._allSlugLocales.find(e => e.locale === 'en').value}`} passHref>
              <a>{article._allNameLocales.find(e => e.locale === 'en').value}<i> (#{article.id})</i></a>
            </Link>
          </li>)
        })}
      </ul>
      <b>English locale:</b>
      <ul>
        {allArticles.map((article, idx) => {
          return (<li key={idx} >
            <Link href={`en/articles/${article._allSlugLocales.find(e => e.locale === 'en').value}`} passHref>
              <a>{article._allNameLocales.find(e => e.locale === 'en').value}<i> (#{article.id})</i></a>
            </Link>
          </li>)
        })}
      </ul>
      <b>French locale:</b>
      <ul>
        {allArticles.map((article, idx) => {
          return (<li key={idx} >
            <Link href={`fr/articles/${article._allSlugLocales.find(e => e.locale === 'fr').value}`} passHref>
              <a>{article._allNameLocales.find(e => e.locale === 'fr').value}<i> (#{article.id})</i></a>
            </Link>
          </li>)
        })}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const {allArticles} = await request({query: `{
    allArticles(locale: en, orderBy: _createdAt_ASC) {
      id
      slug
      _allNameLocales {
        locale
        value
      }
      _allSlugLocales {
        locale
        value
      }
    }
  }`})

  return { props: {allArticles} }
}