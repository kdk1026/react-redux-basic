import { useState } from "react";

function AddNumber(props) {
    const [size, setSize] = useState(1);

    const onChangeSize = (e) => {
        setSize(Number(e.target.value));
    }

    const onClickButton = () => {
        props.onClickButton(size);
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