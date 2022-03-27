import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className={"navbar"}>
            <ul className={"logo"}>
                <Link to="">
                    <li>ЦИФРОВОЕ БУДУЩЕЕ</li>
                </Link>
            </ul>
            <ul>
                <Link to="">
                    <li>Факультеты</li>
                </Link>
                <Link to="">
                    <li>F.A.Q</li>
                </Link>
                <Link to="">
                    <li>О нас</li>
                </Link>
                <Link to="">
                    <li>Новости</li>
                </Link>
                <Link to="">
                    <li>Контакты</li>
                </Link>
                <Link to="">
                    <button className={"button_primary"} style={{marginLeft: "20px"}}>Войти в систему</button>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;