
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://github.com/evellynee?tab=repositories" target="_blank">
                    <img src=".\imagens\icons8-github-32.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/evellyne-vit%C3%B3ria-b67b6a296/" target="_blank">
                    <img src=".\imagens\icons8-linkedin-32.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/evellynees/" target="_blank">
                    <img src=".\imagens\icons8-insta-32.png" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Evellyne.
        </p>
       </section>
    </footer>)
}

export default Rodape