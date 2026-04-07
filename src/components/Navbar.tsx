import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Navbar = () => {
  const navContainer = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    gsap.from(navContainer.current?.children || navContainer.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      stagger: 0.2,
    })
  })
  return (
    <>
      <div ref={navContainer} className="flex h-10 items-center gap-4">
        <Link to={"/home"}>
          <img src="/full-logo.png" alt="" className="h-10 w-30 object-cover" />
        </Link>
        {/* <div className="hidden items-center gap-4 lg:flex"> */}
          <Link to="/home">Home</Link>
          <Link to="/tv-shows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/popular">New & Popular</Link>
          <Link to="/upcoming">Upcoming</Link>
        {/* </div> */}
      </div>
    </>
  )
}

export default Navbar
