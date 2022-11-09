import MenuInicial from "./MenuInicial";
import { useState, useEffect } from "react";
import { CardVaga} from "../../styled";

const verificar = sessionStorage.getItem("usuario-validado")
//sds
export default function Hsitorico(){

    // useEffect(()=>{
    //     if(verificar == null){
    //         window.location = "/"
    //     }
    // },[])

    return(
        <>
            <MenuInicial/>
            <CardVaga>
                <p>tipoPagamento</p>
                <p>seguro</p>
                <p>quantidadeHoras</p>
                <p>avaliacao</p>
                <p>valorTotal</p>
                <p>marca</p>
                <p>modelo</p>
            </CardVaga>
            <CardVaga>
                <p>tipoPagamento</p>
                <p>seguro</p>
                <p>quantidadeHoras</p>
                <p>avaliacao</p>
                <p>valorTotal</p>
                <p>marca</p>
                <p>modelo</p>
            </CardVaga>
            <CardVaga>
            <p>tipoPagamento</p>
                <p>seguro</p>
                <p>quantidadeHoras</p>
                <p>avaliacao</p>
                <p>valorTotal</p>
                <p>marca</p>
                <p>modelo</p>
            </CardVaga>
        </>
    )
}