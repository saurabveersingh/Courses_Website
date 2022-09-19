import './index.css'
import v1 from './v1.png'
import v2 from './v2.png'
import Card from './Card'

const vids=[v1,v2];
const entries=vids.length;
const runCallback=(cb) => {
    return cb();
}
const Videos = () => {
    return ( 
        <div id='videos_holder'>
            <h1>Videos</h1>
            <div id="video_contents">
                {runCallback(() =>{
                        if(entries===0){
                            return <h3>Awsome Vidoes will be here soon!</h3>;
                        }
                        const row = [];
                        for(let i = 0; i < entries; i++) {
                            row.push(<Card img={vids[i]} />)
                    }
                    return row;
                })}
            </div>
        </div>
    );
}
 
export default Videos;