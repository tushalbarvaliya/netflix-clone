import { Bell, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "./ui/input"
import { useMutation } from "@tanstack/react-query"
import { searchMovies } from "@/api/moiveList"
import type { Movie, MoviesResponse } from "@/utils/type"
import HorizontalMovie from "./HorizontalMovie"
import { useEffect, useState } from "react"

const Header = () => {
  const [search, setSearch] = useState<string>("")
  const [data, setData] = useState<Movie[] | undefined>()
  const { mutate, isPending } = useMutation({
    mutationFn: searchMovies,
    onSuccess: (data: MoviesResponse) => {
      setData(data?.results)
    },
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      mutate(search)
    }, 500)

    return () => clearTimeout(timer)
  }, [search, mutate])

  return (
    <>
      <nav className="fixed top-0 z-10 flex h-10 w-full items-center justify-between bg-stone-900/80 p-6 sm:px-25">
        <div className="flex h-10 items-center gap-4">
          <Link to={"/home"}>
            <img
              src="/full-logo.png"
              alt=""
              className="h-10 w-30 object-cover"
            />
          </Link>
          <div className="hidden items-center gap-4 lg:flex">
            <Link to="#">Home</Link>
            <Link to="#">TV Shows</Link>
            <Link to="#">Movies</Link>
            <Link to="#">New & Popular</Link>
            <Link to="#">My List</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            <Search className="absolute ml-2" />
            <Input
              placeholder="Search..."
              className="pl-10"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
          </div>
          <Bell />
        </div>
        {data && search != "" && !isPending && (
          <div className="absolute top-12 right-10 z-50 w-[95%] bg-black/75">
            <HorizontalMovie title={"Search"} movies={data.slice().reverse()} />
          </div>
        )}
      </nav>
    </>
  )
}

export default Header
