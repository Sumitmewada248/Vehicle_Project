import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Images/1c.jpg";
import img2 from "../Images/b.webp";
import img3 from "../Images/3p.jpg";

const Home = () => {
    return (
       <>
    
            <Carousel>
                <Carousel.Item>
                    <img src={img1} width="100%" height="500px" alt="First slide" />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} width="100%" height="500px" alt="Second slide" />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} width="100%" height="500px" alt="Third slide" />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
       </>
    );
};

export default Home;
