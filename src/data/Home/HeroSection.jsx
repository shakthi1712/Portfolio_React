export default function HeroSection() {
    return (
        <section id="HeroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title name--main">
                        Hey, I am shakthi vignesh
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Full Stack
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">

                        A full-stack developer with multifaceted professional and
                        <br />
                        proficient in both front-end and back-end web development.

                    </p>


                </div>
                <button className="btn btn-primary">
                    Get In Touch
                </button>

            </div>
            <div className="hero--section--img">
                   
                        <img src="./img/profile3.png" alt="hero section" />
    

            </div>

        </section>
    )

}