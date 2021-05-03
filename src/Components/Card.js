import React from "react";

const Card = ({ name, id, email }) => {
    return (
        <div className="bg-light-green dib pa3 grow ma2 br3">
            <img src={`https://robohash.org/${id}?200x200`} alt="" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;
