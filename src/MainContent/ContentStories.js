import Stories from "./Stories"


const contentStories = [
    { imagem: 'assets/img/9gag.svg', usuario: '9gag' },
    { imagem: 'assets/img/meowed.svg', usuario: 'meowed' },
    { imagem: 'assets/img/barked.svg', usuario: 'barked' },
    { imagem: 'assets/img/nathanwpylestrangeplanet.svg', usuario: 'nathanwpylestrangeplanet' },
    { imagem: 'assets/img/wawawicomics.svg', usuario: 'wawawicomics' },
    { imagem: 'assets/img/respondeai.svg', usuario: 'respondeai' },
    { imagem: 'assets/img/filomoderna.svg', usuario: 'filomoderna' },
    { imagem: 'assets/img/memeriagourmet.svg', usuario: 'memeriagourmet' }
]


export default function ContentStories () {
    return (
        <div className="stories">

            <RenderContentStories />

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

const RenderContentStories = () => contentStories.map(({imagem, usuario}, index) => 

<Stories 
key={index} 
imagem={imagem} 
usuario={usuario} />
)