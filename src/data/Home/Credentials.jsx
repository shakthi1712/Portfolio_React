export default function Credentials(){
    return(
        <section className="credentials--container" id="Credetials">
            <div className="credentials--container--heading">
            <p className="section--title">
                MyQualifications
            </p>
        </div>
        <div className="card--container--credentials">
        <div className="credentials--card">
            <h3>Venus Matriculation Higher Secondary School</h3>
            <h3 className="education--title">SSLC</h3>
            <p className="text-md">GRADE:83%</p>
            <p className="text-sm">2018-2019</p>
        </div>
        <div className="credentials--card">
        <h3>A.R.C Matriculation Higher Secondary School</h3>
            <h3 className="education--title">HSC</h3>
            <p className="text-md">GRADE:85%</p>
            <p className="text-sm">2019-2021</p>
        </div>
  
        </div>
        <div className="card--container--credentials">
        <div className="credentials--card">
            <h3>St.Joseph's College Of Engineering</h3>
            <h3 className="education--title">B.tech IT</h3>
            <p className="text-md">CGPA:8.02</p>
            <p className="text-sm">2021-2025</p>
        </div>
        </div>

        </section>
    )
    
}