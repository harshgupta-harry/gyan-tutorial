import React from 'react';
import { loginApi } from '../../apis/apis';
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const dispatch = useDispatch()
    console.log('asd');
    const login = useSelector(state => state?.authReducer?.login)
    return(
        <div>This is login screen

            <div onClick={()=>{
                loginApi({
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka",
                    successCallBack: (data)=>{
                        dispatch({type: 'LOGIN', payload: true})
                    }
                })
            }}>Login{login}</div>
        </div>
    )
}

export default Login