import React from "react"
import ReactDom from "react-dom"
import Routes from "./routes"

function run(target) {
  console.log("main service loaded: ", React.version)

  ReactDom.render(<Routes />, target)
}

export { run }
