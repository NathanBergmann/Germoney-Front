'use client'

import React, {useEffect, useState} from "react";
import {Product} from "@/types/products";
import {createClientInstance} from "@/api/axiosClient";
import {useRouter} from "next/navigation";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

import styles from './ProductEdit.module.scss';

interface ProductEditProps {
	id: string | null;
}

const ProductEdit = ({ id }: ProductEditProps) => {
	const [product, setProduct] = useState<Product | null>(null);
	const router = useRouter();

	useEffect(() => {
		const fetchProduct = async () => {
			if (!id) return;
			try {
				const axiosInstance = createClientInstance();
				const response = await axiosInstance.get(`/products/${id}`);
				setProduct(response.data);
			} catch (error) {
				console.error('Failed to fetch product', error);
			}
		};

		fetchProduct();
	}, [id]);

	const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!product) return;
		const updatedProduct: {} = {/* form data */};
		try {
			const axiosInstance = createClientInstance();
			await axiosInstance.put(`/products/${id}`, updatedProduct);
			router.push('/catalog');
		} catch (error) {
			console.error('Failed to update product', error);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type } = e.target;
		setProduct(prevState => {
			if (prevState === null) return null;

			const updatedValue = type === 'number' ? parseFloat(value) || 0 : value;

			return {
				...prevState,
				[name]: updatedValue,
				id: prevState.id,
				name: prevState.name ?? '',
				price: prevState.price ?? 0,
				image: prevState.imageUrl ?? ''
			};
		});
	};

	return (
		<div className={styles.container}>
			<h1>Edit Product: {product?.name}</h1>
			<Form onSubmit={handleSave}>
				<FormGroup className={styles.formGroup}>
					<Label for="name" className={styles.label}>Name</Label>
					<Input
						type="text"
						name="name"
						id="name"
						value={product?.name}
						onChange={handleChange}
						className={styles.input}
					/>
				</FormGroup>
				<FormGroup className={styles.formGroup}>
					<Label for="price" className={styles.label}>Price</Label>
					<Input
						type="text"
						name="price"
						id="price"
						value={product?.price}
						onChange={handleChange}
						className={styles.input}
					/>
				</FormGroup>
				<FormGroup className={styles.formGroup}>
					<Label for="image" className={styles.label}>Image URL</Label>
					<Input
						type="text"
						name="image"
						id="image"
						value={product?.imageUrl}
						onChange={handleChange}
						className={styles.input}
					/>
				</FormGroup>
				<Button type="submit" className={styles.button}>Save</Button>
			</Form>
		</div>
	)
}

export {ProductEdit}