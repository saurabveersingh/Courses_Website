import './index.css'
import filter from './filter.png'
const Meetups = () => {
    const u_entries =0;
    const p_entries =0;
    let u = false;

    const switchColor=() => {
        const mu=document.querySelector('#m_u').style;
        const mp=document.querySelector('#m_p').style;
        if(u){
            mu.backgroundColor = "black";
            mp.backgroundColor = "white";
            mu.color="white";
            mp.color="black";
        }
        else{
            mu.backgroundColor = "white";
            mp.backgroundColor = "black";
            mu.color="black";
            mp.color="white";
        }
        u=!u;
    }
    const runCallback=(cb) => {
        return cb();
    }
    return ( 
        <div id="meetups_holder">
            <h1>Our Meetups</h1>
            <div id="m_d">
                <button id="m_u" onClick={switchColor}>Upcoming</button>
                <button id='m_p' onClick={switchColor}>Past</button>
                <button id='m_f'><img src={filter} id="filter"/>Filter by City</button>
            </div>
            <div id="meetups_content">
                {runCallback(() =>{
                    const entries=u?u_entries:p_entries;
                    if(entries===0){
                        return <h3>Awsome Meetups will be here soon!</h3>;
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
 
export default Meetups;