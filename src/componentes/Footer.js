import { Link } from "react-router-dom";
function Footer() {

    return (
        <footer>
            <div className="menuFooter">
                <ul>
                    <li><Link to="/sobreCurso" >Curso</Link></li>
                    <li><Link to="/disciplinasCurriculares" >Disciplinas Básicas</Link></li>
                    <li><Link to="/disciplinasTecnicas" >Disciplinas Técnicas</Link></li>
                    <li><Link to="/equipe" >Eqipe</Link></li>

                </ul>
            </div>
            <div className="credenciais">
                <h1>Desenvolvido por: Heloa Vitória - 2026</h1>
            </div>
        </footer >

    )
}
export default Footer;