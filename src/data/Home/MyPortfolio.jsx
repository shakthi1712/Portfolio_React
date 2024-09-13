import data from "../../data/index.json";

export default function MyPortfolio(){
    return(
    <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">
                        Recent Project
                    </p>
                    <h2 className="section--heading">
                        My portfolio
                    </h2>
                </div>
                <div>
                    <button className="btn btn-github">
                         <a href="https://github.com/shakthi1712">Github profile</a>
                    </button>

                </div>

            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item,index)=>(
                    <div key={index}
                    className="portfolio--section--card"
                    >
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="img" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div className="port">
                                <h3 className="portfolio--section--title">
                                    {item.title}
                                </h3>
                                {/* <p className="portfolio-section-p">
                                    {item.description}
                                </p> */}
                            </div>
                            <a href= {item.link} className="text-sm portfolio--link">
                               Git-hub link
                            </a>
                        </div>
            
                </div>
                ))}
            </div>
    </section>
    )
}
