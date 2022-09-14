import { async } from 'q'
import Client from './api'

export const GetSets = async () => {
  try {
    const res = await Client.get('api/sets/')
    return res.data
  } catch (e) {
    throw e
  }
}
export const NewSet = async (data, userId) => {
  try {
    const res = await Client.post(`api/sets/create`, data)
    return res.data
  } catch (e) {
    throw e
  }
}

export const SetFlashcards = async (flashcardId) => {
  try {
    const res = await Client.get(`api/sets/details`)
    return res.data
  } catch (e) {
    throw e
  }
}

export const CreateFlashcard = async (data, setId) => {
  try {
    const res = await Client.post(`api/flashcards/${setId}/create`, data)
    return res.data
  } catch (e) {
    throw e
  }
}

export const EditSet = async (data, setId) => {
  try {
    const res = await Client.put(`api/sets/${setId}`, data)
    return res.data
  } catch (e) {
    throw e
  }
}
export const GetSetsByUser = async () => {
    try {
      const res = await Client.get(`api/sets/`)
      return res.data
    } catch (e) {
      throw e
    }
  }
  
  export const DeleteSet = async (setId) => {
    try {
      const res = await Client.delete(`api/sets/${setId}`)
      return res.data
    } catch (e) {
      throw e
    }
  }
  export const DeleteFlashcard = async (flashcardId) => {
    try {
      const res = await Client.delete(`api/flashcards/${flashcardId}`)
      return res.data
    } catch (e) {
      throw e
    }
  }
  