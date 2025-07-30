import { FooterButton, FooterWrapper } from "./styles"

const Footer = ({ onSave, onLoad }) => {
  return (
    <FooterWrapper>
      <FooterButton onClick={onSave}>Salvar partida</FooterButton>
      <FooterButton onClick={onLoad}>Carregar partida salva</FooterButton>
    </FooterWrapper>
  )
}

export default Footer
