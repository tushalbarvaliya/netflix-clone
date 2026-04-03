import { axiosInstance } from "./axiosInstance"

export const getMovies = async () => {
  const response = await axiosInstance.get("/movie/now_playing")
  return response.data
}

export const getPopular = async () => {
  const response = await axiosInstance.get("/movie/popular")
  return response.data
}
