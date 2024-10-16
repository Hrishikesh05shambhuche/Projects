import { useState } from "react";
import '../Styles/UserLogin.css'

export default function UserLogin(){
    let [Username,setUsername] = useState("");
        console.log(Username);
        
        let [Password,setPassword] = useState("");
        console.log(Password);

        function UserLogin(){
            if(Username == "Hrishi" && Password == "Hrishi@12"){
                alert("User Logged Successful")
            }
            else{
                alert("Invalid Username or Password")
            }
        }
        
    return(
        <div className="UserLogin">
        <form action="">
            <label htmlFor="">Username:</label>
            <input type="text" value={Username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter the Username or Email" required/>

            <label htmlFor="">Password:</label>
            <input type="text" value={Password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter the Password" required/>
            <button onClick={UserLogin}>Login</button>
        </form>
    </div>
    )
}