const createScriptTag = function (src) {
  const script = document.createElement("script")
  script.type = "text/javascript"
  script.src = src
  script.charset = "UTF-8"
  script.id = src
  return script
}

module.exports = () => {
  console.log("main-service a1 a2 a3")

  // const a = document.createDocumentFragment()

  // setTimeout(() => {
  //   console.log(1)
  //   a.appendChild(createScriptTag("/service1/static/js/runtime-main.js"))
  //   a.appendChild(createScriptTag("/service1/static/js/0.chunk.js"))
  //   a.appendChild(createScriptTag("/service1/static/js/main.chunk.js"))
  //   document.body.appendChild(a)
  // }, 1000)
}
