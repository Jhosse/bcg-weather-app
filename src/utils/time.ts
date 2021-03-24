import moment from 'moment-timezone'

export const convertUTCToTime = (unixTime: number, timezone: number): string => {
  let timeToMs = unixTime * 1000
  timeToMs += timezone * 1000
  return moment(timeToMs).format('LT')
}
