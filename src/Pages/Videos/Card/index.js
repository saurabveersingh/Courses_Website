import './index.css'

const Card = ({img}) => {
    return ( 
        <img className='vids' alt='Video' src={img} onClick={()=>{alert("Can Redirect to video in future or load a frame")}}></img>
    );
}
 
export default Card;
