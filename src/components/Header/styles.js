import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2.1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  flex: 1;
  text-align: center;
  margin-left: 7rem;
  color: ${({ color }) => color};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const Customizer = styled.div`
  position: relative;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`

export const Menu = styled.div`
  position: absolute;
  right: 0;
  margin-top: 1.25rem;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 260px;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 20px;
    border-width: 0 8px 10px 8px;
    border-style: solid;
    border-color: transparent transparent white transparent;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    top: -11px;
    right: 19px;
    border-width: 0 9px 11px 9px;
    border-style: solid;
    border-color: transparent transparent #ccc transparent;
    z-index: 1;
  }
`

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`

export const Button = styled.button`
  background: rgb(17, 17, 17);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: white;
  transition: background 0.5s ease;

  &:hover {
    background: rgb(66, 66, 66);
  }
`
