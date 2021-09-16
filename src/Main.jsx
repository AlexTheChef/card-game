import React, { useState, useEffect } from 'react'
import {images} from "./assets/images/index"

function Main() {

    const [gametime, setGametime] = useState(false)
    const [username, setUsername] = useState('')
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')
    const [number, setNumber] = useState('')
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)
    const [cardOrientation, setCardOrientation] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
        setUsername(input)
        setNumber(input2)
        setStart(true)
        setInput('')
        setInput2('')
        setGametime(true)
    };

    const flipCard = () => {
        setCardOrientation(()=> <h1 >FLIPPED</h1>)
    }

    //TIMER =>

    useEffect(() => {

        let interval = null;

        if (start) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        }
        else {
            clearInterval(interval);
        }

        return () => clearInterval(interval)
    }, [start])

    return (
        <div>
            <navbar className="navbar">
                <div className="timer">Name:&nbsp;<h3>{username}</h3></div>
                <div>Moves:&nbsp;</div>
                <div className="timer">Timer:&nbsp;
                    <h3>
                        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                        <span>{("0" + (time / 10) % 1000).slice(-2)}</span>
                    </h3>
                </div>
            </navbar>
            <div className={gametime ? "hidden" :"login"}>
                <form>
                    <div className="form-group">
                        <small className="form-text">
                            How should I call you my Lord?<br></br>
                        </small>
                        <label>Name:&nbsp;</label>
                        <input
                            placeholder="Most epic name ever!"
                            type="name"
                            className="form-control"
                            value={input} onChange={e => setInput(e.target.value)}
                        />
                    </div><br></br>
                    <small>
                        And with how many cards would you like to play? Should I recommend between 4 and 10?<br></br>
                    </small>
                    <label>Number:&nbsp;</label>
                    <input
                        className="form-control"
                        placeholder="Chouse your number wisely"
                        value={input2} onChange={e => setInput2(e.target.value)}
                    />
                    <br></br><br></br>
                    <button onClick={handleClick} className="btn">
                        Let's conquer!
                    </button>
                    <div className="hidden">
                        <button onClick={() => setStart(true)}>Start</button>
                        <button onClick={() => setStart(false)}>Stop</button>
                        <button onClick={() => { setTime(0); setStart(false); }}>Reset</button>
                    </div >
                </form>
            </div>
            <div className={gametime ?"game" : "hidden"}>
                <div className="game__board">
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                    <div className="card" onClick={flipCard}>{cardOrientation}</div>
                </div>
            </div>
        </div>
    );
}

export default Main;