"use client"
import { sculptureList } from "./data.js"
import { useState } from "react";

export default function Sculpture() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);


    let sculpture = sculptureList[index];
    let hasPrev = index > 0;
    let hasNex = index < sculptureList.length - 1;


    function handlePrevClick() {
        if (hasPrev) {
            setIndex(index - 1);
        }
    }
    function handleNextClick() {
        if (hasNex) {
            setIndex(index + 1);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <>
            <button onClick={handlePrevClick} disabled={!hasPrev}>Previous</button>
            <button onClick={handleNextClick} disabled={!hasNex}>Next</button>

            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img src={sculpture.url} alt={sculpture.alt} />

            <button onClick={handleMoreClick}>{showMore ? "Hide" : "Show"} More</button>
            {showMore && <p>{sculpture.description}</p>}
        </>
    );
}