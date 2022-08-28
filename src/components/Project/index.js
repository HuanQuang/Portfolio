import Images from '../../assets/image';
import Tittle from '../Tittle';
import Button from '../Button';
function Project() {
    return (
        <div className="">
            <Tittle>My Project</Tittle>
            <div className="w-[70%] mx-auto my-24">
                <div className="flex mb-10 bg-[#252025] p-8 justify-between rounded-lg">
                    <img className="w-[58%] pr-3" src={Images.podcast}></img>
                    <div className="text-white text-left relative min-h-[250px]">
                        <h2 className="text-2xl text-[#ed6363] text-[30px] font-black pb-3">PODCAST RADIO</h2>
                        <h3 className="text-[18px] mb-2">LISTEN TO PODCAST AND MUSIC</h3>
                        <div>
                            <p className="">&#9679; HTML, CSS, JAVASCRIPT</p>
                        </div>
                        <div className="absolute bottom-[-15px] right-[40%]">
                            <Button href="https://huanquang.github.io/podcast/">Live Demo</Button>
                        </div>
                    </div>
                </div>
                <div className="flex  mb-10 bg-[#473e4c] p-8 justify-between rounded-lg">
                    <div className="text-white text-left relative min-h-[250px]">
                        <h2 className="text-2xl text-[#ed6363] text-[30px] font-black pb-3">TETRIS GAME</h2>
                        <h3 className="text-[18px] mb-2">PLAYING TETRIS GAME BASIC</h3>
                        <div>
                            <p className="">&#9679; HTML, CSS, JAVASCRIPT</p>
                        </div>
                        <div className="absolute bottom-[-15px] right-[40%]">
                            <Button href="https://huanquang.github.io/Tetris-game/">Live Demo</Button>
                        </div>
                    </div>
                    <img className="w-[58%] pl-3" src={Images.tetris}></img>
                </div>
                <div className="flex  mb-10 bg-[#2d2738] p-8 justify-between rounded-lg">
                    <img className="w-[58%] pr-3" src={Images.portfolio}></img>
                    <div className="text-white text-left relative min-h-[250px]">
                        <h2 className="text-2xl text-[#ed6363] text-[30px] font-black pb-3">MY PORTFOLIO</h2>
                        <h3 className="text-[18px] mb-2">SOME INFOMATIONS ABOUT ME</h3>
                        <div>
                            <p className="">&#9679; HTML, CSS, JAVASCRIPT</p>
                            <p className="">&#9679; React Js</p>
                            <p className="">&#9679; TailwindCss</p>
                            <p className="">&#9679; Tippy, Aos, typewriter Lib</p>
                        </div>
                        <div className="absolute bottom-[-15px] right-[40%]">
                            <Button>Live Demo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
