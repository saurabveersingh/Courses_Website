import './index.css'
 const Conference = () => {
    
    const p1="Conferences are not just about learning from speakers. It's also about meeting new people, learning from attendees, making connections, getting to know each other and being a part of a community.";
    const p2="Having hosted the conference online last year and after close consultation with the community, speakers, exhibators and event partners, we have decided to host our next conference in person to make it more effective.";
    const p3="We will be back with more information once COVID subsides.";
    
    let u=false;
    const switchColor=() => {
        const cu=document.querySelector('#c_u').style;
        const cp=document.querySelector('#c_p').style;
        if(u){
            cu.backgroundColor = "white";
            cp.backgroundColor = "black";
            cu.color="black";
            cp.color="white";
        }
        else{
            cu.backgroundColor = "black";
            cp.backgroundColor = "white";
            cu.color="white";
            cp.color="black";
        }
        u=!u;
    }

    return ( 
        <div id='conference_holder'>
            <h1>Our Conference</h1>
            <div id="c_d">
                <button id="c_u" onClick={switchColor}>Upcoming</button>
                <button id='c_p' onClick={switchColor}>Past</button>
            </div>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <button id="notify" onClick={()=>{alert("Not functional yet")}}>Notify Me →</button>
        </div>
     );
 }
  
 export default Conference;