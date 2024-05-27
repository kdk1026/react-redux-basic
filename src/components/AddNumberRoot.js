import AddNumber from './AddNumber';

function AddNumberRoot(props) {
    const onClickButton = (size) => {
        props.onClickButton(size);
    }

    return (
        <duv>
            <h1>Add Number Root</h1>
            <AddNumber onClickButton={onClickButton} />
        </duv>
    )
}

export default AddNumberRoot;