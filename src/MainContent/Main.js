import Stories from "./Stories";
import ContentPosts from "./ContentPosts";
import Sidebar from "./Sidebar";

export default function Main() {

    return (

        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <ContentPosts />
            </div>
            <Sidebar />
        </div >
);

}