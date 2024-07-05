'use client'

import classNames from "classnames";
import styles from "@/app/catalog/page.module.scss";
import MoneyInput from "@/components/inputValue";
import AppButton from "@/components/appButton";
import { useState } from "react";
import ProductGrid from "../product/productGrid";
import { Product } from "@/types/products";
import { createClientInstance } from "@/api/axiosClient";

interface CatalogPageProps {
    products: Product[];
}

const CatalogPage = ({ products }: CatalogPageProps) => {
    const [moneyValue, setMoneyValue] = useState<number | null>(null);
    const [isFiltered, setIsFiltered] = useState(false);
    const [productsTheyCanBuy, setProductsTheyCanBuy] = useState<Product[]>([]);
    const [productsTheyCantBuy, setProductsTheyCantBuy] = useState<Product[]>([]);

    const fetchProductsTheyCanBuy = async (money: number) => {
        try {
            const axiosInstance = createClientInstance();
            const response = await axiosInstance.get('/products/theyCanBuy', {
                params: {
                    money: money,
                },
            });
            setProductsTheyCanBuy(response.data);
            setIsFiltered(true);
        } catch (error) {
            console.error('Failed to fetch products', error);
        }
    };

    const fetchProductsTheyCantBuy = async (money: number) => {
        try {
            const axiosInstance = createClientInstance();
            const response = await axiosInstance.get('/products/theyCantBuy', {
                params: {
                    money: money,
                },
            });
            setProductsTheyCantBuy(response.data);
            setIsFiltered(true);
        } catch (error) {
            console.error('Failed to fetch products', error);
        }
    };

    const handleMoneyValueChange = (value: number) => {
        setMoneyValue(value);
        setIsFiltered(false);
    };

    const handleClickFilter = () => {
        if (moneyValue === null || moneyValue <= 0) {
            alert("Por gentileza, filtre com um número válido.");
        } else {
            fetchProductsTheyCanBuy(moneyValue)
            fetchProductsTheyCantBuy(moneyValue)
            setIsFiltered(true);
        }
    };

    console.log('Valor do MoneyInput:', moneyValue);

    return (
        <>
            <div className="p-5 pb-1">
                <div className={classNames("rounded", styles.pageBox)}>
                    <h1 className={styles.text}>Cumpriu Tarefas, Ganhou Germoneys, Escolheu Prêmios!</h1>
                    <div className="p-5 d-flex justify-content-center align-items-start">
                        <MoneyInput onValueChange={handleMoneyValueChange} />
                        <AppButton label="Filtrar" onClick={handleClickFilter} />
                    </div>
                </div>
            </div>
            {!isFiltered ?
                <ProductGrid products={products} /> :
                <>
                    <h5 className="text-center mt-3">Você pode adquirir os seguintes produtos!</h5>
                    <ProductGrid products={productsTheyCanBuy}/>
                    <h5 className="text-center mt-3">Falta pouco para adquirir os produtos. Continue economizando!</h5>
                    <ProductGrid products={productsTheyCantBuy}/>
                </>
            }
        </>
    );
}

export {CatalogPage };