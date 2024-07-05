'use client'

import { Card, CardBody, CardTitle} from "reactstrap";
import styles from "./productGrid.module.scss";
import Image from "next/image"
import logoicon from "../../../app/assets/images/logoicon.png"
import {Product} from "@/types/products";

interface productGridProps {
    products: Product[]
}

const ProductGrid = ({products}: productGridProps) => {
    return (
        <div className={"p-5 pt-3"}>
        <div className={styles.products}>
            {products.map((product, index) => (
                <Card className={styles.card} key={index}>
                    <img className={styles.img}
                         alt="Product image"
                         src={product.imageUrl}
                    />
                    <CardBody>
                        <CardTitle tag="h5" className={styles.text}>
                            {product.name}
                        </CardTitle>
                        <div className={styles.container}>
                            <Image src={logoicon} alt="Germoneys logo" width="25" height="25" className={styles.containerImage}/>
                            {product.price}
                        </div>
                    </CardBody>
                </Card>
            ))}
        </div>
        </div>
    )
}

export default ProductGrid