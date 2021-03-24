import { Theme } from 'theme-ui'

import '../assets/fonts/raleway.css'

export const theme: Theme = {
  colors: {
    text: '#1E1C1D',
    background: '#fff',
    white: '#fff',
    greyClear: '#f5f0e1',
    grey: '#eee',
    orange: '#ff6e40',
    error: '#ff0000'
  },
  fontSizes: {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.50rem',
    lg: '1.75rem',
    xl: '2rem',
  },
  fonts: {
    ralewayRegular: 'ralewayRegular, sans-serif',
    ralewayBold: 'ralewayBold, sans-serif',
    ralewayThin: 'ralewayThin, sans-serif',
    ralewayBlack: 'ralewayBlack, sans-serif',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'text',
      outlineColor: 'transparent'
    },
    secondary: {
      color: 'white',
      bg: 'orange',
      outlineColor: 'transparent'
    }
  },
  styles: {
    root: {
      fontFamily: 'ralewayRegular',
      fontSize: ['xs', 'sm', 'md'],
      color: 'text',
      margin: 0,
      padding: 0,
      border: 0,
      p: {
        marginY: ['.5em !important']
      }
    }
  }
}
