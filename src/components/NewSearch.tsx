import React, { FunctionComponent, MouseEvent, ChangeEvent } from 'react'
import { Box, Text, Input, Label } from 'theme-ui'
import { theme } from '../theme/theme'
import { CustomButton } from './CustomButton'

interface NewSearchProps {
  onClickSubmit: (e: MouseEvent<HTMLButtonElement>) => Promise<any>
  validationError: boolean
  setValidationError: React.Dispatch<React.SetStateAction<boolean>>
  setSearchKey: React.Dispatch<React.SetStateAction<string>>
}
export const NewSearch: FunctionComponent<NewSearchProps> = ({
  onClickSubmit,
  validationError,
  setValidationError,
  setSearchKey
}) => {

  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValidationError(false)
    setSearchKey(e.target.value)
  }

  return (
    <Box as='article'>
      <Text as='p'>
        Welcome to intelligence weather forecasting service. Choose your location to find out about the weather. Lorem Ipsum is simply dummy text of the printing.
      </Text>

      <Text as='p'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </Text>

      <Box
        as='form'
        onSubmit={(e) => e.preventDefault()}
        pt={['1em']}
      >
        <Box
          sx={{
            position: 'relative',
            pb: ['1.5em']
          }}>
          <Label
            htmlFor='search'
            mb={1}>
            Please enter your location below:
          </Label>

          <Input
            id='search'
            name='search'
            type='search'
            onChange={handleOnChangeSearch}
            sx={{
              outlineColor: `${theme.colors?.text}`,
              '&::-webkit-search-cancel-button': {
                display: 'none'
              }
            }}
          />

          {validationError &&
            <Text
              as='p'
              sx={{
                color: `${theme.colors?.error}`,
                position: 'absolute',
                bottom: 0,
                fontSize: ['0.75em']
              }}>
              Please enter a valid country
          </Text>
          }
        </Box>

        <CustomButton
          text={'Submit'}
          variant={'primary'}
          clickHandler={onClickSubmit}
          styles={{
            mt: ['1em'],
            width: ['100%']
          }}
        />
      </Box>
    </Box>
  )
}
