import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../../pages/home"
import WordGuess from "../../pages/wordGuess"


function Router(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact Path="/wordGuess" component={WordGuess}/>
        </Switch>
        
        </BrowserRouter>
    )
}

export default Router;