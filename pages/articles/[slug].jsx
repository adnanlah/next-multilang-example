import Head from "next/head";
import { request } from "../../lib/datocms";

export default function Article({article}) {
    return (
        <article>
            <Head>
                <title>{article.name}</title>
            </Head>
            <h6>{article.name}</h6>
            <ul>
                <li>Article slug: <i>{article.slug}</i></li>
                <li>Article id: <i>{article.id}</i></li>
            </ul>
        </article>
    )
}

export async function getStaticPaths({locales, defaultLocale}) {
    const paths = []
    for (const locale of locales) {
        const data = await request({
            query: `query Articles($locale: SiteLocale) {
                allArticles(locale: $locale) { slug }
            }`,
            variables: { locale: locale }
        });
        for (const article of data.allArticles) {
            paths.push({
                params: {
                  slug: article.slug,
                },
                locale,
            })
        }
    }
  
    return {
      paths: paths,
      fallback: false,
    };
}
  
export async function getStaticProps({ params, locale }) {
    const ARTICLEPAGE_QUERY = `query ArticlePage($locale: SiteLocale, $slug: String) {
        article(locale: $locale, filter: { slug: { eq: $slug } }) {
            id
            slug
            name
            _firstPublishedAt
        }
    }`;

    const data = await request({
        query: ARTICLEPAGE_QUERY,
        variables: { slug: params.slug, locale  }
    });

    return {
        props: data
    };
}