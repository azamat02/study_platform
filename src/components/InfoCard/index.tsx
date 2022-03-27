import React from 'react';

function InfoCard() {
    return (
        <div className={"info_card"}>
            <p>В информационной системе предусмотрены</p>

            <div>
                <div>
                    <p className={"title"}>Офлайн занятия</p>
                    Личный кабинет для мониторинга оценок <br/>
                    Загрузка и выгрузка практических работ <br/>
                    Онлайн библеотека <br/>
                    Банк лекций <br/>
                </div>
                <div>
                    <p className={"title"}>Онлайн занятия</p>
                    Видеоконференция <strong>BigBlueButton</strong> <br/>
                    Чаты/Мессенджеры <br/>
                    Практоринг система <br/>
                    Система онлайн тестирования <br/>
                    Интерактивная онлайн доска <br/>
                </div>
                <div>
                    <p className={"title"}>Цифровизация</p>
                    Прием документов <strong>online</strong> в организации образования и распределение грантов
                </div>
            </div>
        </div>
    );
}

export default InfoCard;