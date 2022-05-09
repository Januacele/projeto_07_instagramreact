import Sugestao from "./Sugestao";

const sugestoes = [
    { imagem: "assets/img/bad.vibes.memes.svg", usuario: "bad.vibes.memes", info: "Segue você" },
    { imagem: "assets/img/chibirdart.svg", usuario: "chibirdart", info: "Segue você" },
    { imagem: "assets/img/razoesparaacreditar.svg", usuario: "razoesparaacreditar", info: "Novo no Instagram" },
    { imagem: "assets/img/adorable_animals.svg", usuario: "adorable_animals", info: "Segue você" },
    { imagem: "assets/img/smallcutecats.svg", usuario: "smallcutecats", info: "Segue você" }
]


const RenderSugestao = () => sugestoes.map(({ imagem, usuario, info }, index) =>
    <Sugestao key={index} imagem={imagem} usuario={usuario} info={info} />)


function UsuarioSugerido(props) {
    return (
        <div>
            <img src={props.Imagem} alt={props.User} />
            <div className="texto">
                <strong>{props.Text}</strong>
                {props.Nome}
            </div>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="usuario">
                <UsuarioSugerido
                    Imagem="assets/img/catanacomics.svg" User="user" />
                <div className="texto">
                    <UsuarioSugerido
                        Text="catanacomics"
                        Nome="Catana" />
                </div>
            </div>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <RenderSugestao />
            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}


