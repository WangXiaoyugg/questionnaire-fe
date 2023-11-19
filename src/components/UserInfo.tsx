import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { Button, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { LOGIN_PATHNAME } from '../router'
import { getUserInfoService } from '../services/user'
import { removeToken } from '../utils/user-token'
import useGetUserInfo from '../hooks/useGetUserInfo'
import { useDispatch } from 'react-redux'
import { logoutReducer } from '../store/user'
const UserInfo: FC = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const { username, nickname } = useGetUserInfo()

  function logout() {
    dispatch(logoutReducer())
    removeToken()
    nav(LOGIN_PATHNAME)
    message.success('退出成功')
  }

  const UserInfo = (
    <>
      <span style={{ color: '#e8e8e8' }}>
        <UserOutlined />
        {nickname}
      </span>
      <Button onClick={logout} type="link">
        退出
      </Button>
    </>
  )

  const Login = <Link to={LOGIN_PATHNAME}>登陆</Link>

  return <div>{username ? UserInfo : Login}</div>
}

export default UserInfo
