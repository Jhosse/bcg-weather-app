import { useEffect, useRef } from 'react'

export const useInterval = (
  callback: () => void,
  delay: number | null | false,
  immediate?: boolean
) => {
  const savedCallback = useRef(() => { })

  useEffect(() => {
    savedCallback.current = callback
  });

  useEffect(() => {
    if (!immediate) return
    if (delay === null || delay === false) return
    savedCallback.current()
  }, [immediate])

  useEffect(() => {
    if (delay === null || delay === false) return undefined
    const tick = () => savedCallback.current()
    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}
