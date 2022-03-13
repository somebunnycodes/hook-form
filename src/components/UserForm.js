import React, {useReducer} from 'react';

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const initialState = {
    firstname: "",
    firstnameError: "",
    lastname: "",
    lastnameError: "",
    email: "",
    emailError: "",
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const UserForm = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const createUser = (e) => {
        e.preventDefault();
    };

    const handleFirstname = (e) => {
        dispatch({type: "firstname", payload: e.target.value});
        if(e.target.value.length < 1) {
            dispatch({type: "firstnameError", payload: "Enter first name"});
        } else if (e.target.value.length < 2) {
            dispatch({type: "firstnameError", payload: "First name must be at least 2 characters long!"});
        } else {
            dispatch({type: "firstnameError", payload: ""});
        }
    }

    const handleLastname = (e) => {
        dispatch({type: "lastname", payload: e.target.value});
        if(e.target.value.length < 1) {
            dispatch({type: "lastnameError", payload: "Enter last name"});
        } else if (e.target.value.length <= 2) {
            dispatch({type: "lastnameError", payload: "Last name must be at least 2 characters long!"});
        } else {
            dispatch({type: "lastnameError", payload: ""});
        }
    }

    const handleEmail = (e) => {
        dispatch({type: "email", payload: e.target.value});
        if(e.target.value.length < 1) {
            dispatch({type: "emailError", payload: "Enter email"});
        } else if (e.target.value.length <= 5) {
            dispatch({type: "emailError", payload: "Email must be at least 8 characters long!"});
        } else if (!e.target.value.match(emailRegex)) {
            dispatch({type: "emailError", payload: "Must enter a valid email address"});
        } else {
            dispatch({type: "emailError", payload: ""});
        }
    }

    const isEmpty = () => {
        return !(state.firstname && state.lastname && state.email);
    }

    const hasErrors = () => {
        return state.firstnameError || state.lastnameError || state.emailError ;
    }
    
    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First name: </label> 
                    <input type="text" value={state.firstname} onChange={handleFirstname} />
                    {state.firstnameError ? <p>{state.firstnameError}</p> : ''}
                </div>
                <div>
                    <label>Last name: </label> 
                    <input type="text" value={state.lastname} onChange={handleLastname} />
                    {state.lastnameError ? <p>{state.lastnameError}</p> : ''}
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="email" value={state.email} onChange={handleEmail} />
                    {state.emailError ? <p>{state.emailError}</p> : ''}
                </div>
                {
                    (isEmpty() || hasErrors()) ?
                    <input type="submit" value="Create User" disabled /> : 
                    <input type="submit" value="Create User" />
                }
            </form>
            <h3>Your Form Data</h3>
            <table>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td>{state.firstname}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>{state.lastname}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{state.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
    
export default UserForm;
