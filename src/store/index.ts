import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './user'
import componentsReducer, { ComponentsStateType } from './componentsReducer'

export type StateType = {
  user: UserStateType
  components: ComponentsStateType
}

export default configureStore({
  reducer: {
    // 分模块
    user: userReducer,

    components: componentsReducer,
  },
})
