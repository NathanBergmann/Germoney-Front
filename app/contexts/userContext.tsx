'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'
import { getCookie, deleteCookie } from 'cookies-next'

interface UserContextProps {
	user: string | null
	isLoggedIn: boolean
	logout: () => void
}

interface UserProviderProps {
	children: React.ReactNode
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<string | null>(getCookie('user') || null)
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!getCookie('isLoggedIn'))

	useEffect(() => {
		setUser(getCookie('user') || null)
		setIsLoggedIn(!!getCookie('isLoggedIn'))
	}, [])

	const logout = () => {
		deleteCookie('isLoggedIn')
		setUser(null)
		setIsLoggedIn(false)
	}

	return (
		<UserContext.Provider value={{ user, isLoggedIn, logout }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('useUser must be used within a UserProvider')
	}
	return context
}