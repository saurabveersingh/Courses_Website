import './index.css'

const Card = ({img}) => {
    return ( 
        <img className='vids' src={img} alt="Video" onClick={()=>{alert("Can Redirect to video in future or load a frame")}}></img>
    );
}
 
export default Card;
