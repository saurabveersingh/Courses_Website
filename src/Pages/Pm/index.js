import './index.css'
import p1 from './p1.png'
import p2 from './p2.png'
import p3 from './p3.png'
import p4 from './p4.png'
import Card from './Card'

const p=[p1,p2,p3,p4];
const entries=p.length;
const runCallback=(cb) => {
    return cb();
}

const Pm = () => {
    return (
        <div id='pm_holder'>
            <h1>PM Speaks Series</h1>
            <div id="pm_contents">
                {runCallback(() =>{
                        if(entries===0){
                            return <h3>Awsome Content will be here soon!</h3>;
                        }
                        const row = [];
                        for(let i = 0; i < entries; i++) {
                            row.push(<Card img={p[i]} />)
                    }
                    return row;
                })}
            </div>
        </div>
     );
}
 
export default Pm;