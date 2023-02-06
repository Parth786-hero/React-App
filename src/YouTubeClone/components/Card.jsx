function Card({data , tata}){
    function shoot(){
        tata(data);
    }
    return(
        <>
            <div className="card" onClick={shoot}>
                <img src={data.snippet.thumbnails.medium.url} alt="you tube " />
                <div className="text-box">
                    <h3>{data.snippet.title}</h3>
                    
                </div>
            </div>
            <hr/>
        </>
    );
}
export default Card;