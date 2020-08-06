import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header className="teacher-item__header">
                <img src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes"/>
                <div className="teacher-item__description">
                    <strong className="teacher-item__title">Diego Fernandes</strong>
                    <span className="teacher-item__sector">Quimica</span>
                </div>
            </header>
            <div className="teacher-item__body">
                <p className="teacher-item__text">Entusiasta das melhores tecnologias de quimica avancada.</p>
                <p className="teacher-item__text">Apaixonado por explodir coisas em laboratorio e por mudar a vida das pessoas atraves de experiencias. Mais de 200,000 pessoas ja passaram por uma das minhas explosoes.</p>
            </div>
            <footer className="teacher-item__footer">
                <p className="teacher-item__text">Preco/hora <strong>R$80,00</strong></p>
                <button className="teacher-item__button"><img src={whatsappIcon} alt="Whatsapp"/>Entrar em contanto</button>
            </footer>
        </article>
    );
}

export default TeacherItem;