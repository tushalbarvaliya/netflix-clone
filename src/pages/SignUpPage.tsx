import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react"
import { useState } from "react"

const SignUpPage = () => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <>
      <main className="relative h-screen w-full">
        <img
          src="/bg-image.png"
          alt=""
          className="absolute -z-10 h-full w-full object-cover"
        />
        <div className="flex h-screen w-full items-center justify-center">
          <div className="flex h-125 w-1/2 bg-black/75">
            <div className="grid grid-cols-4">
              <img
                src="/joker-poster.png"
                alt=""
                className="h-full w-30 object-cover object-left"
              />
              <img
                src="/daredevil-poster.png"
                alt=""
                className="h-full w-30 object-cover object-center py-10"
              />
              <img
                src="/now-poster.png"
                alt=""
                className="h-full w-30 object-cover object-center"
              />
              <img
                src="/money-poster.png"
                alt=""
                className="h-full w-30 object-cover object-center py-10"
              />
            </div>
            <div className="relative w-3/4">
              <img src="/logo.png" alt="" className="absolute h-0" />
              <form className="flex flex-col gap-4 p-8">
                <h1 className="my-4 text-2xl font-bold">Sign Up</h1>
                <div className="flex gap-4">
                  <div className="relative flex items-center">
                    <User className="absolute scale-80" />
                    <Input placeholder="First name " className="py-4 pl-8" />
                  </div>
                  <div className="relative flex items-center">
                    <User className="absolute scale-80" />
                    <Input placeholder="Last name " className="py-4 pl-10" />
                  </div>
                </div>

                <div>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-2 scale-80" />
                    <Input
                      placeholder="Email or Phone No"
                      type="email"
                      className="py-4 pl-10"
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="relative flex w-full items-center">
                    <Lock className="absolute left-2 scale-80" />
                    <Input
                      placeholder="Create New Password"
                      type={show ? "text" : "password"}
                      className="w-full py-4 pl-10"
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        setShow((prev) => !prev)
                      }}
                      className="absolute right-2 bg-transparent hover:bg-transparent"
                    >
                      {show ? <EyeOff /> : <Eye />}
                    </Button>
                  </div>
                </div>
                <Button className="text-md p-4 font-semibold">Continue</Button>
                <label htmlFor="" className="flex items-center gap-2 text-xs">
                  <input type="checkbox" name="" id="" />
                  Remember me
                </label>
              </form>
              <hr />
              <div className="mt-4 w-full px-8">
                <Button className="w-full bg-white text-blue-500 hover:bg-white/75">
                  FaceBook
                </Button>
                <p className="mt-4 text-xs">
                  This page is Protected by google reCAPTCHA to ensure you're
                  not a bot.{" "}
                  <span className="text-blue-500 underline">
                    Learn More.
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignUpPage
