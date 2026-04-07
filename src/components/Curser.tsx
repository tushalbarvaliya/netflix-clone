import { useRef } from "react"
import { Outlet } from "react-router-dom"
import gsap from "gsap"
const Curser = () => {
  const curserRef = useRef<HTMLDivElement>(null)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(curserRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power2.out",
    })
  }
  return (
    <div onMouseMove={handleMouseMove}>
      <div
        ref={curserRef}
        className="fixed top-0 z-100 h-5 w-5 rounded-full bg-white"
      ></div>
      <Outlet />
    </div>
  )
}

export default Curser
