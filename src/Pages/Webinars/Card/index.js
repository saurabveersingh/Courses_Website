import './index.css'

const Card = ({heading,date,img}) => {
    return ( 
        <div className="webinar_card" style={{backgroundImage: `url(${img})`}} onClick={()=>{alert("Not yet functional")}}>
            <div className="webinar_info">
                <h3>{heading}</h3>
                <h4>{date}</h4>
            </div>
        </div>
     );
}
 
export default Card;