// getStaticPaths -> serve para gerar as urls das páginas em build time
// getStaticProps -> serve para buscar os dados das páginas em build time
// getStaticSideProps -> serve para buscar os dados das páginas em runtime - toda requisição (bundle fica no server)
// getInitialProps -> serve para buscar os dados das páginas em runtime - toda requisição (bundle também vem para o client) - hydrate

import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import AboutTemplate from 'templates/About'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)
}
