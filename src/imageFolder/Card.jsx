function Card({head,para,imgSrc}){
    return(
        <>
            <div className="card">
                    <img src={imgSrc} alt="this is my life" />
                    <div className="text">
                        <h2>{head}</h2>
                        <p>{para}</p>
                        <button>explore</button>
                    </div>
            </div>
        </>
    );
}
export default Card;