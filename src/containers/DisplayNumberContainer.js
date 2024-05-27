import { useState } from "react";
import DisplayNumber from "../components/DisplayNumber";
import store from "../store";

function DisplayNumberContainer() {
    const [number, setNumber] = useState(store.getState().number);

    store.subscribe(function() {
        setNumber(store.getState().number);
    });

    return (
        <DisplayNumber number={number} />
    )
}

export default DisplayNumberContainer;