import styles from "./form.module.scss"
import classNames from "classnames"
import RootLayout from "@/app/layout";

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
}
export default Form
