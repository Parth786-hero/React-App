import { useState } from "react";

function Form(){
    const [obj,setObj] = useState({name : "",number : "" , email : "" , password : "" , cpassword : ""});
    const [finalObj,setFinalObj] = useState({name : "",number : "" , email : "" , password : "" , cpassword : ""});
    function submit(e){
        e.preventDefault();
        const {password,cpassword} = obj;
        if(password === cpassword){

            setFinalObj(obj);
            setObj({name : "",number : "" , email : "" , password : "" , cpassword : ""});
            alert("Congratulations ! Now you will see your data in this panle 👍 .")
        }else{
            alert("Password did not match ! 🤐");
        }
        
    }
    function trigger(e){
        const {name , value} = e.target;
        setObj(prev=>{
            return {...prev,[name] : value};
        });
    }
    return(
        <>
            <form action="" onSubmit = {submit}>
            <h2>hello , {finalObj.name}</h2>
            <h4>{finalObj.number}</h4>
            <h4>{finalObj.email}</h4>
            
                <div className="name x">
                    <input 
                        type="text" 
                        placeholder="enter your name here"
                        onChange = {trigger}
                        name = "name"
                        value={obj.name}

                    />
                </div>
                <div className="number x">
                    <input 
                        type="number" 
                        placeholder="enter your number here"
                        onChange = {trigger}
                        name = "number"
                        value={obj.number}
                    />
                </div>
                <div className="email x">
                    <input 
                        type="email" 
                        autoComplete="current-email"
                        placeholder="enter your email here"
                        onChange = {trigger}
                        name = "email"
                        value={obj.email}
                    />
                </div>
                <div className="password x">
                    <input 
                        type="password" 
                        autoComplete="current-password"
                        placeholder="enter your password here"
                        onChange = {trigger}
                        name = "password"
                        value={obj.password}
                    />
                </div>
                <div className="cpassword x">
                    <input 
                        type="password"
                        autoComplete="current-password"
                        placeholder="enter your confirm password here"
                        onChange = {trigger}
                        name = "cpassword"
                        value={obj.cpassword}
                    />
                </div>
                <button type="submit">submit</button>
            </form>
        </>
    );
}
export default Form;