import Images from '../../assets/image';
import Title from '../Tittle';
import Button from '../Button';
function Project() {
    const listPj = [
        {
            id: 1,
            name: 'PODCAST RADIO',
            img: Images.podcast,
            sub: 'Listen to podcast and music',
            tech: ['Html, Css, Javascript'],
            bgColor: 'bg-[#252025]',
            linked: 'https://huanquang.github.io/podcast/',
        },
        {
            id: 2,
            name: 'TETRIS GAME',
            img: Images.tetris,
            sub: 'Playing tetris game',
            tech: ['Html, Css, Javascript'],
            bgColor: 'bg-[#473e4c]',
            linked: 'https://huanquang.github.io/Tetris-game/',
        },
        {
            id: 3,
            name: 'MY PORTFOLIO',
            img: Images.portfolio,
            sub: 'Some information about',
            tech: ['Html, Css, Javascript', 'React JS', ' TailwindCss', 'Tippy, Aos, Typingwriter'],
            bgColor: 'bg-[#2d2738]',
            linked: 'https://quanghuandev.vercel.app/',
        },
        {
            id: 4,
            name: 'Restaurant App',
            img: Images.restaurant,
            sub: 'A project to order foods',
            tech: [
                'Html, Css, Javascript',
                'React JS',
                'Scss',
                'Material UI - Icon',
                'Aos',
                'Reduxjs/toolkit',
                'axios',
                'react-paginate',
                'swiper',
                'firebase (google-login)',
            ],
            bgColor: 'bg-[#2d2738]',
            linked: 'https://restaurant-app-pbmi.vercel.app/',
        },
    ];
    return (
        <div className="">
            <Title id="project">My Project</Title>
            <div data-aos="fade-right" className="w-[70%] mx-auto my-24 sm:w-11/12 sm:p-3">
                {listPj.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`flex mb-10 ${item.bgColor} p-8 justify-around rounded-lg sm:p-2 sm:flex-col`}
                        >
                            <img className="w-[58%] pr-3 sm:w-full p-1 h-[282px]" src={item.img} alt=""></img>
                            <div className="text-white text-left relative min-h-[250px] sm:min-h-[160px]">
                                <h2 className="text-2xl text-[#ed6363] text-[30px] font-black pb-3 sm:text-sm">
                                    {item.name}
                                </h2>
                                <h3 className="text-[18px] mb-2 sm:text-xs">{item.sub}</h3>
                                {item.tech.map((ex) => (
                                    <p className="sm:text-xs">&#9679; {ex}</p>
                                ))}
                                <div className=" sm:bottom-5 sm:right-[30%] mt-5 text-center">
                                    <Button href={item.linked}>Live Demo</Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Project;
