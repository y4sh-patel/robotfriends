import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    const list = robots.map((robot) => {
        return (
            <Card
                key={robot.id}
                id={robot.id}
                name={robot.name}
                email={robot.email}
            />
        );
    });
    return <div>{list}</div>;
};

export default CardList;
