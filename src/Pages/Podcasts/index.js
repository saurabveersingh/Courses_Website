import './index.css'

const entries=0;
const runCallback=(cb) => {
    return cb();
}
const Poscasts = () => {
    return ( 
        <div id="podcasts_holder">
            <h1>Podcasts</h1>
            <div id="podcasts_content">
                {runCallback(() =>{
                    if(entries===0){
                        return <h3>Awsome Podcasts will be here soon!</h3>;
                    }
                    const row = [];
                    for(let i = 0; i < entries; i++) {
                        //TODO when provided with context and design.
                   }
                   return row;
                })}
            </div>
        </div>
     );
}
 
export default Poscasts;