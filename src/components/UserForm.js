import React, {useState} from 'react';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmPassword};
        console.log(`Welcome, ${props.firstname} ${props.lastname}`);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    
    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First name: </label> 
                    <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div>
                    <label>Last name: </label> 
                    <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
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
