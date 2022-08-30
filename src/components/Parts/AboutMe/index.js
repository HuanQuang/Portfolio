import Title from '../../Tittle';
import Logo from '../../logo';
import Project from '../../Project';
import PetProject from '../../MiniProject';
function AboutMe() {
    return (
        <div className="bg-[#191820] font-[cursive]">
            <div className="text-center" id="about">
                <Title>About Me</Title>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="mt-10 mb-20 shadow-md shadow-white bg-[#4a3036] w-[70%] mx-auto p-8 text-left rounded-md text-[23px] text-white sm:w-[92%] sm:text-lg"
                >
                    <p data-aos-delay="400" data-aos="zoom-in-right">
                        &#9679; I'm a fresher front-end developer
                    </p>
                    <p data-aos-delay="400" data-aos="zoom-in-left">
                        &#9679; I’m 25 years old, I graduated from VietNam National University Of Agriculture with an
                        automation engineer degree
                    </p>
                    <p data-aos-delay="400" data-aos="zoom-in-right">
                        &#9679; For some reasons and i love IT, so I decide to study and purser it
                    </p>
                    <p data-aos-delay="400" data-aos="zoom-in-left">
                        &#9679; I am a very motivated person and a fast learner.
                    </p>
                    <p data-aos-delay="400" data-aos="zoom-in-right">
                        &#9679; My short term goal is to find a position where I can use the knowledge and strengths
                        that I have
                    </p>
                </div>
                <Title id="skill">My Skills</Title>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="mt-10 mb-20 shadow-md shadow-white bg-[#4a3036] w-[70%] mx-auto p-8 text-left rounded-md text-[23px] text-white sm:w-[92%] sm:text-lg"
                >
                    <p data-aos-delay="400" data-aos="zoom-in-right">
                        &#9679; Experience in using JavaScript (ES6), HTML5, CSS3.
                    </p>
                    <p data-aos-delay="400" data-aos="zoom-in-left">
                        &#9679; Experience with ReactJS, Router.
                    </p>
                    <p data-aos-delay="400" data-aos="zoom-in-right">
                        &#9679; Have experience in Git
                    </p>
                    <p data-aos-delay="400" data-aos="zoom-in-left">
                        &#9679; Be able to read and write English
                    </p>
                    <p data-aos-delay="400" data-aos="zoom-in-right">
                        &#9679; Responsive for a better user experience
                    </p>
                    <p data-aos-delay="400" data-aos="zoom-in-left">
                        &#9679; Knowledge used with taildwincss
                    </p>
                    <p data-aos-delay="400" data-aos="zoom-in-right">
                        &#9679; Self -study, search for documents
                    </p>
                </div>
                <Logo />
                <Project />
                <Title id="other">Mini Project</Title>
                <PetProject />
                <h2
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    className=" text-white text-[22px] py-16 font-sans"
                >
                    Create by HuanQuang
                </h2>
            </div>
        </div>
    );
}

export default AboutMe;
