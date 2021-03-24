import React, { FunctionComponent, MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Text } from 'theme-ui'
import { PageContainer } from './PageContainer'
import { theme } from '../theme/theme'
import { removeKeyInLocalStorage } from '../utils'
import { LOCAL_STORAGE_KEY } from '../pages/Home'
import { CustomButton } from '../components/CustomButton'

interface ErrorScreenProps {
  city: string
  message: string
}

export const Error: FunctionComponent<ErrorScreenProps> = ({
  city,
  message
}) => {
  const history = useHistory()

  const handleOnClickReset = (e: MouseEvent<HTMLButtonElement>) => {
    removeKeyInLocalStorage(LOCAL_STORAGE_KEY)
    history.push('/')
  }

  return (
    <PageContainer>
      <Box as='main'>
        <Box
          as='article'
          sx={{
            textAlign: 'center'
          }}
        >
          <Text
            as='h1'
            sx={{
              fontFamily: 'ralewayBlack',
              textTransform: 'uppercase',
              m: ['1em']
            }}
          >
            Whoops!
          </Text>

          <Text
            as='p'
            py={['1em']}
            sx={{
              fontFamily: 'ralewayBold',
            }}
          >
            There was something wrong with your search,&nbsp;
            <Text
              as='span'
              sx={{
                fontFamily: 'ralewayBold',
                textTransform: 'capitalize',
                color: `${theme.colors?.orange}`
              }}
            >
              {city}
            </Text>
            &nbsp;didn't return anything.
          </Text>

          <Text as='p'>
            Please refine your search and try again.
          </Text>

          <CustomButton
            text={'Reset'}
            variant={'secondary'}
            clickHandler={handleOnClickReset}
            styles={{
              mt: ['1.5em'],
              width: ['100%'],
              mb: ['10em']
            }}
          />

          <Text
            as='p'
            sx={{
              color: `${theme.colors?.error}`,
            }}
          >
            {message}
          </Text>
        </Box>
      </Box>
    </PageContainer>
  )
}
