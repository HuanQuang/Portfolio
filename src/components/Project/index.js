import Images from '../../assets/image';
import Title from '../Tittle';
import Button from '../Button';
function Project() {
    return (
        <div className="">
            <Title id="project">My Project</Title>
            <div data-aos="fade-right" className="w-[70%] mx-auto my-24 sm:w-11/12 sm:p-3">
                <div className="flex mb-10 bg-[#252025] p-8 justify-between rounded-lg sm:p-2 sm:flex-col">
                    <img className="w-[58%] pr-3 sm:w-full p-1" src={Images.podcast} alt=""></img>
                    <div className="text-white text-left relative min-h-[250px] sm:min-h-[160px]">
                        <h2 className="text-2xl text-[#ed6363] text-[30px] font-black pb-3 sm:text-sm">
                            PODCAST RADIO
                        </h2>
                        <h3 className="text-[18px] mb-2 sm:text-xs">LISTEN TO PODCAST AND MUSIC</h3>
                        <div>
                            <p className="sm:text-xs">&#9679; HTML, CSS, JAVASCRIPT</p>
                        </div>
                        <div className="absolute bottom-[-15px] right-[40%] sm:bottom-5 sm:right-[30%]">
                            <Button href="https://huanquang.github.io/podcast/">Live Demo</Button>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    className="flex  mb-10 bg-[#473e4c] p-8 justify-between rounded-lg sm:p-2 sm:flex-col-reverse"
                >
                    <div className="text-white text-left relative min-h-[250px] sm:min-h-[160px]">
                        <h2 className="text-2xl text-[#ed6363] text-[30px] font-black pb-3 sm:text-sm">TETRIS GAME</h2>
                        <h3 className="text-[18px] mb-2 sm:text-xs">PLAYING TETRIS GAME BASIC</h3>
                        <div>
                            <p className="sm:text-xs">&#9679; HTML, CSS, JAVASCRIPT</p>
                        </div>
                        <div className="absolute bottom-[-15px] right-[40%] sm:bottom-5 sm:right-[30%]">
                            <Button href="https://huanquang.github.io/Tetris-game/">Live Demo</Button>
                        </div>
                    </div>
                    <img className="w-[58%] pl-3 sm:w-full p-1" src={Images.tetris} alt=""></img>
                </div>
                <div
                    data-aos="fade-right"
                    className="flex  mb-10 bg-[#2d2738] p-8 justify-between rounded-lg sm:p-2 sm:flex-col"
                >
                    <img className="w-[58%] pr-3 sm:w-full p-1" src={Images.portfolio} alt=""></img>
                    <div className="text-white text-left relative min-h-[250px] sm:min-h-[200px]">
                        <h2 className="text-2xl text-[#ed6363] text-[30px] font-black pb-3 sm:text-sm">MY PORTFOLIO</h2>
                        <h3 className="text-[18px] mb-2 sm:text-xs">SOME INFOMATIONS ABOUT ME</h3>
                        <div>
                            <p className=" sm:text-xs">&#9679; HTML, CSS, JAVASCRIPT</p>
                            <p className="sm:text-xs">&#9679; React Js</p>
                            <p className=" sm:text-xs">&#9679; TailwindCss</p>
                            <p className=" sm:text-xs">&#9679; Tippy, Aos, typewriter Lib</p>
                        </div>
                        <div className="absolute bottom-[-15px] right-[40%] sm:bottom-5 sm:right-[30%]">
                            <Button href="https://portfolio-9719gwwnh-huanquang.vercel.app/">Live Demo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
