import React from 'react';
// @ts-ignore
import headerImg from "../../static/img/header.svg"

function HeaderCard() {
    return (
        <div className={"header_card"}>
            <div className="ad">
                <div>
                    <p>
                        Единая платформа для приема документов и зачисление в организации ТиППО.
                    </p>

                    <button className="button_primary">
                        Подать документы
                    </button>
                </div>
            </div>
            <img src={headerImg}/>
        </div>
    );
}

export default HeaderCard;