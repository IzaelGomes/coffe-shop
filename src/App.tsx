import { Routers } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/theme/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
