import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const Home: FC = () => {
  const nav = useNavigate()
  function clickHandler() {
    nav({
      pathname: '/login',
      search: 'b=21',
    })
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={clickHandler}>登陆</button>
      <Link to="/register?a=10">注册</Link>
    </div>
  )
}

export default Home
