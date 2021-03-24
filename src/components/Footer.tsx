import React from 'react'
import { Box, Text, Link } from 'theme-ui'

import { theme } from '../theme/theme'

export const Footer = () => {
  return (
    <Box
      as='footer'
      sx={{
        fontFamily: 'ralewayThin',
        width: '100%',
        height: 'auto',
        padding: '0.5em 1em',
        textAlign: 'right',
        position: 'absolute',
        bottom: 0,
        color: `${theme.colors?.white}`,
        background: `${theme.colors?.text}`,
        borderTop: `2px solid ${theme.colors?.orange}`
      }}>

      <Text as='p'>
        Powered by &nbsp;
          <Link
          href="https://openweathermap.org/api"
          sx={{
            color: `${theme.colors?.orange}`
          }}
        >
          OpenWeather
          </Link>
      </Text>
    </Box>
  )
}
