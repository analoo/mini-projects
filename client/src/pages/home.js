import React from "react";
import Header from "../components/container/Header"

function Home() {
    return (
        <div className="uk-background-secondary">
            <Header h1="Welcome to the Mini Projects Portal" h2="Select a Game to get Started"></Header>
            <div class="uk-grid-medium uk-child-width-1-3 uk-text-center uk-grid-match uk-grid uk-padding-large">
                <div >
                    <a className="uk-card uk-card-default uk-card-body uk-background-muted uk-light" href="/wordGuess" style={{backgroundImage:"url(wordGame.jpg)"}}>
                        <h2 className="bg-muted">Word Guess</h2>
                    </a>
                </div>

                <div >
                    <a className="uk-card uk-card-default uk-card-body uk-background-muted uk-light" href="#" style={{backgroundImage:"url(wordGame.jpg)"}}>
                        <h2 className="bg-muted">Placeholder</h2>
                    </a>
                </div>
                
                <div>
                    <div class="uk-card uk-card-default uk-card-body">Item</div>
                </div>
            </div>
        </div >

    )
}

export default Home;