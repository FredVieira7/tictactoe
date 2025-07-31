import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  border-top: 1px solid #ccc;
  margin-top: 2rem;
`


export const FooterButton = styled.button`
  background-color: #111;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`
