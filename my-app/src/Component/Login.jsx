import React, { useContext,useState } from 'react'
import UserContext from '../Context/UserContext'



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})

    }

  return (
    <div className=' bg-gray-500'>
        <h1>Context API</h1>
        <input type="text" value={username} placeholder='Username' onChange={(e)=>{ setUsername(e.target.value)}} />
        <input type="text" value={password} placeholder='Password' onChange={(e)=>{ setPassword(e.target.value)} }/>
        <button onClick={handleSubmit} className=' border-l-rose-700 bg-yellow-300'>Login</button>
      
    </div>
  )
}

export default Login
