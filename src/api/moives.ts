import { axiosInstance } from "./axiosInstance"

export const movies = async (page: number) => {
  const response = await axiosInstance.get(`/discover/movie?page=${page}`)
  return response.data
}

export const popular = async (page: number) => {
  const response = await axiosInstance.get(`/movie/popular?page=${page}`)
  return response.data
}
export const upcoming = async (page: number) => {
  const response = await axiosInstance.get(`/movie/upcoming?page=${page}`)
  return response.data
}
