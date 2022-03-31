import React from "react";
import SearchForm from "../components/SearchForm"
import CocktailList from "../components/CocktailList"
import Navbar from "../components/Navbar"
export default function Home(){
    return(
        <main>
            <SearchForm />
            <CocktailList />
        </main>
    )
}