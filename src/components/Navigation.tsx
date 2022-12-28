import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSun, faSearch, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Theme, ThemeProps } from "../context/theme";

type Props = {
    displayIcon: boolean;
}

export function Navigation({ displayIcon }: Props) {

    const mode = useContext(Theme)

    async function onChangeMode() {
        await process.browser && localStorage.setItem('mode', `${!mode.theme.darkmode}`)
        await mode.setTheme({ darkmode: !mode.theme.darkmode })
    }

    let renderDarkmode;


    if (displayIcon) {
        renderDarkmode = <FontAwesomeIcon className="FontEdit" icon={faSun} width="40" height="40" onClick={onChangeMode} />
    } else {
        renderDarkmode = <FontAwesomeIcon className="FontEdit" icon={faMoon} width="40" height="40" onClick={onChangeMode} />
    }

    return (

        <div>

            <header className="p-3 border-bottom">
                <div className="container main-darkmode">
                    <div className="d-flex flex-wrap align-items-center justify-content-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none me-auto">
                            <img src="/logo.svg" alt="" width="40" height="40" className="me-2" />
                            <h4 className="me-end">Veuxy</h4>
                        </a>


                        <div className="d-flex align-items-center justify-content-center ">
                            <FontAwesomeIcon className="FontEdit" icon={faSearch} width="40" height="40" />
                            {renderDarkmode}
                            <FontAwesomeIcon className="FontEdit me-1" icon={faBell} width="40" height="40" />
                            <img src="/150x150.png" alt="" width="40" height="40" className="rounded-circle" />
                        </div>
                    </div>
                </div>
            </header>
        </div>

    );
}