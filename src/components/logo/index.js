import Images from '../../assets/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/perspective.css';
function Logo() {
    return (
        <div className="">
            <div className="flex w-[70%] mx-auto justify-between flex-wrap">
                <Tippy
                    animation="perspective"
                    content={<div className="text-white px-3 py-2 bg-orange-500 rounded-md">HTML5</div>}
                >
                    <img
                        className="w-[100px] mx-16 my-14 grayscale hover:grayscale-0 hover:scale-125 duration-500"
                        src={Images.html}
                    ></img>
                </Tippy>
                <Tippy
                    animation="perspective"
                    content={
                        <div className="text-white px-3 py-2 bg-orange-500 rounded-md min-w-[60px] text-center">
                            CSS
                        </div>
                    }
                >
                    <img
                        className="w-[100px] mx-16 my-14 grayscale hover:grayscale-0 hover:scale-125 duration-500"
                        src={Images.css}
                    ></img>
                </Tippy>
                <Tippy
                    animation="perspective"
                    content={<div className="text-white px-3 py-2 bg-orange-500 rounded-md">JavaScript</div>}
                >
                    <img
                        className="w-[100px] mx-16 my-14 grayscale hover:grayscale-0 hover:scale-125 duration-500"
                        src={Images.js}
                    ></img>
                </Tippy>
                <Tippy
                    animation="perspective"
                    content={<div className="text-white px-3 py-2 bg-orange-500 rounded-md">ReactJS</div>}
                >
                    <img
                        className="w-[100px] mx-16 my-14 grayscale hover:grayscale-0 hover:scale-125 duration-500"
                        src={Images.react}
                    ></img>
                </Tippy>
                <Tippy
                    animation="perspective"
                    content={<div className="text-white px-3 py-2 bg-orange-500 rounded-md">TailwinCss</div>}
                >
                    <img
                        className="w-[100px] mx-16 my-14 grayscale hover:grayscale-0 hover:scale-125 duration-500"
                        src={Images.tailwindcss}
                    ></img>
                </Tippy>
            </div>
        </div>
    );
}

export default Logo;
