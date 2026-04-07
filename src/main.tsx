import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import LoginPage from "./pages/loginPage"
import SignUpPage from "./pages/SignUpPage"
import TVShowsPage from "./pages/TVShowsPage"
import Movies from "./pages/Moives"
import Popular from "./pages/Popular"
import Upcoming from "./pages/Upcoming"
import Curser from "./components/Curser"

const queryClient = new QueryClient()
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Curser />} >
              <Route path="/signup" element={<SignUpPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/home" element={<HomePage />}></Route>
              <Route path="/tv-shows" element={<TVShowsPage />}></Route>
              <Route path="/movies" element={<Movies />}></Route>
              <Route path="/popular" element={<Popular />}></Route>
              <Route path="/upcoming" element={<Upcoming />}></Route>
              <Route path="/watch-list" element={<HomePage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
)
