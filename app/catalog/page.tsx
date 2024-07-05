import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { CatalogPage } from "@/components/catalogPage";
import {Product} from "@/types/products";
import {createClientInstance} from "@/api/axiosClient";

async function fetchProducts(): Promise<Product[]> {
    try {
        const axiosInstance = createClientInstance()
        const response = await axiosInstance.get('/products');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch products', error);
        return [];
    }
}

export default async function Page() {
    const products = await fetchProducts()

    return (
        <>
            <NavBar/>
            <CatalogPage products={products}/>
            <Footer/>
        </>
    )
}