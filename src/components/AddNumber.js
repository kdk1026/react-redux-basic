import { useState } from "react";
import store from "../store";

function AddNumber() {
    const [size, setSize] = useState(1);

    const onChangeSize = (e) => {
        setSize(Number(e.target.value));
    }

    const onClickButton = () => {
        store.dispatch({type: 'INCREMENT', size: size});
    }

    return (
        <div>
            <h1>Add Number</h1>
            <button onClick={onClickButton}>+</button>
            <input type="text" value={size} onChange={onChangeSize} />
        </div>
    )
}

export default AddNumber;