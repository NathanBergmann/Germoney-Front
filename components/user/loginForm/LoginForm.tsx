'use client'

import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation'

import {createClientInstance} from "@/api/axiosClient";
import { Button, Form, FormGroup, Input, Label, Toast, ToastBody, ToastHeader } from "reactstrap";

import styles from './LoginForm.module.scss';
import { getCookie, setCookie } from "cookies-next";

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [toastVisible, setToastVisible] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
	const [toastHeader, setToastHeader] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter()

	useEffect(() => {
		const authToken = getCookie('authToken');
		if (authToken) router.push('/catalog')
	}, []);

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		setIsLoading(true);

		const axiosInstance = createClientInstance()
		axiosInstance.post('/users/login', {
			email: username,
			password: password
		}, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => {
				if (response.status !== 200 || !response.data?.token) throw new Error('Ops! Ocorreu um erro interno.');

				const expiryTime = new Date().getTime() + 60 * 60 * 1000;
				setCookie('authToken', response.data.token, { expires: new Date(expiryTime) })
				setCookie('isLoggedIn', 'true', { expires: new Date(expiryTime) });
				setCookie('user', response.data.name, { expires: new Date(expiryTime) })
				router.push('/catalog')
			})
			.catch(error => {
				setIsLoading(false);

				if (error.response?.status === 401) {
					setErrorMessage('E-mail ou senha incorretos.');
					return
				}

				setToastHeader('Germoneys');
				setToastMessage('Ops! Ocorreu um erro interno. Tente novamente mais tarde.');
				setToastVisible(true);
			});
	};

	return (
		<>
			<Toast isOpen={toastVisible} toggle={() => setToastVisible(!toastVisible)} className={styles['toast-container']}>
				<ToastHeader icon="danger">
					{toastHeader}
				</ToastHeader>
				<ToastBody>
					{toastMessage}
				</ToastBody>
			</Toast>
			<div className={styles['login-container']}>
				<Form onSubmit={handleSubmit} className={styles['login-form']}>
					<FormGroup>
						<Label for="username" className={styles['form-label']}>E-mail</Label>
						<Input
							type="text"
							name="username"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Digite o e-mail"
							className={styles['form-input']}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="password" className={styles['form-label']}>Senha</Label>
						<Input
							type="password"
							name="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Digite a senha"
							className={styles['form-input']}
						/>
						{errorMessage && <div className={styles['error-message']}>{errorMessage}</div>}
					</FormGroup>
					<Button type="submit" className={styles['submit-button']} disabled={isLoading}>
						{isLoading ? 'Aguarde...' : 'Entrar'}
					</Button>
				</Form>
			</div>
		</>
	)
}

export {LoginForm}