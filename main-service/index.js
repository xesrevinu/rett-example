import React from "react"
import ReactDom from "react-dom"
import { B } from "./b"

const createScriptTag = function (src) {
  const script = document.createElement("script")
  script.type = "text/javascript"
  script.src = src
  script.charset = "UTF-8"
  script.id = src
  return script
}

// setTimeout(() => {
//   console.log("load service main update")

//   // requirejs(["/service1/static/js/main.js"], function (...args) {
//   //   // const a = require("someLibNam")
//   //   console.log(args)
//   // })

//   a.appendChild(createScriptTag("/service1/static/js/runtime-service1-main.js"))
//   a.appendChild(createScriptTag("/service1/static/js/main.chunk.js"))
//   // a.appendChild(createScriptTag("/service1/static/js/0.chunk.js"))

//   console.log("load done service ")
// }, 1000)

const A = () => (
  <div>
    1123asdsd
    <B />
  </div>
)

console.log(A)

const a = document.createElement("div", { id: "root" })
a.id = "root"

document.body.appendChild(a)

ReactDom.render(<A />, document.getElementById("root"))
