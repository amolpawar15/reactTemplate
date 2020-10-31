import React from 'react';
// import { div } from './Calc';

function Card(props) {
    return (
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="myPic" className="card_img" />
                <div className="card_info">
                    <span className="card_category"> {props.title}</span>
                    <h3 className="card_title">{props.name}</h3>
                    <a href="https://www.youtube.com/watch?v=yAoLSRbwxL8" target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    )


}



export default Card;