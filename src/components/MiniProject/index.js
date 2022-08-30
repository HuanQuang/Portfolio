import Images from '../../assets/image';
function PetProject() {
    const projects = [
        { img: Images.todo, link: 'https://huanquang.github.io/todoList/', style: 'fade-up-right' },
        { img: Images.weather, link: 'https://huanquang.github.io/weather-App/' },
        { img: Images.searchTag, link: 'https://huanquang.github.io/SearchTag/', style: 'fade-up-left' },
    ];
    return (
        <div className="flex mt-11 justify-around w-[90%] mx-auto flex-wrap">
            {projects.map((project, index) => {
                return (
                    <div
                        key={index}
                        data-aos={project.style}
                        className="mb-5 w-[350px] h-[200px] rounded-lg border-2 border-solid border-gray-400 mx-3 bg-[#181920] relative"
                    >
                        <img src={project.img} className="w-[60%] h-[70%] mx-auto my-[10%] rounded-md" alt=""></img>
                        <a
                            href={project.link}
                            id="pet-active"
                            className="w-[350px] h-[200px] rounded-lg absolute top-[-3px] right-[-1px] flex justify-center items-center sm:w-full"
                        ></a>
                    </div>
                );
            })}
        </div>
    );
}

export default PetProject;
