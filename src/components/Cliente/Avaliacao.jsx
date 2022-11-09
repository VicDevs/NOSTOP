import { useState, useEffect } from "react";

const verificar = sessionStorage.getItem("usuario-validado")

export default function Avaliacao(){

    useEffect(()=>{
        if(verificar == null){
            window.location = "/"
        }
    },[])

    return(
        <>
            <textarea name="avaliacao" id="idAvaliacao" cols="30" rows="10"></textarea>
        </>
    )
}