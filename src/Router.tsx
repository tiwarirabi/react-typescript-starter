import React from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import HomeController from "./views/Home/HomeController";

const Router = (props: any) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={HomeController} path="/" exact={true} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;