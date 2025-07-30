import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Board from './components/Board'
import Header from './components/Header'
import GlobalStyle from './styles/GlobalStyle'
import { defaultTheme } from './styles/defaultTheme'

const App = () => {
  const [colors, setColors] = useState(defaultTheme)

  const handleColorChange = (key, value) => {
    setColors(prev => ({ ...prev, [key]: value }))
  }

  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Header colors={colors} onColorChange={handleColorChange} />
      <Board colors={colors} />
    </ThemeProvider>
  )
}

export default App
