import * as React from "react"
import { SocialIcon } from "react-social-icons"

export default function IndexPage() {
  return (
    <main>
      <div className="grid h-screen place-items-center">
        <div>
          <div className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">
            Anosh Malik
          </div>
          <div className="grid gap-1 grid-cols-12">
            <SocialIcon url="https://www.linkedin.com/in/anoshmalik" target={"_blank"} />
            <SocialIcon url="https://github.com/KingNoosh" target={"_blank"} />
            <SocialIcon url="https://twitter.com/KingNoosh" target={"_blank"} />
          </div>
        </div>
      </div>
    </main>
  )
}
