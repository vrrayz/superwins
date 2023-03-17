import React from 'react'
import { TextLarge, TextInlineSmall } from '../general_components/typography'
import { Checkbox, Input } from '../general_components/Input'
import { Button } from '../general_components/Button'

export const Signup = () => {
  return (
    <>
    <TextLarge className='text-uppercase'>Welcome</TextLarge>
    <Input placeholder="Username" className='mb-3' />
    <Input placeholder="Email" className='mb-3' />
    <Button className='btn-primary d-block w-100 mb-3' disabled>Complete Registration</Button>
    <Checkbox /> <TextInlineSmall style={{fontSize: '14px'}} className='text__grey-2'>By creating your account you confirm that you are at least 18 years old</TextInlineSmall>
    </>
  )
}
