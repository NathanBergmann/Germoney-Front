'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'

import image404 from '../app/assets/images/404.png'
import styles from './not-found.module.scss'

const NotFound: React.FC = () => {
	const router = useRouter()

	const handleGoBack = () => {
		router.push('/')
	}

	return (
		<div className={styles.container}>
			<Image src={image404} alt="Penguins perdidos" />
			<div className={styles.message}>Ops! Parece que você está perdido.</div>
			<button className={styles.button} onClick={handleGoBack}>
				Voltar para a página inicial
			</button>
		</div>
	);
}

export default NotFound
