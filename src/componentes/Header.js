import { Link } from "react-router-dom";


function Header() {

    return (
        <>
           <div className="topo">
            <h1>Curso Técnico em Desenvolvimento De Sistemas</h1>
            <div/>
                <nav className="menu">
                    <ul>
                        <li><Link to = "/" >Home</Link></li>
                        <li><Link to = "/sobreCurso" >Curso</Link></li>
                        <li><Link to = "/disciplinasCurriculares" >Disciplinas Básicas</Link></li>
                        <li><Link to = "/disciplinasTecnicas" >Disciplinas Técnicas</Link></li>
                        <li><Link to = "/equipe" >Eqipe</Link></li>
                    </ul>
                </nav>
           </div>
       </>
    )
}

export default Header;