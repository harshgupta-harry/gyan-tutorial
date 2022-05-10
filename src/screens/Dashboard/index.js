import React from 'react';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
    const dispatch = useDispatch()
    return(
        <div>This is Dashboard

<div onClick={()=>{
               dispatch({type: "LOGOUT", payload: false})
            }}>Logout</div>
        </div>
    )
}

export default Dashboard