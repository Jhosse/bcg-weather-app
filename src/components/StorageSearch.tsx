import React, { FunctionComponent, MouseEvent } from 'react'
import { Box, Text, Flex } from 'theme-ui'
import { theme } from '../theme/theme'
import { removeKeyInLocalStorage } from '../utils/localStorage'
import { CustomButton } from './CustomButton'

interface StorageSearchProps {
  searchKey: string
  setSearchKey: React.Dispatch<React.SetStateAction<string>>
  localStorageKey: string
  onClickSubmit: (e: MouseEvent<HTMLButtonElement>) => Promise<any>
  setStorageSearch: React.Dispatch<React.SetStateAction<string>>
}

export const StorageSearch: FunctionComponent<StorageSearchProps> = ({
  searchKey,
  setSearchKey,
  localStorageKey,
  onClickSubmit,
  setStorageSearch
}) => {
  const handleOnClickReset = (e: MouseEvent<HTMLButtonElement>) => {
    removeKeyInLocalStorage(localStorageKey)
    setStorageSearch('')
    setSearchKey('')
  }

  return (
    <Box as='article'>
      <Text as='p'>
        Your last search was based in&nbsp;
        <Text
          as='span'
          sx={{
            fontFamily: 'ralewayBold',
            textTransform: 'capitalize',
            color: `${theme.colors?.orange}`
          }}
        >
          {searchKey}
        </Text>, would you like to view the location again or rather find a new place.
      </Text>

      <Flex
        mt={[5]}
        sx={{
          flexDirection: ['column-reverse']
        }}>
        <CustomButton
          text={'Submit'}
          variant={'primary'}
          clickHandler={onClickSubmit}
          styles={{
            my: ['0.5em']
          }}
        />

        <CustomButton
          text={'Reset'}
          variant={'secondary'}
          clickHandler={handleOnClickReset}
          styles={{
            my: ['0.5em']
          }}
        />
      </Flex>
    </Box>
  )
}
