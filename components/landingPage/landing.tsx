'use client' 

import Image from "next/image"
import logoicon from "../../app/assets/images/logoicon.png"
import styles from "./landing.module.scss"
import {Container, Row, Col} from "reactstrap"
import Link from "next/link"
import "../../app/globals.css"

const Landing = () => {
    return(
        <>
        <Container fluid className={"h-100"}>
            <Row className={"h-100 p-0 align-items-stretch"}>
                <Col xs="4" className={"p-0"}>
                    <img src="https://static.ndmais.com.br/2023/08/img-9476-533x800.jpg" className={styles.img} alt="Compras" />
                </Col>
                <Col>
                <div className={"d-flex justify-content-end align-items-end"}>
                    <Row className={"p-3 w-25"}>
                    <Link href="/user/login">
                            <p className={styles.loginLink}>Login</p>
                        </Link>
                    </Row>
                </div>
                    <Row className={styles.containerLogo}>
                        <Image src={logoicon} width="90" height="90" className={styles.logoImage} alt={"Logo"}/>
                    </Row>
                    <Row>
                        <p className={styles.mainText}>Catálogo Germoneys</p>
                    </Row>
                    <div className={"d-flex justify-content-center align-items-center"}>
                    <Row className={"row w-50"}>
                        <Link href="/catalog">
                            <p className={styles.btnCatalogo}>Ver Catálogo</p>
                        </Link>
                    </Row>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Landing