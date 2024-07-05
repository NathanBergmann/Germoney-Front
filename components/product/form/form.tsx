import styles from "./form.module.scss"
import classNames from "classnames"
import { createClientInstance } from "@/api/axiosClient";
import RootLayout from "@/app/layout";
import { useRouter } from "next/navigation";

const ProductNEw = 

const Form = () => {
    return(
        <div className={classNames("p-5", styles.formContainer)}>
            <form className={styles.form}>
                <div className={styles.divCenter}>
                    <div>
                    </div>
                <div className="mb-3">
                    <label htmlFor="inputID" hidden className="form-label">ID</label>
                    <input type="number" hidden disabled className="form-control" id="inputID"/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Nome:" className="form-input w-100" id="iName" aria-describedby="nameHelp"/>
                </div>
                <div className="mb-2">
                    <input type="number" placeholder="Custo" className="form-input w-100" id="iPrice"/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Adicione a url da imagem." className="form-input w-100" id="iFile"/>
                </div>
                </div>

                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </div>
    )
};

const productAdd = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const router = useRouter();

    try {
        const axiosInstance = createClientInstance();
        await axiosInstance.post(`/products/save`, {name: "", price: 0, imageUrl: ""});
        router.post('/catalog');
    } catch (error) {
        console.error('Failed to update product', error);
    }
};

export default Form, ProductSave
