import type { FC } from 'react'
import QuestionInputConfig, { QuestionInputPropsType } from './QuestionInput'
import QuestionTitleConfig, { QuestionTitlePropsType } from './QuestionTitle'

export type ComponentPropsType = QuestionInputPropsType & QuestionTitlePropsType

export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

// 全部的组件配置的列表
const componentConfigList: ComponentConfigType[] = [QuestionInputConfig, QuestionTitleConfig]

export function getComponentConfigByType(type: string) {
  return componentConfigList.find(c => c.type === type)
}
