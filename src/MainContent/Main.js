import Stories from "./Stories";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Main() {

    return (

        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Content />
            </div>
            <Sidebar />
        </div >
);

}