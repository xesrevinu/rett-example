import React, { memo } from "react"
import styles from "./DebugView.scss"
import * as R from "ramda"

console.log(styles)

const NoComponent = () => "Empty Route Node"

const NodeInfo = ({ config }) => {
  return (
    <div>
      <span>name: {config.name}</span> - <span>path: {config.path}</span>
    </div>
  )
}

const CustomDebugRouteTag = (props) => {
  const { children, config } = props

  let c = null

  if (children) {
    if (typeof children === "function") {
      c = children(props)
    } else {
      c = children
    }
  }

  return (
    <div className={styles.panel}>
      <div className={styles.title}>
        <NodeInfo config={config} />
      </div>
      {config.children && config.children.length > 0 && <div className={styles.content}>{c}</div>}
    </div>
  )
}

const createDebugView = (basePath, routerConfig) => {
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
      return <CustomDebugRouteTag {...nodeProps} render={Component || NoComponent} />
    }

    // 存在子级别路由
    if (children.length > 0) {
      return <CustomDebugRouteTag {...nodeProps}>{createDebugView(blockBasePath, children)}</CustomDebugRouteTag>
    }

    return null
  })

  return genRoutes(routerConfig)
}

const DebugRoutesView = memo(({ basePath, routerConfig }) => {
  const debugRoutesView = createDebugView(basePath, routerConfig)

  return <div className={styles.container}>{debugRoutesView}</div>
})

DebugRoutesView.displayName = "DebugRoutesView"

export { DebugRoutesView }
