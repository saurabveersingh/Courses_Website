import './App.css';
import Navbar from './Pages/Navbar'
import Banner from './Pages/Banner'
import Intro from './Pages/Intro'
import Trainings from './Pages/Trainings';
import Meetups from './Pages/Meetups';
import Webinars from './Pages/Webinars'
import Conference from './Pages/Conference'
import Videos from './Pages/Videos'
import Pm from './Pages/Pm'
import Blogs from './Pages/Blogs'
import Podcasts from './Pages/Podcasts'
import Footer from './Pages/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Intro />
      <Trainings />
      <Meetups />
      <Webinars />
      <Conference/>
      <Videos/>
      <Pm/>
      <Blogs/>
      <Podcasts/>
      <Footer />
    </div>
  );
}

export default App;
