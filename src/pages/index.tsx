import * as React from "react"
import { SocialIcon } from "react-social-icons"

export default function IndexPage() {
  return (
    <main>
      <div className="grid h-screen place-items-center p-5">
        <div>
          <div className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">
            Anosh Malik
          </div>
          <div className="flex flex-1">
            <SocialIcon className="mr-1" url="https://www.linkedin.com/in/anoshmalik" target={"_blank"} />
            <SocialIcon className="mr-1" url="https://github.com/KingNoosh" target={"_blank"} />
            <SocialIcon className="mr-1" url="https://twitter.com/KingNoosh" target={"_blank"} />
          </div>
        </div>
      </div>
    </main>
  )
}
