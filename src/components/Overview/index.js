import Tittle from '../Tittle';
import Logo from '../logo';
import Project from '../Project';
import PetProject from '../MiniProject';
function OverView() {
    return (
        <div className="text-center">
            <Tittle>About Me</Tittle>
            <div className="mt-10 mb-20 shadow-md shadow-white bg-[#4a3036] w-[70%] mx-auto p-8 text-left rounded-md text-[23px] text-white">
                <p>&#9679; I'm a fresher front-end developer</p>
                <p>
                    &#9679; I’m 25 years old, I graduated from VietNam National University Of Agriculture with an
                    automation engineer degree
                </p>
                <p>&#9679; For some reasons and i love IT, so I decide to study and purser it</p>
                <p>&#9679; I am a very motivated person and a fast learner.</p>
                <p>
                    &#9679; My short term goal is to find a position where I can use the knowledge and strengths that I
                    have
                </p>
            </div>
            <Tittle>My Skills</Tittle>
            <div className="mt-10 mb-20 shadow-md shadow-white bg-[#4a3036] w-[70%] mx-auto p-8 text-left rounded-md text-[23px] text-white">
                <p>&#9679; Experience in using JavaScript (ES6), HTML5, CSS3.</p>
                <p>&#9679; Experience with ReactJS, Router.</p>
                <p>&#9679; Have experience in Git</p>
                <p>&#9679; Be able to read and write English</p>
                <p>&#9679; Responsive for a better user experience</p>
                <p>&#9679; Knowledge used with taildwincss</p>
                <p>&#9679; Self -study, search for documents</p>
            </div>
            <Logo />
            <Project />
            <Tittle>Mini Project</Tittle>
            <PetProject />
            <h2 className=" text-white text-[22px] py-16 font-sans">Create by HuanQuang</h2>
        </div>
    );
}

export default OverView;
