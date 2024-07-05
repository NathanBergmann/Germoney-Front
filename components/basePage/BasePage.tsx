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