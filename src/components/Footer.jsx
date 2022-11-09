import { DivDevs, DivFooter, DivLogo } from "../styled"
import ImgLogo from '../img/logonp2.jpeg'
export default function Footer() {

    return(
        <>
            <DivFooter>
                <DivLogo>
                    <img src={ImgLogo} />
                </DivLogo>
                <DivDevs>
                    <ul>
                        <li>- Desenvolvedores -</li>
                        <li>Julio Machado</li>
                        <li>Victor Hugo</li>
                        <li>Vitório Graton</li>
                        <li>Matheus Montemurro</li>
                        <li>Ricardo Kim</li>
                    </ul>
                </DivDevs>
                
                
            </DivFooter>
        </>
    )
        
}