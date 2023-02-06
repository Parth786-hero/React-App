import Card from './Card';
function MainVideo({video , bag ,onSelect}){
    if(!video) return <div className="alarm"><span>You tube clone is now live .</span></div>
    const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
   
    return(
        <>
            <div className="father">

                <div className="tv">
                    <iframe frameBorder = "0" width="100%" height ="100%" title="video" src={vidSrc}/>
                </div>
                <div className="side-bar">
                    {
                        bag.map((obj , id)=>{
                            return <Card key={id} data={obj} tata={onSelect}/>
                        })
                    }
                </div>

            </div>
            <div className="snippet">
                <h2>{video.snippet.title} - {video.snippet.channelTitle}</h2>
                <h3>{video.snippet.channelTitle}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </>
    );
}
export default MainVideo;