import React from "react"
import ReactDom from "react-dom"
import Routes from "./routes"

function run(element, props) {
  ReactDom.render(<Routes {...props} />, element)
}

function uninstall(element) {
  ReactDom.unmountComponentAtNode(element)
}

export { run, uninstall }

export default Routes
