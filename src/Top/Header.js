function NavTop(props) {
    return (
        <div class={props.type}>
            <ion-icon name={props.iconeName}></ion-icon>
            <img src={props.image} />
        </div>
    );
}

export default function Header() {

    return (

        <div class="container">
            <div class="logo">
                <NavTop iconeName="logo-instagram" type="logo" />
                <div class="separador"></div>
                <NavTop image="assets/img/logo.png" type="logo" />
            </div>

            <NavTop iconeName="logo-instagram" type="logo-mobile" />

            <NavTop image="assets/img/logo.png" type="instagram-mobile" />

            <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>

            <div class="icones">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>

                <NavTop iconeName="paper-plane-outline" type = "icones-mobile"/>
            
        </div>

    );

}