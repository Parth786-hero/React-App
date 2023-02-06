import { useState } from "react";
import Data from './Data';
function App(){
    const [item,update] = useState("");
    const [bag,update2] = useState([]);

    function shoot(e){
        let value = e.target.value;
        update(value);
    }
    function trigger(){
        update2((prevBag)=>{
            return [...prevBag,item];
        })
        update('');
        
    }
    function start(e){
        if(e.key === "Enter"){
            update2((prevBag)=>{
                return [...prevBag,item];
            })
            update('');
        }
    }
    function del(id){
        return update2((prevBag)=>{
            return prevBag.filter((ele,index)=>{
                return index!==id;
            })
        })
    
    }
    let i = 0;
    function changeBackground(){
        const bag = ["red","purple","hotpink","#55efc4","#0984e3","#ffeaa7","#636e72","#4cd137","#273c75","#0097e6","#192a56","#3ae374"];
        const card = document.querySelector(".card");
        
        card.style.backgroundColor = bag[i];
        
        if(i===bag.length-1){
            i=0;
        }else{
            ++i;
        }
        
    }
    return(
        <>
            <div className="container">
                <div className="card">
                <span id='color' onClick={changeBackground}>color</span>
                    <h2 className="heading">ToDo-<span id='text'>App</span></h2>
                    <div className="input-field" onKeyUp={start}>
                        <input 
                            type='text'
                            placeholder="enter your task "
                            value={item}
                            onChange={shoot}
                        />
                        <button onClick={trigger}>🔥 add</button>
                    </div>
                    <ul className="list-items">
                        {
                            bag.map((ele,index)=>{
                                return <Data 
                                            text = {ele}
                                            key = {index}
                                            id={index}
                                            onSelect = {del}
                                        />
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
export default App;