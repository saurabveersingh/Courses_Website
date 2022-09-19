import './index.css'
import Card from './Card'

const Trainings = () => {

    const entries = 5;

    const pbc = ["#3C6778","#596E9B","#3F6B86","#2F82A2"]

    const sbc = ["#2B414C","#465479","#325166","#20596C"]
    
    const logo = ["https://dtkmdj8r1pumb.cloudfront.net/courses/20191129170723/1.png",
                "https://dtkmdj8r1pumb.cloudfront.net/courses/20201102100013/CSPO.png",
                "https://dtkmdj8r1pumb.cloudfront.net/courses/20201101031613/ICP-PDM.png",
                "https://dtkmdj8r1pumb.cloudfront.net/courses/20190401114239/A-CSPO.png",
                "https://dtkmdj8r1pumb.cloudfront.net/courses/20201102100256/CPMP.png"]
    const name = ["Design Thinking",
                "Certified Scrum Product Owner...",
                "Product Management Launchpad",
                "Advanced Certified Scrum Product...",
                "Product Management Bootcamp"]
    const date = ["8th Oct, 2021",
                "9th Oct, 2021",
                "22nd Oct, 2021",
                "26th Oct, 2021",
                "will be scheduled soon"]

    const runCallback=(cb) => {
        return cb();
    }
    return (
        <div id="trainings_holder">
            <h1>Our Trainings</h1>
            <div id="trainings_content">
                {runCallback(() =>{
                    const row = [];
                    for(let i = 0; i < entries; i++) {
                        row.push(<Card key={i} pbc={pbc[i%4]} sbc={sbc[i%4]} logo={logo[i]} name={name[i]} date={date[i]}/>);
                    }
                    return row;
                })}
            </div>
        </div>
    );
}
 
export default Trainings;