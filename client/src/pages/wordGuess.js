import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/container/Header"
import Counter from "../components/counter/Counter"


function WordGuess() {
    const words = ["han solo", "jedi", "yoda", "droid", "leia", "death star", "darth vader", "the force", "lightsaber", "storm trooper", "empire", "rebel alliance", "padawan", "jedi master"]
    let letters = "qwertyuiopasdfghjklzxcvbnm"

    const [count, setCount] = useState(0)
    const [word, setWord] = useState([])
    const [displayWord, setDisplayWord] = useState([])

    const [wrongGuesses, setWrongGuess] = useState([])
    const [totalGuesses, setTotalGuess] = useState([])

    useEffect(() => {
        let word1 = words[Math.floor(Math.random() * words.length)].split("")
        setWord(word1)
        setCount(11);
        setWrongGuess([]);
        setTotalGuess([])
        createDisplay(word1)
    }, [])

    console.log(word)
    console.log(displayWord)

    const createDisplay = (str) => {
        let string = "";
        str.forEach(letter => {
            if (letter === " ") {
                string += " "
            }
            else if (totalGuesses.includes(letter)) {
                string += letter
            }
            else {
                string += "_"
            }
        })
        if (string.includes("_")) {
            setDisplayWord(string.split(""))
        }
        else {
            console.log("Congrats! You Won!")
            setCount(11);
            setWrongGuess([]);
            setTotalGuess([])
            setWord(words[Math.floor(Math.random() * words.length)].split(""))
            return createDisplay(word)
        }

    }



    document.onkeyup = (event) => {
        let letter = event.key.toLowerCase()
        if (letters.includes(letter)) {
            if (totalGuesses.includes(letter)) {
                return
            }
            else if (word.includes(letter)) {
                let guess = totalGuesses
                guess.push(letter);
                setTotalGuess(guess)
                setDisplayWord(createDisplay(word))
            }
            else {
                let wrong = wrongGuesses
                wrong.push(letter);
                setWrongGuess(wrong)
                setCount(count - 1)
                if (count <= 0) {
                    console.log("You lost!")
                }
            }
        }
    }

    return (
        <div className="uk-background-secondary uk-light">
            <Header h1="Welcome to Word Guess" h2="The object of the game is to guess a word before you are out of guesses"></Header>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-grid-match uk-child-width-1-3 uk-grid">
                        <Counter count={count} text="Guesses Remaining"></Counter>
                        <div className="uk-card uk-card-default uk-card-body uk-background-secondary uk-text-center">
                            Word:
                            {console.log(displayWord)}
                        </div>

                        <div className="uk-card uk-card-default uk-card-body uk-background-secondary uk-light uk-text-center">
                            {displayWord}
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default WordGuess;