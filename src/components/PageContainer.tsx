import React, { FunctionComponent, ReactNode } from 'react'
import { Footer } from './Footer'
import { Box } from 'theme-ui'

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer: FunctionComponent<PageContainerProps> = ({
  children
}) => {
  return (
    <Box
      className={'container'}>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          maxWidth: '768px',
          margin: '0 auto',
          padding: '1em 1em 4em 1em'
        }}>
        {children}
      </Box>

      <Footer />
    </Box>
  )
}
