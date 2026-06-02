import dadosDisciplinasTecnicas from '../dados/dadosDisciplinasTecnicas'
function DisciplinasTecnicas() {
    return (
        <section className='disciplinas'>
            <header className='headerDisciplinas'>
                <h1> Disciplinas Técnicas </h1>
            </header>
            <div className='contentDisciplinas'>
                
                {
                    dadosDisciplinasTecnicas.map(
                        (item, index) => (
                            <article key={index} >
                                <img src={item.link_imagem}
                                    alt={item.nome}
                                    title={item.nome} />
                                <h2>{item.nome} - {item.sigla}</h2>
                            </article>
                        )
                    )
                }
            </div>
        </section>
    )
}

export default DisciplinasTecnicas;
