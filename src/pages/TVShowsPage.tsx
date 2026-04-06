import { tvShows } from "@/api/tv-shows"
import { Button } from "@/components/ui/button"
import type { MoviesResponse } from "@/utils/type"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Navigate } from "react-router-dom"
import Header from "@/components/Header"

const TVShowsPage = () => {
  const [id, setId] = useState<number>(1)
  const { data, isLoading, isError } = useQuery<MoviesResponse>({
    queryFn: () => {
      return tvShows(id)
    },
    queryKey: [`tv-show${id}`],
  })
  if (isError) {
    return <Navigate to={"/home"} replace />
  }

  return (
    <>
      <Header />
      <div className="mt-14 h-full w-full">
        <h1 className="m-4 font-mono text-3xl font-semibold">TV shows</h1>
        <div className="grid grid-cols-6 gap-4">
          {isLoading &&
            Array.from({ length: 20 }, (_, i) => i).map((item) => (
              <Skeleton
                key={item}
                className="h-fit text-white"
                style={{
                  height: "60vh",
                  width: "18vw",
                }}
              ></Skeleton>
            ))}
          {!isLoading &&
            data?.results.map((item) => (
              <div
                key={item.id}
                className="h-fit text-white"
                style={{
                  height: "50vh",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.poster_path})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
        </div>
        <div className="my-4 flex items-center justify-center gap-2">
          <Button
            className="p-4"
            onClick={() => {
              setId((prev) => prev + 1)
            }}
          >
            Next
          </Button>
          <Button
            className="p-4"
            onClick={() => {
              setId((prev) => prev - 1)
            }}
          >
            Previous
          </Button>
        </div>
      </div>
    </>
  )
}

export default TVShowsPage
