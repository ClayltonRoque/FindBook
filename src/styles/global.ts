import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border:none;
    text-decoration: none;
}
body {
    background-color: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
}`