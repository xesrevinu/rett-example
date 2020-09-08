import { ReactService } from "@rett/core"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const DelayedFallback = ({ delay = 300, children }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), delay)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return <>{show && children}</>
}

const ServiceLoading = () => <div>服务加载中</div>

const Service1 = new ReactService({
  name: "graph-service",
  fallback: (
    <DelayedFallback delay={300}>
      <ServiceLoading />
    </DelayedFallback>
  ),
  basename: "/",
  moduleLoader: {
    url: "/graph-service/js/remoteEntry.js",
    scope: "graph-service",
    module: "./bootstrap",
  },
})

const Service1Page = () => {
  const [x, setX] = useState([])

  const { pathname } = useLocation()

  return (
    <div>
      TestPage
      <button
        onClick={() => {
          const Cp = Service1.asComponent({
            // 使用 ReactDOM.render 渲染，否则当作组件直接使用
            independent: true,
            // moduleLoader: () => import("service1/bootstrap"),
          })

          const f = x.concat({
            i: (Math.random() * 10000).toString(),
            Cp: Cp,
          })

          setX(f)
        }}
      >
        add service
      </button>
      <button
        onClick={() => {
          const f = x.slice()

          f.pop()

          setX(f)
        }}
      >
        pop service
      </button>
      <div>
        <h2>services</h2>

        {x.map((data, index) => {
          const Cp = data.Cp

          return <Cp key={data.i} />
        })}
      </div>
      <div id="test-service1"></div>
    </div>
  )
}

export { Service1Page }
