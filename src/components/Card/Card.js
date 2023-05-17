import React from 'react';
import Button from "../Button/Button";
import "./Card.css"

function Card({ fruit, amount, setAmount }) {

    function counter(operator) {
        setAmount((prev) => (prev + operator >= 0 ? prev + operator : 0));
    }

    return (
        <div className="card">
            <h1 className="card-header">{fruit}</h1>
            <div className="inner-container-card">
                <Button
                    className="operator_button"
                    handleClick={() => counter(-1)}
                >
                    -
                </Button>
                <p className="amount">{ amount }</p>
                <Button
                    className="operator_button"
                    handleClick={() => counter(+1)}

                >
                    +
                </Button>
            </div>
        </div>
    );
}

export default Card;