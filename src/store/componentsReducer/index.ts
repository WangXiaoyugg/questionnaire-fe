import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '../../components/Question'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  props: ComponentPropsType
}

export type ComponentsStateType = {
  componentList: ComponentInfoType[]
  selectedId: string
}

const INIT_STATE: ComponentsStateType = {
  componentList: [],
  selectedId: '',
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents: (state: ComponentsStateType, action: PayloadAction<ComponentsStateType>) => {
      return action.payload
    },
    // 修改 selectIdPayload
    changeSelectId: (state: ComponentsStateType, action: PayloadAction<string>) => {
      state.selectedId = action.payload
    },
  },
})

export const { resetComponents, changeSelectId } = componentsSlice.actions

export default componentsSlice.reducer
