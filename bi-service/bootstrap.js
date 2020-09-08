import React from "react"
import ReactDom from "react-dom"

const A = () => {
  return <div>service2</div>
}

function run(target) {
  console.log("main service loaded: ", React.version)

  ReactDom.render(<A />, target)
}

export { run }
