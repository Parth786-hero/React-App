import {useEffect, useState} from 'react';
import { Header , MainVideo} from './components';
import youtube from './api/youtube';
// import axios from 'axios';
function App(){
    const [obj , updateObj] = useState({video : [] , selectedVideo : null});
    useEffect(()=>{
        shoot("paathan");
    } , []);
    async function shoot(item){
        const response = await youtube.get('search' , {
            params : {
                part : 'snippet', 
                key : "AIzaSyDhpgId-eDQva-gKb3dKIKm7VSjW3nxrvw",
                maxResults : 5,
                q : item
            }
        })
       
        updateObj({
            video : response.data.items,
            selectedVideo : response.data.items[0]
        })
    }
    function done(vid){
        updateObj(prev=>{
            return {
                ...prev , selectedVideo : vid
            }
        })
    }
    return(
        <>
            <Header onSelect = {shoot}/>
            <MainVideo video = {obj.selectedVideo} bag = {obj.video} onSelect={done}/>
        </>
    );
}
export default App;