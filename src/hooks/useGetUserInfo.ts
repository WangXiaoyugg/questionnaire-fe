import { useSelector } from 'react-redux'
import { StateType } from '../store'
import { UserStateType } from '../store/user'

function useGetUserInfo() {
  const { username, nickname } = useSelector<StateType>(state => state.user) as UserStateType

  return { username, nickname }
}

export default useGetUserInfo
