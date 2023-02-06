import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Data from "./Data";
import './index.css';
function App(){
    return(
        <>
            <Header/>
            <div className="father">
                {
                    Data.map(obj=>{
                        return <Card key = {obj.id} head = {obj.head} para = {obj.para} imgSrc={obj.imgSrc}/>
                    })
                }
            </div>
            <Footer/>
        </>
    );
}
export default App;