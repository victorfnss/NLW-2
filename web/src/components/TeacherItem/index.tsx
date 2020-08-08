import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/48064575?s=460&u=426c0ccc65819dc3a69131808f9c2c52a3ec3736&v=4" alt="Victor Felipe" />
                <div>
                    <strong>Victor Felipe</strong>
                    <span>algoritmos computacionais</span>
                </div>
            </header>

            <p>
                O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
            <br /><br />
            O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.
        </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                Entrar em contato
            </button>
            </footer>


        </article>
    )
}

export default TeacherItem;