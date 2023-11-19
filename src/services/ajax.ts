/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { message } from 'antd'
const instance = axios.create({
  timeout: 10 * 1000,
})

instance.interceptors.response.use(res => {
  const resData = (res.data || {}) as ResType
  const { errno, msg, data } = resData

  if (errno !== 0) {
    // 错误提示
    message.error(msg)
  }

  return data as any
})

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export default instance
