import React from "react"
import { Route, Switch, HashRouter } from "react-router-dom"

const AsyncPage = (X) => () => {
  return (
    <React.Suspense fallback="loading">
      <X />
    </React.Suspense>
  )
}

const HomePage = AsyncPage(React.lazy(() => import("@/pages/homePage")))

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/x" render={() => <div>x</div>} />
        <Route path="/" component={HomePage} />
        <Route path="/welcome" render={() => <div>welcome</div>} />
      </Switch>
    </HashRouter>
  )
}
