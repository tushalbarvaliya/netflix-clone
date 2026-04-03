import { Bell, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "./ui/input"

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 z-99 flex h-10 w-full items-center justify-between border-2 border-red-600 sm:px-25">
        <div className="flex h-10 items-center gap-4 border-2 border-blue-500">
          <Link to={"/home"}>
            <img
              src="/full-logo.png"
              alt=""
              className="h-10 w-30 object-cover"
            />
          </Link>
          <div className="hidden items-center gap-4 lg:flex ">
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
            <Input placeholder="Search..." className="pl-10" />
          </div>
          <Bell />
        </div>
      </nav>
    </>
  )
}

export default Header
