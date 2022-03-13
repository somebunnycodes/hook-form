import React, {useState} from 'react';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        console.log(`Welcome, ${props.firstname} ${props.lastname}`);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirstnameError("Enter first name");
        } else if (e.target.value.length < 2) {
            setFirstnameError("First name must be at least 2 characters long!");
        } else {
            setFirstnameError("");
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLastnameError("Enter last name");
        } else if (e.target.value.length <= 2) {
            setLastnameError("Last name must be at least 2 characters long!");
        } else {
            setLastnameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Enter email");
        } else if (e.target.value.length <= 5) {
            setEmailError("Email must be at least 8 characters long!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Enter password");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters long!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Confirm password");
        } else if (e.target.value.length < 8) {
            setConfirmPasswordError("Password must be at least 8 characters long!");
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setPasswordError("");
        }
    }

    const isEmpty = () => {
        return !(firstname && lastname && email && password && confirmPassword);
    }

    const hasErrors = () => {
        return firstnameError || lastnameError || emailError || passwordError || confirmPasswordError;
    }
    
    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First name: </label> 
                    <input type="text" value={firstname} onChange={handleFirstname} />
                    {firstnameError ? <p>{firstnameError}</p> : ''}
                </div>
                <div>
                    <label>Last name: </label> 
                    <input type="text" value={lastname} onChange={handleLastname} />
                    {lastnameError ? <p>{lastnameError}</p> : ''}
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="email" value={email} onChange={handleEmail} />
                    {emailError ? <p>{emailError}</p> : ''}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={handlePassword} />
                    {passwordError ? <p>{passwordError}</p> : ''}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPassword} />
                    {confirmPasswordError ? <p>{confirmPasswordError}</p> : ''}
                </div>
                {
                    (isEmpty() || hasErrors()) ?
                    <input type="submit" value="Create User" disabled /> : 
                    <input type="submit" value="Create User" />
                }
            </form>
            <h3>Your Form Data</h3>
            <table>
                <tr>
                    <td>First Name:</td>
                    <td>{firstname}</td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>{lastname}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>{password}</td>
                </tr>
                <tr>
                    <td>Confirm Password:</td>
                    <td>{confirmPassword}</td>
                </tr>
            </table>
        </div>
    );
};
    
export default UserForm;
