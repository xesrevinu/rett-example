import * as R from "ramda"
import React, { useMemo } from "react"
import { Route, Switch } from "react-router-dom"
import { DebugRoutesView } from "./DebugView"

const PageNotFound = () => "404"
const NoComponent = () => "Empty Route Node"

const RouteTag = Route

const createRouteTags = (basePath, routerConfig) => {
  const genRoutes = R.map((config) => {
    const { path, children = [], component: Component, routeProps = {} } = config
    const blockBasePath = basePath + path

    const routeTagProps = R.pick(["exact", "strict", "sensitive"], routeProps)

    const nodeProps = {
      key: blockBasePath,
      path: blockBasePath,
      ...routeTagProps,
      config: config,
    }

    // 最后一级别路由
    if (children.length === 0 || !children) {
      return <RouteTag {...nodeProps} render={Component || NoComponent} />
    }

    // 存在子级别路由
    if (children.length > 0) {
      const Cp = Component ? (
        <Component>{createRouteTags(blockBasePath, children)}</Component>
      ) : (
        createRouteTags(blockBasePath, children)
      )

      return <RouteTag {...nodeProps}>{Cp}</RouteTag>
    }

    return null
  })

  return genRoutes(routerConfig)
}

export const useRoutes = ({ basePath = "", routerConfig }) => {
  const { routes, base } = useMemo(() => {
    const base = basePath === "/" ? "" : basePath

    return {
      routes: createRouteTags(base, routerConfig),
      base: base,
    }
  }, [basePath, routerConfig])

  return (
    <>
      <DebugRoutesView basePath={base} routerConfig={routerConfig} />
      <Switch>
        {routes}
        <Route path={base + "/*"} component={PageNotFound} />
      </Switch>
    </>
  )
}
