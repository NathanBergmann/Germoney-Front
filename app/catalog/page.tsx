import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import InputValue from "@/components/inputValue";
import AppButton from "../../components/appButton";
import styles from "./page.module.scss"
import classNames from "classnames";
import {Product} from "@/types/products";
import ProductGrid from "@/components/product/productCard";
import {createServerInstance} from "@/api/axiosServer";

async function getProducts(): Promise<Product[]> {
    try {
        const axiosInstance = createServerInstance()
        const response = await axiosInstance.get('/products')
        return response.data;
    } catch (error) {
        console.error('Failed to fetch transactions', error);
        return [];
    }
}

export default async function Page() {
    const products: Product[] = await getProducts();

    console.log(products)
    return (
        <>
            <NavBar/>
            <div className={"p-5"}>
                <div className={classNames("rounded", styles.pageBox)}>
                    <h1 className={styles.text}>Cumpriu Tarefas, Ganhou Germoneys, Escolheu Prêmios!</h1>
                    <div className={"p-5 d-flex justify-content-center align-items-start"}>
                        <InputValue/>
                        <AppButton label={"Filtrar"} onClick={() => {}}/>
                    </div>
                </div>
            </div>
            <ProductGrid products={products}/>
            <Footer/>
        </>
    )
}