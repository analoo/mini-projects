import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../../pages/home"
import WordGuess from "../../pages/wordGuess"


function Router(){
    return (
        <BrowserRouter>
        <Switch>
            <Router exact path="/" component={Home}/>
            <Router exact Path="/wordGuess" component={WordGuess}/>
        </Switch>
        
        </BrowserRouter>
    )
}

export default Router;