import axios from "axios"
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTU5YzI0OTYwODI3ZDEyMjZmNDNkMjg5OGJmYzM0NiIsIm5iZiI6MTc3NTEyODY1OC4xNzkwMDAxLCJzdWIiOiI2OWNlNTA1MmI0MTdjMzFkMzFkMjhmMGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aeTfpnHZ_WGrDO22JNP1bBovAl42ZI7YPYi9uc3ud30",
  },
})