import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={24} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
        consequatur delectus eum nesciunt expedita repellat repellendus quam
        velit hic aspernatur. Delectus quia repellat ipsum placeat magnam,
        dignissimos ex ratione laborum.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
