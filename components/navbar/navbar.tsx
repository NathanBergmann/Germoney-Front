import styles from "./navbar.module.scss"
import classNames from "classnames";
import Link from "next/link";

const NavBar = () => {
    return (
        <>
            <nav className={classNames('navbar position-relative top-0 w-100', styles.navBar)}>
                <div className={classNames('container-sm justify-content-center', styles.navbarText)}>
                    <img src="/logoicon.ico" alt="Logo" width="40" height="40"
                         className="d-inline-blockalign-text-bottom"/>
                    Germoneys
                </div>

              <Link href="/user/login">
                <p className={styles.loginLink}>Login</p>
              </Link>
            </nav>
        </>
    )
}

export default NavBar