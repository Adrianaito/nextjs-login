import { v4 as uuid } from 'uuid'
import jwt_decode, { JwtPayload } from "jwt-decode";

import { api } from "./api"
import { useState } from 'react';

type SignInRequestData = {
    email: string;
    password: string;
}
type User = {
    // name: string;
    email: string;
    // avatar_url: string;
    id: string;
    role: number;
    validUntil: Date;
}

// const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))


// export async function signInRequest(data: SignInRequestData) {
//     const { email, password } = data
//     return api.post("/login/", { data: { email, password } })

// console.log(response)
// const jwt = response?.token
// if (response.valid) {
//     let payload = jwt?.split('.')[1]
//     payload = JSON.parse(atob(payload))
//     // payload = jwt_decode(payload)
//     console.log(payload)
//     const data: User = {
//         "email": payload.email,
//         "validUntil": payload.expiration,
//         // "login": response.valid,
//         "role": payload.role,
//         "id": payload.id
//     }
//     api.defaults.headers['Authorization'] = `Bearer ${jwt}`;

//     return {
//         token: jwt,
//         user: data
//     }
// }
// }
export async function signInRequest(data: SignInRequestData) {
    const { email, password } = data
    let response = await fetch(
        'http://localhost:9000/login/',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())

    const jwt = response?.token
    if (response.valid) {
        let payload = jwt?.split('.')[1]
        payload = JSON.parse(atob(payload))
        // payload = jwt_decode(payload)
        console.log(payload)
        const data: User = {
            "email": payload.email,
            "validUntil": payload.expiration,
            // "login": response.valid,
            "role": payload.role,
            "id": payload.id
        }
        api.defaults.headers['Authorization'] = `Bearer ${jwt}`;

        return {
            token: jwt,
            user: data
        }
    }
}

export async function recoverUserInformation(token) {
    let payload = token.split('.')[1]
    payload = JSON.parse(atob(payload))
    // payload = jwt_decode(payload)
    const email = payload.email

    return api.get("/profile/")

}

// export async function signInRequest(data: SignInRequestData) {
//     await delay()

//     return {
//         // token: uuid(),
//         token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNob3VyaUBnbWFpbC5jb20iLCJyb2xlIjoxLCJwdWJsaWNfaWQiOiJkMDdmYjQ4NC1lIiwiZXhwaXJhdGlvbiI6IjIwMjEtMDgtMzEgMTM6NDU6NTEifQ.RfDoEOfkXTozQIEOkYFJHfiggpS0vBhuAyoxGK7ACv8",
//         user: {
//             name: 'Chouri',
//             email: 'chouri@gmail.com.br',
//             avatar_url: 'https://github.com/Adrianaito.png'
//         }
//     }
// }

// export async function recoverUserInformation() {
//     await delay()

//     return {
//         user: {
//             name: "Chouri",
//             email: 'chouri@gmail.com',
//             avatar_url: 'https://github.com/Adrinanaito.png'
//         }
//     }
// }
