import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import type { Movie } from "@/utils/type"

type Props = {
  title: string
  movies: Movie[] | undefined
}

const HorizontalMovie = ({ title, movies }: Props) => {
  return (
    <>
      <div className="my-4 h-fit w-full overflow-hidden px-15">
        <h1 className="my-4 text-3xl">{title}</h1>
        <Carousel className="relative h-fit w-full">
          <CarouselContent className={"h-fit"}>
            {movies
              ?.slice()
              .reverse()
              .map((item: Movie) => {
                return (
                  <CarouselItem className="h-50 basis-1/4">
                    <div className="relative h-full w-full">
                      <img
                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                        alt=""
                        className="absolute h-full w-full object-cover object-top brightness-75"
                      />
                      <div className="absolute right-0 bottom-4 z-10 mx-4 w-full text-right">
                        <h1 className="text-2xl text-white">
                          {item.title || item.name}
                        </h1>
                        <p className="flex items-center justify-end gap-3">
                          <Star fill="yellow" />
                          {item.vote_average.toString().slice(0, 4)}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
          </CarouselContent>
          <CarouselNext  className="h-full"/>
          <CarouselPrevious className="h-full"/>
        </Carousel>
        {movies?.length == 0 && <h1>No result found </h1>}
      </div>
    </>
  )
}

export default HorizontalMovie
