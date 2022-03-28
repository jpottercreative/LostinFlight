import React, {useState} from 'react'

function Login({onLogin}) {
  const [username, setUsername] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
    .then((r) => r.json())
    .then((user) => onLogin(user))
  }

  return (
    <div>
         <form>
            <label>
                Name:
                <input type='text' 
                name={username}
                onChange={(e) => setUsername(e.target.value)} />
            </label>
        </form>
     <button>Login</button>
     <button onClick={handleSubmit}>Login</button>
        
    </div>
  )
}

export default Login