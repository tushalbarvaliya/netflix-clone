import { getDiscover, getMovies, getPopular } from "@/api/moiveList"
import Header from "@/components/Header"
import HorizontalMovie from "@/components/HorizontalMovie"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import type { MoviesResponse } from "@/utils/type"
import { useQuery } from "@tanstack/react-query"
import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react"

const HomePage = () => {
  const { data } = useQuery<MoviesResponse>({
    queryKey: ["now-playing"],
    queryFn: getPopular,
  })
  const { data: movies } = useQuery<MoviesResponse>({
    queryKey: ["popular"],
    queryFn: getMovies,
  })
  const { data: discover } = useQuery<MoviesResponse>({
    queryKey: ["discover"],
    queryFn: getDiscover,
  })
  return (
    <>
      <Header />
      <div className="flex w-full items-center justify-center overflow-hidden">
        <Carousel
          className="h-screen w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className={"h-screen"}>
            {data?.results.map((item) => {
              return (
                <CarouselItem className="basis-full">
                  <div className="relative h-full w-full">
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                      alt=""
                      className="absolute h-full w-full object-cover object-top brightness-75"
                    />
                    <div className="absolute bottom-20 left-20 z-10">
                      <h1 className="my-4 text-6xl text-white">{item.title}</h1>
                      <p className="w-200">{item.overview}</p>
                      <p className="mt-2 flex w-200 gap-3">
                        <Star fill="yellow"></Star>
                        {item.vote_average.toString().slice(0, 4)}
                      </p>
                      <p></p>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <HorizontalMovie title="Popular Movies" movies={movies?.results} />
      <HorizontalMovie title="Discover Movies" movies={discover?.results} />
    </>
  )
}

export default HomePage
