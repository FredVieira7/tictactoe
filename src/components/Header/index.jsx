import { useEffect, useRef, useState } from 'react'
import { menuItems } from '../../utils/menuItems'
import {
  HeaderWrapper,
  Title,
  Customizer,
  Menu,
  MenuItem,
  Button
} from './styles'

const Header = ({ colors, onColorChange }) => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <HeaderWrapper>
      <Title color={colors.text}>Jogo da Velha</Title>
      <Customizer ref={menuRef}>
        <Button onClick={() => setOpen(prev => !prev)}>Personalizar</Button>
        {open && (
          <Menu>
            {menuItems.map(({ label, key }) => (
              <MenuItem key={key}>
                <span>{label}:</span>
                <input
                  type="color"
                  value={colors[key]}
                  onChange={e => onColorChange(key, e.target.value)}
                />
              </MenuItem>
            ))}
          </Menu>
        )}
      </Customizer>
    </HeaderWrapper>
  )
}

export default Header
