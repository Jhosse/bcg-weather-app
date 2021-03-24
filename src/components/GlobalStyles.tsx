import React from 'react'
import { Global } from '@emotion/react'

export const GlobalStyles = () => {
  return (
    <Global
      styles={{
        'html': {
          position: 'relative',
          minHeight: '100%'
        }
      }}
    />
  )
}
