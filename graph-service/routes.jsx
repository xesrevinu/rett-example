import React from "react"
import { Route, Switch, HashRouter } from "react-router-dom"

const AsyncPage = (X) => () => {
  return (
    <React.Suspense fallback="loading">
      <X />
    </React.Suspense>
  )
}

const HomePage = AsyncPage(React.lazy(() => import("@/pages/index")))

const Routes = (props) => {
  return (
    <HashRouter {...props}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/welcome" render={() => <div>welcome</div>} />
        <Route path="*" render={() => <div>not found</div>} />
      </Switch>
    </HashRouter>
  )
}

Routes.displayName = "Service1Routes(Routes)"

export default Routes
