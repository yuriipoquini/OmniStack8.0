import React from 'react';
import './main.css'

import logo from '../assets/logo.svg'
import dislike from '../assets/dislike.svg'
import like from '../assets/like.svg'

export default function Main({ match }) {
    return (

        <div className="main-container">
            <img src={logo} alt="TinDev" />

            <ul>
                <li>
                    <img src="https://avatars1.githubusercontent.com/u/41344686?v=4" alt=" " />
                    <footer>
                        <strong>My Name</strong>
                        <p>Hello my name is yuri and i love eat ice cream</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>

                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars0.githubusercontent.com/u/26507200?v=4" alt=" " />
                    <footer>
                        <strong>My Name</strong>
                        <p>Hello my name is yuri and i love eat ice cream</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>

                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars1.githubusercontent.com/u/33640684?v=4" alt=" " />
                    <footer>
                        <strong>My Name</strong>
                        <p>Hello my name is yuri and i love eat ice cream</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>

                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/487669?v=4" alt=" " />
                    <footer>
                        <strong>My Name</strong>
                        <p>Hello my name is yuri and i love eat ice cream</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>

                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>

    );
}
