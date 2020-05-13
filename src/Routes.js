
import React, { Component } from "react";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import history from './history';
import inspiration from "./description/inspiration";
import talented from "./description/talented";
import happiness from "./description/happiness";
import beautiful from "./description/beautiful";
import pure from "./description/pure";
import perfect from "./description/perfect";
import competent from "./description/competent";
import growth from "./description/growth";
import unique from "./description/unique";
import weird from "./description/weird";
import nucleus from "./description/nucleus";
import bestfriend from "./description/bestfriend";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/inspiration" component={inspiration} />
                    <Route path="/talented" component={talented} />
                    <Route path="/happiness" component={happiness} />
                    <Route path="/beautiful" component={beautiful} />
                    <Route path="/pure" component={pure} />
                    <Route path="/perfect" component={perfect} />
                    <Route path="/competent" component={competent} />
                    <Route path="/growth" component={growth} />
                    <Route path="/unique" component={unique} />
                    <Route path="/weird" component={weird} />
                    <Route path="/nucleus" component={nucleus} />
                    <Route path="/bestfriend" component={bestfriend} />
                </Switch>
            </Router>
        )
    }
}
