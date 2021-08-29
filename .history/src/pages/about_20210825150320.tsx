// getStaticPaths -> serve para gerar as urls das páginas em build time
// getStaticProps -> serve para buscar os dados das páginas em build time
// getStaticSideProps -> serve para buscar os dados das páginas em runtime - toda requisição (bundle fica no server)
// getInitialProps -> serve para buscar os dados das páginas em runtime - toda requisição (bundle também vem para o client) - hydrate

import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import PageTemplate from 'templates/Pages'

export default function AboutPage() {
  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths }
}

/* export const getStaticProps = async () => {

  console.log(pages)

  return {
    props: {}
  }
}
 */
