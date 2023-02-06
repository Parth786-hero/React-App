function Data(props){
    return(
        <>
            <div className="item">
                <i className="fa-solid fa-trash trash" onClick={()=>{props.onSelect(props.id)}}></i> 
                <li>{props.text}</li>
            </div>
        </>
    )
    
}
export default Data;