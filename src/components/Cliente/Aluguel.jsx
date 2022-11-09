import MenuInicial from "./MenuInicial";
import { useState, useEffect } from "react";
import { CardVaga,Form, DivAluguel, ContainerAluguel} from "../../styled";

const verificar = sessionStorage.getItem("usuario-validado")

export default function Aluguel(){
    const [aluguel, setAluguel] = useState({' ' : '',' ' : '',' ' : ''})

    function cadastraAluguel(e) {
      setAluguel({...aluguel, [e.target.name] : e.target.value})
    }

    // function inserirCliente(e) {
    //     e.preventDefault()

    //     fetch(http://localhost:8080/HelpCD/rest/Cadastro/Candidato,{
    //       method: "post",
    //       headers:{
    //           "Content-Type":"application/json"
    //     },
    //       body: JSON.stringify(aluguel)
    //       }).then(()=>{
    //           window.location = "/inicialCandidato"
    //       })
    //   }

    // useEffect(()=>{
    //     if(verificar == null){
    //         window.location = "/"
    //     }
    // },[])

    return(
        <>
            <MenuInicial/>
            <ContainerAluguel>
            <DivAluguel>
                <Form>
                    <legend>alguma coisa</legend>
                    <label htmlFor="idTipoPagamento" >Tipo do Pagamento</label>
                    <input type="text" name="tipoPagamento" id="idTipoPagamento" onChange={cadastraAluguel} value={aluguel.tipoPagamento}/>

                    <label htmlFor="idSeguro">Seguro</label>
                    <input type="text" name="seguro" id="idSeguro" onChange={cadastraAluguel} value={aluguel.seguro}/>

                    <label htmlFor="idquantidadeHoras">Quantidade de Horas</label>
                    <input type="text" name="quantidadeHoras" id="idquantidadeHoras" onChange={cadastraAluguel} value={aluguel.quantidadeHoras}/>
                    <input type="submit" value="cadastrar" id="submitAluguel" />
                    
                </Form>
            </DivAluguel>   
            <section id="sectionAluguel">
            <h1>Esses são nossos carros disponiveís</h1>
                <CardVaga>
                    <p>Modelo</p>
                    <p>Marca</p>
                    <p>endereco</p>
                    <p>horaincial</p>
                    <p>horafinal</p>
                    <p>precohora</p>
                </CardVaga>
                <CardVaga>
                    <p>Modelo</p>
                    <p>Marca</p>
                    <p>endereco</p>
                    <p>horaincial</p>
                    <p>horafinal</p>
                    <p>precohora</p>
                </CardVaga>
                <CardVaga>
                    <p>Modelo</p>
                    <p>Marca</p>
                    <p>endereco</p>
                    <p>horaincial</p>
                    <p>horafinal</p>
                    <p>precohora</p>
                </CardVaga>
            </section>
            </ContainerAluguel> 
    </>
    )
}