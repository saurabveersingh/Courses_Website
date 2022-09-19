import './index.css'

const Card = ({pbc,sbc,logo,name,date}) => {
    return ( 
        <div className="trainings_card" style={{backgroundColor: pbc}}>
            <img src={logo} alt="Accreditation"></img>
            <h4 className="fix_height">{name}</h4>
            <div style={{backgroundColor: sbc}}>
                <p>Upcoming Training</p>
                <h4>{date}</h4>
            </div>
            <button className="reg_button" onClick={()=>{alert("This feature is not functional yet")}}>Register</button>
        </div> 
    );
}
 
export default Card;