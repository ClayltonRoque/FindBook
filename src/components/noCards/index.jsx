import React from 'react'
import { NoTask } from './styles'
import bookImg from "../../assets/book.png"
import faceIcone from "../../assets/super-estrela.png"

export function NoCard() {
    return (
        <NoTask >
            <div>
                <img src={bookImg} />
                <p>Pesquise por algum livro ou autor na barra de pesquisa acima</p>
                <p>E veja a magica acontecer<img className='imgFace' src={faceIcone} /></p>
            </div>
        </NoTask>
    )
}