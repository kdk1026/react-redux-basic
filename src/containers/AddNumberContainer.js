import AddNumber from "../components/AddNumber";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        onClickButton: function(size) {
            dispatch({type: 'INCREMENT', size: size});
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNumber);

/*
import store from "../store";

function AddNumberContainer() {
    const onStore = (size) => {
        store.dispatch({type: 'INCREMENT', size: size});
    };

    return <AddNumber onClickButton={onStore} />;
}

export default AddNumberContainer;
*/