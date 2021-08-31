import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, signInRequest } from "../services/auth";
import { api } from "../services/api";

type User = {
    // name: string;
    email: string;
    // avatar_url: string;
    id: string;
    role: number;
    validUntil: Date;
}

type SignInData = {
    email: string;
    password: string;

}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void>,
    logout: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user;

    useEffect(() => {

        // const cookies = parseCookies()
        // const token = cookies["nextauth.token"]
        // ^ same as:
        const { 'nextauth.token': token } = parseCookies()

        if (token) {
            recoverUserInformation(token).then(response => {
                setUser(response.data)
            })
        }
    }, [])


    async function signIn({ email, password }: SignInData) {
        const { token, user } = await signInRequest({
            email,
            password,
        })

        setCookie(undefined, 'nextauth.token', token, {
            maxAge: 60 * 60 * 1, // 1 hour
            // maxAge: user.validUntil

        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`

        setUser(user)

        Router.push('/dashboard')
    }

    async function logout() {
        destroyCookie(null, 'nextauth.token')
        setUser(null)
        Router.push('/')
    }


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
