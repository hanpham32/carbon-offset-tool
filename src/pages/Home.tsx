import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    
    const notify = () => toast("Hello World!");

    return(
        <div>
            Home
            <button onClick={notify} >Notify!</button>
            <ToastContainer 
                position='top-right'
                autoClose={3000}
                closeOnClick
                draggable
                pauseOnHover
                theme='dark'
            />
        </div>
    )
}

