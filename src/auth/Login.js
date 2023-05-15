import axios from "axios"
import { useState } from "react"


export const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post("http://localhost:3001/login/login", { email, password }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Invalid credentials");
      }
    
      console.log(res.data)
      localStorage.setItem("authToken: ", res.data.token)
    }).catch((error) => {
      console.log("error: ", error)
      alert(error)
    })
  }
    return <div className="auth">
      <div className="form">
        <form onSubmit={handleSubmit}>
         
        
          <label for="email">Email address
          
          </label>
          <input type="email" name="email" placeholder="email" onChange={(event)=>{setEmail(event.target.value)}}/>
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="password" onChange={(event)=>{setPassword(event.target.value)}} />
         
          <button type="Submit">Sign In</button>
        </form>
      </div>
    </div>
}