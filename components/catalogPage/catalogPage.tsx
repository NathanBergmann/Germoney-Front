'use client'

import classNames from "classnames";
import styles from "@/app/catalog/page.module.scss";
import MoneyInput from "@/components/inputValue";
import AppButton from "@/components/appButton";
import { useState } from "react";
import ProductGrid from "../product/productGrid";
import {Product} from "@/types/products";

interface CatalogPageProps {
    products: Product[];
}

const CatalogPage  = ({products}: CatalogPageProps) => {
    const [moneyValue, setMoneyValue] = useState<number | null>(null);
    const [isFiltered, setIsFiltered] = useState(false)

    const handleMoneyValueChange = (value: number) => {
        setMoneyValue(value);
    };

    console.log('Valor do MoneyInput:', moneyValue);

    return (
        <>
            <div className="p-5">
                <div className={classNames("rounded", styles.pageBox)}>
                    <h1 className={styles.text}>Cumpriu Tarefas, Ganhou Germoneys, Escolheu Prêmios!</h1>
                    <div className="p-5 d-flex justify-content-center align-items-start">
                        <MoneyInput onValueChange={handleMoneyValueChange} />
                        <AppButton label="Filtrar" onClick={() => {
                            if (moneyValue === null || moneyValue <= 0) {
                                alert("Por gentileza filtrar com um número válido");
                            }
                        }} />
                    </div>
                </div>
            </div>
            {!isFiltered &&
                <ProductGrid products={products} />
            }
            {isFiltered &&
                <h1>Filtrado!</h1>
            }
        </>
    );
}

export { CatalogPage }