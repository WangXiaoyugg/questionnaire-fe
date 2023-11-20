import React, { FC } from 'react'
import { Spin } from 'antd'
import { Outlet } from 'react-router-dom'
import useLoadUserData from '../hooks/userLoadUserData'
import useNavPage from '../hooks/useNavPage'

const QuestionLayout: FC = () => {
  const { waitingUserData } = useLoadUserData()
  useNavPage(waitingUserData)

  return (
    <div style={{ height: '100vh' }}>
      <div>
        {waitingUserData ? (
          <div style={{ textAlign: 'center', marginTop: '150px' }}>
            <Spin />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  )
}

export default QuestionLayout
