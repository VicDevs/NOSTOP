import MenuInicial from "./MenuInicial";
import { useState, useEffect } from "react";
import { CardVaga} from "../../styled";

const verificar = sessionStorage.getItem("usuario-validado")
//sds
export default function Hsitorico(){

    const [historico, setHistorico] = useState([])
    
    useEffect(()=>{
        // if(verificar == null){
        //     window.location = "/"
        // }
        console.log(verificar)
        fetch(`http://localhost:8080/Prova/rest/Historico/${verificar}`)
        .then((resp)=>{
            return(resp.json())
        }).then((resp)=>{
            setHistorico(resp)
        })
        
        // .then(data=>{
        //    recrutador.idCompanhia = data;
        // })

        // fetch("http://localhost:8080/Prova/rest/Historico'").then((resp)=>{
        //     return resp.json();
        // }).then((resp)=>{
        //     setHistorico(resp)
        //     console.log(resp)
        // }).catch((error)=>{
        //     console.log(error)
        // })

    },[])

    return(
        <>
            <MenuInicial/>
            {historico.map((veiculo)=>(
            <CardVaga>
                <p>Tipo de pagamento: {veiculo.tipoPagamento}</p>
                <p>Seguro: {veiculo.seguro}</p>
                <p>Quantidade de Horas: {veiculo.quantidadeHoras}</p>
                <p>Avaliacao: {veiculo.avaliacao}</p>{/*se estiver vazio colocar botao para avaliar */}
                <p>Valor total: {veiculo.valorTotal}</p>
                <p>Marca: {veiculo.marca}</p>
                <p>Modelo: {veiculo.modelo}</p>
                {/* <Link to={"/avaliacao/" + veiculo.idAluguel }>Alugar veiculo</Link> */}
            </CardVaga>
            ))}
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