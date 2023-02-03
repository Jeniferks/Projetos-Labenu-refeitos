// import { Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { auth, provider } from '../../firebase'
import { actionTypes } from '../../Reducer'
import { useStateValue } from '../../StateProvider'
import "./Login.css"

function Login() {

    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])


    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message))
    };
    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${seed}`}
                    alt="avatar"
                />
                {/* <img src='https://s.yimg.com/ny/api/res/1.2/VQ_gTsnWsX_DisTXeuf26w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM3Mg--/https://s.yimg.com/os/creatr-uploaded-images/2022-12/4b386c00-7655-11ed-9efd-6384bc9c6efe' alt='whatsapp'/> */}
                <div className='login__text'>
                    <h1>Pride </h1>
                </div>

                <button className='shadow__btn' onClick={signIn}>
                    Sign in with google
                </button>

            </div>

        </div>
    )
}

export default Login