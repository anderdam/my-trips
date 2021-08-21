import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo na cor branca com um fundo rosa e React Avançado escrito ao lado "
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenho de um desenvolvedor sentada em frente a um computador com um código"
    />
  </S.Wrapper>
)

export default Main
