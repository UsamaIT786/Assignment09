
import Image from "next/image"

function SecondContent(){

    return(

        <div>


<div className="secondhero">
    <h2>
    Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur <br />
    Developing Billion-Dollar Valued Developers and Solopreneurs

    </h2>
    <p>
    The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.


    </p>


    </div>


    <div className="imagessec">

    <div className="img1">

        <Image src="/Images/pic1.jpg"alt="mypic"width={300}height={250}/>

    </div>

    <div className="img2">

<Image src="/Images/pic2.jpg"alt="mypic"width={300}height={250}/>

</div>


<div className="img3">

<Image src="/Images/pic3.jpg"alt="mypic"width={300}height={250}/>

</div>


</div>

<div className="bigpic">

<div className="img4">
<Image src="/Images/bigpic.jpg"alt="mypic"width={400}height={350}/>

</div>

<div className="img5">
<Image src="/Images/bigpic2.jpg"alt="mypic"width={400}height={350}/>

</div>

</div>

</div>
            

        


    )
}

export default SecondContent