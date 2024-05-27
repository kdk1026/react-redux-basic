import AddNumber from "../components/AddNumber";
import store from "../store";

function AddNumberContainer() {
    const onStore = (size) => {
        store.dispatch({type: 'INCREMENT', size: size});
    };

    return <AddNumber onClickButton={onStore} />;
}

export default AddNumberContainer;