import { useRoutes } from "@/components/router/createRoutes"
import React, { lazy, Suspense } from "react"
import { useRouteMatch, useLocation } from "react-router-dom"
import { Service1Page } from "../pages/testPage"

const F = lazy(
  () =>
    new Promise((resolve) => {
      resolve({
        default: () => {
          return <div>Hello Fake Test</div>
        },
      })
    })
)

const C = () => {
  return <div>'loading'</div>
}

const TestPage = (name) => ({ children }) => {
  console.log("TestPage:", children)

  return (
    <div>
      Hello {name} 11
      <div>{children}</div>
    </div>
  )
}

const TestPageLayout = ({ children }) => {
  return (
    <div style={{ margin: 50 }}>
      <h1>TestPageLayout</h1>
      <div style={{ border: "1px solid red", minHeight: 200 }}>{children}</div>
    </div>
  )
}

// const ServicePage = React.lazy(() => import("service1/bootstrap"))

// const Service1Page = () => {
//   return (
//     <div>
//       <h1>Service1 </h1>
//       <ServicePage />
//       {/* <System2 system={{ url: "/service1/js/remoteEntry.js", scope: "service1", module: "./bootstrap" }}></System2> */}
//     </div>
//   )
// }

const routerConfig = [
  {
    path: "/test",
    name: "测试页面",
    component: TestPageLayout,
    children: [
      {
        path: "/a",
        component: TestPage("a"),
        children: [
          {
            path: "/list",
            routeProps: {
              exact: true,
            },
            component: TestPage("a1"),
          },
          {
            path: "/list/a",
            routeProps: {
              exact: true,
            },
            component: TestPage("a2"),
          },
        ],
      },
      {
        path: "/b",
        component: TestPage("b"),
        children: [
          {
            path: "/b2",
            component: TestPage("b2"),
            routeProps: {
              exact: true,
            },
            children: [
              {
                path: "/b2-1",
                component: TestPage("b2-1"),
              },
            ],
          },
        ],
      },
    ],
  },
]

const HomePage = () => {
  const match = useRouteMatch()

  const routes = useRoutes({ basePath: match.path, routerConfig })

  return (
    <div>
      Home Service
      <hr />
      <h2>Home Routes changed</h2>
      {routes}
      <hr />
      <Service1Page />
    </div>
  )
}

export default HomePage
