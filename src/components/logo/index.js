import Images from '../../assets/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/perspective.css';
function Logo() {
    let icos = [
        { name: 'HTML5', link: Images.html },
        { name: 'CSS', link: Images.css },
        { name: 'JavaScript', link: Images.js },
        { name: 'React JS', link: Images.react },
        { name: 'TailwindCSS', link: Images.tailwindcss },
        { name: 'SASS', link: Images.sass },
        { name: 'MUI', link: Images.mui },
        { name: 'REDUX', link: Images.redux },
    ];

    return (
        <div className="flex w-[70%] mx-auto justify-between flex-wrap">
            {icos.map((ico, index) => {
                return (
                    <Tippy
                        key={index}
                        animation="perspective"
                        content={
                            <div className="text-white px-3 py-2 bg-orange-500 rounded-md mb-[20px]">{ico.name}</div>
                        }
                    >
                        <img
                            className="w-[100px] mx-16 my-14 grayscale hover:grayscale-0 hover:scale-125 duration-500 sm:mx-0 sm:te-6xl sm:grayscale-0 sm:my-10"
                            src={ico.link}
                            alt={ico.name}
                        ></img>
                    </Tippy>
                );
            })}
        </div>
    );
}

export default Logo;
