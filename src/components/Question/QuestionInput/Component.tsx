import React, { FC } from 'react'
import { Typography, Input } from 'antd'
import { QuestionInputDefaultProps, QuestionInputPropsType } from './interface'

const { Paragraph } = Typography

const QuestionInput: FC<QuestionInputPropsType> = props => {
  const { title = '', placeholder = '' } = { ...QuestionInputDefaultProps, ...props }
  return (
    <div>
      <Paragraph>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  )
}

export default QuestionInput
