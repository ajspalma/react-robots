import React from 'react';

const Card = () => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src="https://robohash.org/test?200x200" alt="robots" />
            <div>
                <h2>Jane Doe</h2>
                <h2>jane.doe@gmail.com</h2>
            </div>
        </div>
    );
}


export default Card;