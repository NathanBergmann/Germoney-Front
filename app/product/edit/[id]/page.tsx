import { ProductEdit } from '@/components/productEdit';

export default function EditProductPage({ params }: { params: { id: string } }) {
	const { id } = params

	return (
		<div>
			<ProductEdit id={id} />
		</div>
	);
}
