import { useState } from "react";
import store from "../store";

function DisplayNumber() {
    const [number, setNumber] = useState(store.getState().number);
    
    store.subscribe(function() {
        setNumber(store.getState().number);
    });

    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" value={number} readOnly />
        </div>
    )
}

export default DisplayNumber;