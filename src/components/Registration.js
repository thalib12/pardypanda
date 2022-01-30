import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Registration() {
    const register=(e)=>{
        let accno = e.target.elements[0].value
    let name = e.target.elements[1].value
    let pswd = e.target.elements[2].value
    const user = { accno, name, pswd }
    console.log("user", user);
  
   

   
    fetch('http://localhost:3200/register', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res => res.json())
      .then(res => {
        alert(res.message)
        console.log("response", res.message); 
      });
    

  
    }
  return (
    <div>
    <div style={{width:"50%",margin:"10% 25%"}}>
    <Form onSubmit={register}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Account number</Form.Label>
  <Form.Control type="text" placeholder="Account number" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>
<Button variant="primary" type="submit">
  Register
</Button>
</Form>

<div className="d-grid gap-2">
<Link className="btn btn-dark my-2 rounded btn-sm" to="/">Login</Link></div>
          
      
    </div>
  </div>
  )
}

export default Registration
