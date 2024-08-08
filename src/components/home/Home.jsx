import axios from 'axios';
import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        console.log("reached home");
        const userDetails = JSON.parse(localStorage.getItem("userDetails"))
        console.log(userDetails);
        axios.get(
            "user/api/" + userDetails?.id,
            { headers: { "authorization": "Bearer " + localStorage.getItem("token") } }
        )
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div>

        </div>
    )
}

export default Home
