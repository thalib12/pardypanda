import React from 'react'
import { Button,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Login() {
    const login=(e)=>{
        e.preventDefault()
            let accno=e.target.elements[0].value
            let pswd=e.target.elements[1].value
            
            const user={accno,pswd}
            console.log("user",user);
           
            fetch('http://localhost:3200/login', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
              }).then(res => res.json())
                .then(res => {
                  console.log("response",res);
                    alert(res.message)
              
               }
                )
             
     }
    
  return (
    <div>
      <div style={{width:"50%",margin:"10% 25%"}}>
      <Form onSubmit={login}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Account number</Form.Label>
    <Form.Control type="text" placeholder="Account number" />
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>

<div className="d-grid gap-2">
<Link className="btn btn-dark my-2 rounded btn-sm" to="registration">Create new account</Link></div>
            
        
      </div>
    </div>
  )
}

export default Login
