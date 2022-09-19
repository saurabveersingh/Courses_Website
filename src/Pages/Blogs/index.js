import './index.css'
import Card from './Card'

const Blogs = () => {
    
    const titles=["Product Management Certifications",
                "What is a Product really?",
                "User Experience in a Nutshell",
                "5 Biggest Myths About User Experience"];
    const authors=["Jayaprakash D B",
                "Satisha Venkataramaiah",
                "Pravat Rajan",
                "Pravat Rajan"]
    const img=["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
            "https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://thisisglance.com/wp-content/uploads/2020/03/10-what-is-ux-design.jpg",
            "https://media.istockphoto.com/photos/five-white-wooden-isolated-red-background-with-copy-space-new-5-picture-id1296505549?b=1&k=20&m=1296505549&s=170667a&w=0&h=S_ChDnSLyT48JkO2J_mENLjsuKblqsdtu4tbGC7NaSs="]
    const entries=titles.length;

    const runCallback=(cb) => {
        return cb();
    }
    return (
        <div id='blogs_holder'>
            <h1>Blogs</h1>
            <div id="blog_content">
                {runCallback(() =>{
                        if(entries===0){
                            return <h3>Awsome Content will be here soon!</h3>;
                        }
                        const row = [];
                        for(let i = 0; i < entries; i++) {
                            row.push(<Card title={titles[i]} author={authors[i]} img={img[i]} />)
                    }
                    return row;
                })}
                <button className="arrow_button" onClick={()=>{alert("Can be used to call a fetch function to get more blog info from database")}}>{">"}</button>
            </div>
        </div>
    );
}
export default Blogs;