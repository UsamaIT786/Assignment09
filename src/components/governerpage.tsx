import Image from "next/image"

function Goverenerpage(){

    return(

        <div className="hero">

            <div className="herocontent">

<div className="heroimg">
                <Image src="/Images/usama.png"alt="Governerpic" width={600}height={420} />
                </div>
                <h1>
                Governor Sindh
                </h1>
                <h2>
                Kamran Khan Tessori
                </h2>
                <br />
                <h3>
                Certified Cloud <br />
Applied Generative AI <br />
Engineer (GenEng)

                </h3>
                <p>
                Earn up to $5,000 / month
                <br /><br />
                Now admissions are open in Hyderabad

                </p>

                </div> 

                <div className="herobtn">

<button>Apply Now</button>
<br />
<p>
    562143  <br /> <span>Accepted Applications</span>
</p>
                </div>





        </div>


    )
}

export default Goverenerpage