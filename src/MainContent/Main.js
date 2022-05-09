import ContentStories from "./ContentStories";
import ContentPosts from "./ContentPosts";
import Sidebar from "./Sidebar";

export default function Main() {

    return (

        <div class="corpo">
            <div class="esquerda">
                <ContentStories />
                <ContentPosts />
            </div>
            <Sidebar />
        </div >
    );

}