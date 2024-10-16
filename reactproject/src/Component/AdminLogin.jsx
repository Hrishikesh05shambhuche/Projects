import { useEffect, useState } from "react"
import '../Styles/AdminLogin.css'

export default function AdminLogin(){
        let [Username,setUsername] = useState("");
        console.log(Username);
        
        let [Password,setPassword] = useState("");
        console.log(Password);

        let [Admin,setAdmin] = useState([]);

        // useEffect(()=>{
        //     async function fetchAdmin(){
        //         let data = await fetch('http://localhost:2300/Admin')
        //         let res = await data.json()
        //         setAdmin(res)
        //     }
        //     fetchAdmin()
        // },[])

        // function Login(){
        //     Admin.includes()
        // }
        
    return(
        <div className="AdminLogin">
        <form action="">
            <label htmlFor="">Username:</label>
            <input type="text" value={Username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter the Username or Email" required/>

            <label htmlFor="">Password:</label>
            <input type="text" value={Password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter the Password" required/>
            <button>Login</button>
        </form>
    </div>
    )
}