'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

import { Toast, ToastBody, ToastHeader } from 'reactstrap'

import styles from './BasePage.module.scss'
import { UserProvider } from "@/app/contexts/userContext"

interface BasePageProps {
	children: React.ReactNode
}

const BasePage = ({ children }: BasePageProps) => {
	const [showToast, setShowToast] = useState(false)

	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		const privatePages = ['/product'];
		const isPrivatePage = privatePages.some(page => pathname.startsWith(page))
		if (!isPrivatePage) return

		const authToken = sessionStorage.getItem('authToken')
		if (!authToken) router.push('/user/login')

		const tokenExpiryStorage = sessionStorage.getItem('tokenExpiry')
		const tokenExpiry = Number(tokenExpiryStorage)
		if (new Date().getTime() > tokenExpiry) {
			sessionStorage.removeItem('authToken')
			sessionStorage.removeItem('tokenExpiry')
			router.push('/user/login')
			setShowToast(true)
		}
	}, [])

	useEffect(() => {
		if (showToast) {
			const timer = setTimeout(() => {
				setShowToast(false)
			}, 5000)

			return () => {
				clearTimeout(timer)
			}
		}
	}, [showToast])

	return (
		<>
			<UserProvider>
				<Toast isOpen={showToast} toggle={() => setShowToast(false)} className={styles.toast} fade>
					<ToastHeader icon="warning">Sessão expirada</ToastHeader>
					<ToastBody>Sua sessão expirou. Por favor, faça login novamente.</ToastBody>
				</Toast>
				{children}
			</UserProvider>
		</>
	)
}

export { BasePage }