import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <>
      <main className="relative h-screen w-full overflow-hidden">
        <img
          src="/bg_banner.jpg"
          alt=""
          className="absolute -z-10 h-screen w-screen object-cover object-center"
        />
        <img src="/full-logo.png" alt="" className="absolute top-10 left-10 h-12" />
        <div className="z-10 flex h-screen w-full items-center justify-center">
          <form className="flex flex-col gap-4 bg-black/75 p-10">
            <h1 className="text-3xl font-semibold">Sign in</h1>
            <Input placeholder="Enter Email or Phone Number" className="p-4" />
            <Input placeholder="Password" className="p-4" />
            <Button className="mt-4 p-4">Sign in</Button>
            <div className="flex items-center justify-between text-xs">
              <label htmlFor="" className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                Remember me
              </label>
              <p>Need help</p>
            </div>
            <p className="text-xs">
              New To Netflix?{" "}
              <Link to={"/signup"} className="text-blue-600 underline">
                Sign Up now
              </Link>
            </p>
            <p className="w-75 text-xs">
              This page is protected by google reCAPTCHA to ensure you're not a
              bot.{" "}
              <Link to="#" className="text-blue-600 underline">
                Learn more
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  )
}

export default LoginPage
