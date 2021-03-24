import React, { FunctionComponent, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Box, Text, Image, Flex } from 'theme-ui'
import { theme } from '../theme/theme'
import { getWeather, WeatherResponse, IMG_URL } from '../service/weatherApi'
import { PageContainer } from '../components/PageContainer'
import { convertUTCToTime } from '../utils'
import { Loading } from '../components/Loading'
import { Error } from '../components/Error'

const DEGREE_UNICODE = 'C\u00b0'

interface WeatherDetailsProps extends RouteComponentProps<{ city: string }> { }

export type WeatherData = {
  name: string
  main: string
  description: string
  icon: string
  temp: number
  temp_max: number
  temp_min: number
  sunrise: string
  sunset: string
  country_code: string
}

export const WeatherDetails: FunctionComponent<WeatherDetailsProps> = ({
  match: { params }
}) => {
  const initialWeatherState: WeatherData = {
    name: '',
    main: '',
    description: '',
    icon: IMG_URL,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    sunrise: '',
    sunset: '',
    country_code: ''
  }

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ message: '', status: false })
  const [weather, setWeather] = useState<WeatherData>(initialWeatherState)
  const [countryTime, setCountryTime] = useState('')

  useEffect(() => {
    getWeather(params.city).then((data: WeatherResponse) => {
      setWeather({
        name: data.name,
        main: data.weather[0].main,
        description: data.weather[0].description,
        icon: `${weather.icon}${data.weather[0].icon}@2x.png`,
        temp: Math.round(data.main.temp),
        temp_max: Math.round(data.main.temp_max),
        temp_min: Math.round(data.main.temp_min),
        sunrise: convertUTCToTime(data.sys.sunrise, data.timezone),
        sunset: convertUTCToTime(data.sys.sunset, data.timezone),
        country_code: data.sys.country
      })

      setCountryTime(convertUTCToTime(data.dt, data.timezone))
      setError({ message: '', status: false })
      setLoading(false)
    }).catch((e: Error) => {
      setError({ message: e.message, status: true })
    })
  }, [])

  if (error.status) {
    return (
      <Error
        message={error.message}
        city={params.city} />
    )
  }

  if (loading) return <Loading />

  return (
    <PageContainer>
      <Box as='main'>
        <Box as='article'>
          <Flex
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>

            <Text
              as='p'
              sx={{
                fontSize: ['2em', '3em']
              }}
            >
              {countryTime}
            </Text>

            <Image src={weather.icon} alt={'weather icon'} />
          </Flex>

          <Text
            as='h1'
            mb={[4]}
            sx={{
              fontFamily: 'ralewayBlack',
              textTransform: 'uppercase'
            }}
          >
            {weather.name}
          </Text>

          <Box>
            <ItemList title={'Weather'} content={weather.main} />
            <ItemList title={'Description'} content={weather.description} />
            <ItemList title={'Temperature'} content={`${weather.temp} ${DEGREE_UNICODE}`} />
            <ItemList title={'Max. Temp'} content={`${weather.temp_max} ${DEGREE_UNICODE}`} />
            <ItemList title={'Min. Temp'} content={`${weather.temp_min} ${DEGREE_UNICODE}`} />
            <ItemList title={'Sunrise'} content={weather.sunrise} />
            <ItemList title={'Sunset'} content={weather.sunset} />
          </Box>
        </Box>
      </Box>
    </PageContainer>
  )
}

type ItemListProps = {
  title: string
  content: string
}

const ItemList: FunctionComponent<ItemListProps> = ({
  title,
  content
}) => {
  return (
    <Box as='ul'
      mb={[3]}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: '0',
        borderBottom: `1px solid ${theme.colors?.grey}`,
      }}
    >
      <Box as='li'>
        {title}
      </Box>
      <Box
        as='li'
        sx={{
          fontFamily: 'ralewayBold',
          textTransform: 'capitalize'
        }}
      >
        {content}
      </Box>
    </Box>
  )
}
