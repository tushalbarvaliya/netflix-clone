import { axiosInstance } from "./axiosInstance"

export const tvShows = async (id: number) => {
  const response = await axiosInstance.get(`/discover/tv?page=${id}`)
  return response.data
}
