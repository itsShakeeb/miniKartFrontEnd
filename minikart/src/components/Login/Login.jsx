import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = (props) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const onSubmit = () => {
        props.authVerification(true)

    }
    const onChange = (event) => {
        event.preventDefault()
        const value = event.target.value;
        const name = event.target.name;

        setUser({
            [name]: value
        })
    }

    const { email, password } = user
    return (
        <div className='login'>
            <Form onSubmit={onSubmit}>
                <Form.Control value={email} name='email' onChange={(e) => onChange()} placeholder='Email' className='mb-3' />
                <Form.Control value={password} name='password' onChange={(e) => onChange()} placeholder='Password' className='mb-3' />
                <Button variant='success' type='submit' className='w-100' >Sign In</Button>
            </Form>
        </div >
    )
}

export default Login
