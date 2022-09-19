import './index.css'
import red_arrow from './red_arrow.png'
import scene from './scene.jpg'
import ps from './problem_solvers.png'

const intro_head="Why We Matter?";
const intro_sub_head="Creative Thinking for creating an impact!";
const para1="Leanpitch is problem solving. Whether it's your kid asking solution to his day to day problems or the rise in threats of Global Warming. It's evident that the whole human kind needs to be product thinkers. We, at Product Thinking community, strive to provide such a platform for practitioners to come together and learn from each other about the craft of building products. This Platform is run by the community for the community. We are a community with 46k+ product thinkers hosting various events across India: Webinars every week, meet-ups every month in every city, two conference a year."
const intro_sub_head2="Leanpitch Thinking Labs"
const para2="Product Thinking Community introduces PT Labs powered by Leanpitch. Product Managers are creative thinkers and life long researchers. Their curosity to understand the problem, persistence to solve them, and empathy to make the solutions easy makes them resourceful in solving Social Problems."
const para3="If you have it in you and are looking for an opportunity to contribute back to society, join PT Labs. Become part of a product team of volunteers, pickup a social problem, swarm together, desighn, and run experiments to find a problem/solution fit. Prensent your discovery and be recognized at next Product Thinking Conference. Product Thinking community will pursue further on implementing a solution in the subsequent cohorts, which you can again be part of."
const para4="Share your interest by submitting your details. We will get back to you with more information."

function nf(){
    alert("This button is not functional yet")
}

const Intro = () => {
    return ( 
        <div id="intro_holder">
            <div id="i1">
                <div id="i1_heading">
                    <h1>{intro_head}</h1>
                    <img src={red_arrow} alt="red arrow bellow heading"/>
                </div>
                <div id="i1_mid">
                    <div id="i1_content">
                        <h2>{intro_sub_head}</h2>
                        <p>{para1}</p>
                    </div>
                    <img src={scene} alt="Scenery"/>
                </div>
                <button onClick={nf} className="nf">Join Our Community →</button>
            </div>
            <div id="i2">
                <div id="i2_content">
                    <h2>{intro_sub_head2}</h2>
                    <p>{para2}</p>
                    <p>{para3}</p>
                    <p className='bold'>{para4}</p>
                    <div id="i2_buttons">
                        <button onClick={nf} className="nf">View Details →</button>
                        <button onClick={nf} className="nf">Register Now →</button>
                    </div>
                </div>
                <img src={ps} alt="Animated problem solvers"/>
            </div>
        </div>
     );
}
 
export default Intro;