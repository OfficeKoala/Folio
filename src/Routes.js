
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainLayout from "./components/drawer/SideDrawer";
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <MainLayout />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
