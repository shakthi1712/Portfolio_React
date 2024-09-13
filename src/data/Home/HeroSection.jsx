import { useNavigate } from 'react-router-dom'
import coat from '../../assets/profile-pic-final11.png'
export default function HeroSection() {
    const navigate=useNavigate();
    return (
       
        <section id="HeroSection" className="hero--section">
              <div className="hero--section--img">
    
                   
                   <img src={coat} alt="hero section" />


       </div>
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title ">
                        Hey, I am
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            SHAKTHI
                        </span>{" "}
                        <br />
                        VIGNESH A
                    </h1>
                    <p className="hero--section--description">

                        A full-stack developer with proficient in both front-end and back-end web development.

                    </p>


                </div>
                <button className="btn btn-github">
                    <a  href="https://nodejs.org/en/about/branding">Resume</a>
                </button>

            </div>
          

        </section>
    )

}