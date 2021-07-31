import React from "react"
import { Route, Switch } from "react-router-dom"
// import Home from "../Home"
// import Details from "../Details"
// import NotFound from "../NotFound"
const Home = React.lazy(() => import('../Home'))
const Details = React.lazy(() => import('../Details'))
const NotFound = React.lazy(() => import('../NotFound'))

export const Index = () => {
    return (<div>
        <React.Suspense fallback="Loading...">
            <Switch>
                <Route path="/" exact><Home /></Route>
                <Route path="/:details" exact><Details /></Route>
                <Route path="*"><NotFound /></Route>
            </Switch>
        </React.Suspense>
    </div>)
}