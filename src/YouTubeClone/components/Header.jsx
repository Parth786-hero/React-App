// import { useEffect } from "react";
import { useState } from "react";

function Header(props){
    // const {onSelect} = props;
    const [data , upadteData] = useState("");
    
    function trigger(e){
        upadteData(e.target.value);
    }
    function submit(e){
        e.preventDefault();
        if(data){
            props.onSelect(data);
        }else{
            alert("Salle phele likh to shi .")
        }
        
    }
    return(
        <>
            <div className="heading">
                <img className="style-scope ytd-yoodle-renderer" src="https://www.gstatic.com/youtube/img/promos/growth/f1abebb1582e625c1327201aa6660d5f50a1f616fd3e5d53e21a68a32c45799c_244x112.webp" alt="Amazeballs"/>
                <form action="" onSubmit={submit}>
                    <input 
                        type="text" 
                        placeholder="search"
                        value={data}
                        onChange = {trigger}
                     />
                     <button type="submit"><i className="fa-solid fa-magnifying-glass icon"/></button>
                     
                     <i className="fa-solid fa-microphone mike"></i>
                </form>
            </div>
        </>
    );
}
export default Header;