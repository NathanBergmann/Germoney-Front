'use client'

import { Card, CardBody, CardTitle, Button } from "reactstrap";
import styles from "./productGrid.module.scss";
import Image from "next/image";
import logoicon from "../../../app/assets/images/logoicon.png";
import { Product } from "@/types/products";
import { useUser } from "@/app/contexts/userContext";
import { useRouter } from "next/navigation";
import {createClientInstance} from "@/api/axiosClient";

interface productGridProps {
    products: Product[]
}

const ProductGrid = ({ products }: productGridProps) => {
    const { isLoggedIn } = useUser();
    const router = useRouter();

    const handleClick = (productId: number) => {
        if (!isLoggedIn) return;
        router.push(`/product/edit/${productId}`);
    }

    return (
        <div className="p-5 pt-3">
            <div className={styles.products}>
                {products.map((product, index) => (
                    <Card className={styles.card} key={index} onClick={() => handleClick(product.id)}>
                        <img className={styles.img}
                             alt="Product image"
                             src={product.imageUrl}
                        />
                        <CardBody>
                            <CardTitle tag="h5" className={styles.text}>
                                {product.name}
                            </CardTitle>
                            <div className={styles.container}>
                                <Image src={logoicon} alt="Germoneys logo" width="25" height="25" className={styles.containerImage} />
                                {product.price}
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;