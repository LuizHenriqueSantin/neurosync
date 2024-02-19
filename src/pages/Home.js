import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';

function Home(){
    return(
        <div>
            <Navbar />
            <Presentation />
            <About />
            <Footer />
        </div>
    )
}

export default Home