import AboutTemplate from 'templates/About'

const About = () => <AboutTemplate />

// getStaticPaths -> serve para gerar as urls das páginas em build time
// getStaticProps -> serve para buscar os dados das páginas em build time
// getStaticSideProps -> serve para buscar os dados das páginas em runtime - toda requisição (bundle fica no server)
// getInitialProps -> serve para buscar os dados das páginas em runtime - toda requisição (bundle também vem para o client)

export default About
