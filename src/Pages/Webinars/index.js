import './index.css'
import Card from './Card';
import React, { useState } from "react";

 const Webinars = () => {
    const u_heading = ["Remaining in Problem Domain for User Needs - How does it help?"]
    const u_dates = ["30th Sep, 2021"]
    const u_image= ["https://media.istockphoto.com/photos/dark-concrete-picture-id184601291?k=20&m=184601291&s=612x612&w=0&h=6GOd6oz_arkQ633xD_WldpyZNHigUsLGSPaADjAesug="]
    
    const p_heading = []
    const p_dates = []
    const p_image= []

    const u_entries = u_heading.length;
    const p_entries = p_heading.length;

    const [row,setrow] = useState(firstSet);
    const [u,setu] = useState(false);


    function firstSet(){
        const rows = [];
        if(u_entries===0){
            rows.push(<h3>Awsome Webinars will be here soon!</h3>);
        }
        else{
            for(let i = 0; i < u_entries; i++) {
                rows.push(<Card heading={u_heading[i]} date={u_dates[i]} img={u_image[i]} />)
            }
        }
        return rows;
    }
    function switchC(){
        const wu=document.querySelector('#w_u').style;
        const wp=document.querySelector('#w_p').style;
        if(u){
            wu.backgroundColor = "black";
            wp.backgroundColor = "white";
            wu.color="white";
            wp.color="black";
        }
        else{
            wu.backgroundColor = "white";
            wp.backgroundColor = "black";
            wu.color="black";
            wp.color="white";
        }
        if(u){
            setu(false);
        }
        else{
            setu(true);
        }
        const entries=u?u_entries:p_entries;
        const heading=u?u_heading:p_heading;
        const dates=u?u_dates:p_dates;
        const img=u?u_image:p_image;

        const rows = [];
        if(entries===0){
            rows.push(<h3 className="center">Awsome Webinars will be here soon!</h3>);
        }
        else{
            for(let i = 0; i < entries; i++) {
                rows.push(<Card heading={heading[i]} date={dates[i]} img={img[i]} />)
            }
        }
        setrow(rows);
        
    }
    return ( 
        <div id='webinars_holder'>
            <h1>Our Webinars</h1>
            <div id="w_d">
                <button id="w_u" onClick={switchC}>Upcoming</button>
                <button id='w_p' onClick={switchC}>Past</button>
            </div>
            <div id="webinars_content">
                {row}
            </div>
        </div>
     );
 }
  
 export default Webinars;