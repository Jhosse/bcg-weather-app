import React, { FunctionComponent, MouseEvent } from 'react'
import { Button, SxStyleProp } from 'theme-ui'

interface CustomButtonProps {
  text: string
  variant: string
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void
  styles?: SxStyleProp
}

export const CustomButton: FunctionComponent<CustomButtonProps> = ({
  text,
  variant,
  clickHandler,
  styles
}) => {
  return (
    <Button
      variant={`${variant}`}
      sx={{ ...styles }}
      onClick={clickHandler}
    >
      {text}
    </Button>
  )
}
