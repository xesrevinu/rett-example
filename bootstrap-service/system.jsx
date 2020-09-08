import React, { useEffect, useRef, useState, useLayoutEffect } from "react"
import ReactDOM from "react-dom"
import { run } from "./bootstrap"

// get component default export
function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default")
    const container = window[scope] // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default)
    const factory = await window[scope].get(module)
    const Module = factory()

    return Module
  }
}

async function getComponentExport(scope, module) {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__("default")
  const container = window[scope] // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default)
  const factory = await window[scope].get(module)

  return factory()
}

const useDynamicScript = (args) => {
  const [ready, setReady] = React.useState(false)
  const [failed, setFailed] = React.useState(false)

  React.useEffect(() => {
    if (!args.url) {
      return
    }

    const element = document.createElement("script")

    element.src = args.url
    element.type = "text/javascript"
    element.async = true

    setReady(false)
    setFailed(false)

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${args.url}`)
      setReady(true)
    }

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${args.url}`)
      setReady(false)
      setFailed(true)
    }

    document.head.appendChild(element)

    return () => {
      console.log(`Dynamic Script Removed: ${args.url}`)

      document.head.removeChild(element)

      document.querySelectorAll(`style[data-name*=${args.name}]`).forEach((x) => {
        document.head.removeChild(x)
      })
    }
  }, [args.url])

  return {
    ready,
    failed,
  }
}

export function System(props) {
  const { ready, failed } = useDynamicScript({
    url: props.system && props.system.url,
    name: props.system.scope,
  })

  if (!props.system) {
    return <h2>Not system specified</h2>
  }

  if (!ready) {
    return <h2>Loading dynamic script: {props.system.url}</h2>
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>
  }

  const Component = React.lazy(loadComponent(props.system.scope, props.system.module))

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  )
}

const Block = (props) => {
  const BlockRef = useRef(null)
  const ServiceRef = useRef(null)

  useEffect(() => {
    let s = async () => {
      const f = await getComponentExport(props.system.scope, props.system.module)

      const run = f.run

      run(BlockRef.current)

      ServiceRef.current = f
    }

    if (BlockRef.current) {
      s()
    }
  }, [BlockRef])

  useLayoutEffect(() => {
    console.log("useLayoutEffect")

    return () => {
      ServiceRef.current.uninstall(BlockRef.current)
    }
  }, [])

  return (
    <div ref={BlockRef} id={props.id}>
      {!ServiceRef && "loading"}
    </div>
  )
}

export function System2(props) {
  const { ready, failed } = useDynamicScript({
    url: props.system && props.system.url,
    name: props.system.scope,
  })

  if (!props.system) {
    return <h2>Not system specified</h2>
  }

  if (!ready) {
    return <h2>Loading dynamic script: {props.system.url}</h2>
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>
  }

  return (
    <div>
      S1
      <Block system={props.system} id="service1" />
    </div>
  )
}
