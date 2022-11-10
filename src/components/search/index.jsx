import axios from 'axios'
import React from 'react'
import { useState } from "react"
import { HomeContainer} from "./styles"
import { Cards } from '../cards'
import { NoCard } from '../noCards'

export function Home() {
    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])

    const searchBook=(evt) => {
        if(evt.key === "Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items)) 
            .catch(err=>console.log(err))
        }
    }

    return (
        <div>
            <HomeContainer>
                <div>
                    <button>Acesse sua Estante</button>
                </div>
                <header>
                    BookFind
                </header>

                <input type='text' placeholder="Digite um nome de um livro ou autor"
                    onChange={event => setSearch(event.target.value)} onKeyPress={searchBook}/>   
            </HomeContainer>

            {bookData.length ? bookData.map((book) => {          
                return (
                    <Cards item={book.volumeInfo} />     
                )
            }) : (
                    <NoCard />
                )}
        </div>
    )
}    
