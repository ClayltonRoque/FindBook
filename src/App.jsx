import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './components/search'

export function App() {

  return (
    <div >
      <ThemeProvider theme={defaultTheme}>
        <Home />  
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}


