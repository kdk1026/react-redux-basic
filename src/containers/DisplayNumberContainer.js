import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {
        number: state.number
    }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);

/*
import { useState } from "react";
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
*/