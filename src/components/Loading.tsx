import React from 'react'
import { Spinner } from 'theme-ui'
import { theme } from '../theme/theme'

export const Loading = () => {
  return (
    <Spinner
      sx={{
        color: `${theme.colors?.orange}`,
        position: 'absolute',
        bottom: '50%',
        left: '42.5%'
      }}
    />
  )
}
