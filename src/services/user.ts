import ajax, { ResDataType } from './ajax'

export async function getUserInfoService(): Promise<ResDataType> {
  const url = `/api/user/info`
  const data = (await ajax.get(url)) as ResDataType
  return data
}

export async function registerService(
  username: string,
  password: string,
  nickname?: string
): Promise<ResDataType> {
  const url = `/api/user/register`
  const body = { username, password, nickname: nickname || username }
  const data = (await ajax.post(url, body)) as ResDataType
  return data
}

export async function loginService(username: string, password: string): Promise<ResDataType> {
  const url = `/api/user/login`
  const body = { username, password }
  const data = (await ajax.post(url, body)) as ResDataType
  return data
}
