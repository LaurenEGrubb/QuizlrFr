import Client from './api'
// import { BASE_URL } from './api'
export const SignInUser = async (data) => {
  try {
    const res = await Client.post(`/api/users/login`, data)
    console.log(res)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}
export const RegisterUser = async (data) => {
  try {
    const res = await Client.post(`/api/users/register`, data)
    return res.data
  } catch (error) {
    throw error
  }
console.log(data)
}
// export const UpdatePassword = async (data) => {
//   try {
//     const res = await Client.put(`/api/users/updatepassword`, data)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

export const CheckSession = async () => {
  try {
    const res = await Client.get('/api/users/session')
    return res.data
  } catch (error) {
    throw error
  }
}
