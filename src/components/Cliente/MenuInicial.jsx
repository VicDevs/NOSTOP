import { Link } from "react-router-dom";
import { MenuHamb, MiniMenu, PublicNav } from "../../styled";
import { HiHome } from "@react-icons/all-files/hi/HiHome";
import { AiFillCar } from "@react-icons/all-files/ai/AiFillCar";
import { MdAttachMoney } from "@react-icons/all-files/md/MdAttachMoney";
import { FaUserEdit } from "@react-icons/all-files/fa/FaUserEdit";
import { RiFileList3Fill } from "@react-icons/all-files/ri/RiFileList3Fill";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";

export default function MenuInicial(){

    const logout = ()=>{
        sessionStorage.removeItem("usuario-validado")
        window.location = "/"
    }

    return(
        <>
        <PublicNav>

        <MiniMenu>
            <MenuHamb/>
            <MenuHamb/>
            <MenuHamb/>
        </MiniMenu>
            <ul>
                <li>
                    <HiHome className="iconMenuPrincipal"/>
                    <Link to={"/paginaInicial"}>Inicio</Link>
                </li>
                <li>
                    <AiFillCar className="iconMenuPrincipal"/>
                    <Link to={"/cadastroVeiculo"}>Veiculos</Link>
                </li>
                <li>
                    <MdAttachMoney id="money" className="iconMenuPrincipal"/>
                    <Link to={"/aluguel"}>Aluguel</Link>
                </li>
                <li>
                    <RiFileList3Fill className="iconMenuPrincipal"/>
                    <Link to={"/historico"}>Histórico</Link>
                </li>
                <li>
                    <FaUserEdit className="iconMenuPrincipal"/>
                    <Link to={"/perfil"}>Perfil</Link>
                </li>
                <li>
                    <button id='logOut' onClick={logout}><BiLogOut/></button>
                </li>
            </ul>
        </PublicNav>
        </>
    )
}