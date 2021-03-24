import React, { useState, useEffect, MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { Box, Text } from 'theme-ui'
import { isValidWord } from '../utils'
import { getKeyInLocalStorage, setKeyInLocalStorage } from '../utils'
import { NewSearch } from '../components/NewSearch'
import { StorageSearch } from '../components/StorageSearch'

export const LOCAL_STORAGE_KEY = 'searchKey'

export const Home = () => {
  const history = useHistory()

  const [searchKey, setSearchKey] = useState('')
  const [storageSearch, setStorageSearch] = useState('')
  const [validationError, setValidationError] = useState(false)

  useEffect(() => {
    const searchStorage = getKeyInLocalStorage(LOCAL_STORAGE_KEY)
    if (searchStorage) {
      setSearchKey(searchStorage)
      setStorageSearch(searchStorage)
    }
  }, [])

  const handleOnClickSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    if (!searchKey.length || !isValidWord(searchKey)) return setValidationError(true)
    setKeyInLocalStorage(LOCAL_STORAGE_KEY, searchKey)
    history.push(`/weather/${searchKey}`)
  }

  return (
    <PageContainer>
      <Box as='header'>
        <Text
          as='h1'
          marginY={['1em']}
          sx={{
            fontFamily: 'ralewayBlack',
            textAlign: 'center',
            textTransform: 'uppercase'
          }}>
          BCG Weather
        </Text>
      </Box>

      <Box as='main'>
        {storageSearch
          ? <StorageSearch
            searchKey={searchKey}
            setSearchKey={setSearchKey}
            localStorageKey={LOCAL_STORAGE_KEY}
            setStorageSearch={setStorageSearch}
            onClickSubmit={handleOnClickSubmit} />
          : <NewSearch
            onClickSubmit={handleOnClickSubmit}
            validationError={validationError}
            setValidationError={setValidationError}
            setSearchKey={setSearchKey} />}
      </Box>
    </PageContainer>
  )
}
