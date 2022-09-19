import './index.css'

const Card = ({title,author,img}) => {
    return (
        <div className='blog_card' style={{backgroundImage:`url(${img})`}} onClick={()=>{alert("Can Redirect to blog in future or load a frame")}}>
            <div className="blog_info">
                <h3>{title}</h3>
                <h4>By {author}</h4>
            </div>
        </div>
    );
}
 
export default Card;
