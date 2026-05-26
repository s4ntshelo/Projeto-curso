import fotoPerfil from './fotoPerfil.jpg'
import './App.css'
function App() {
  return (
    <div>
     <header>
    <h1> Olá seja bem-vindo ao meu Curriculo Virtual</h1>
    <img src={fotoPerfil}></img>
    <h2>Heloá Vitória</h2>
      </header>

      <main>
        <section>
          <h2>Objetivo: Quero Adquerir  conhecimentos em Psicologia</h2>
        </section>
         <section>
         <h1> Dados para contato</h1>
         <h2>Heloá Vitória</h2>
         <p>44 99159-2160</p>
         <p>E-mail: heloa.vitoria.santos@escola.pr.gov.br</p>
         <p>Linkdin: xxxxxx</p>
         <p>GitHub: xxxxxx</p>
         </section>
       
       <section>
          <h1>Formação</h1>
          <div>
            <article>
              <h2>Ensino médio Profissionalizante em Desenvolvimentode Sistemas</h2>
              <p>Instituição: Colégio Estadual Santa Maria Goretti</p>
              <p>Ano de Conclusão: 2027</p>
            </article>
          </div>
       </section>
       <section>
        <h1>Experiencia Profissional</h1>
        <div>
          <article>
            <h2>Experiencia como babá</h2>
            <p>Função/cargo: Babá</p>
            <p>Periodo: desde  2024</p>
          </article>
        </div>
       </section>
       


      </main>

      <footer>
        <div>Desenvolvido por joão pedro</div>
      </footer>
    </div>
  );
}

export default App;