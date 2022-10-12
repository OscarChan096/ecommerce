import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import './Login.css'

const Login = ({userLogged}) => {

    const [credentials, setCredentials] = useState({}) // usuario: "", password: ""  1ER FORMA PARA WUITAR WARNING
    const credentialsHarcoded = { user: 'usuarioG17', password: 'password' }
    const navigate = useNavigate();

    const handleFormValue = (event) => {
        const { target: { name, value } } = event
        setCredentials({ ...credentials, [name]: value })
    }

    const submitForm = (event) => {
        event.preventDefault()
        const { user, password } = credentialsHarcoded
        if (credentials.user === user && credentials.password === password) {
            userLogged(true)
            navigate('/dashboard')
        }
    }

    return (
        <div className='container mg-t bg'>
            <div className='content'>
                <div className='logo'>
                    <span className="text-nova ts">NOVA</span>
                    <span className="text-shop ts">SHOP</span>
                </div>
                <div className='login'>
                    <h3>Iniciar Sesion</h3>
                    <div className='form'>
                        <input type='text' placeholder='Usuario' onChange={handleFormValue} value={credentials.user} />
                        <input type='password' placeholder='Contraseña' onChange={handleFormValue} value={credentials.password} />
                        <button variant='primary' type='submit' onClick={(event) => submitForm(event)}>Iniciar</button>
                        <a href='#'><span className='signup'>Registrarse</span></a>
                        <a href='#'><span className='forgotten-password'>¿Olvidaste tu contraseña?</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;