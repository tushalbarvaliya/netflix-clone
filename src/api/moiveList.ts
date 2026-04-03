import { axiosInstance } from "./axiosInstance"

export const getMovies = async () => {
  const response = await axiosInstance.get("/movie/now_playing")
  return response.data
}

export const getPopular = async () => {
  const response = await axiosInstance.get("/movie/popular")
  return response.data
}
export const getDiscover = async () => {
  const response = await axiosInstance.get("/discover/tv")
  return response.data
}
export const searchMovies = async (search: string) => {
  const response = await axiosInstance.get(`/search/movie?query=${search}'`)
  return response.data
}
