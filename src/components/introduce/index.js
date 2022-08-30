import Typewriter from 'typewriter-effect';
import Button from '../Button';
import Images from '../../assets/image';
function Introduce() {
    return (
        <div>
            <div className="flex justify-center items-center sm:flex-col-reverse">
                <div className="p-6 text-center mt-5 w-3/5 text-white sm:w-full" data-aos="fade-right">
                    <h3 className="text-5xl tracking-widest sm:text-[20px] sm:mb-2">Hi! My name's Huan</h3>
                    <div className="text-3xl h-fit mb-4 sm:text-[20px]">
                        <Typewriter
                            options={{
                                strings: [
                                    "I'm a Fresher React JS Developer, I enjoy learning everything about Front-end and Back-end technologies",
                                    'I love creating beautiful user experiences.',
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 30,
                            }}
                        />
                    </div>
                </div>

                <img
                    data-aos="fade-left"
                    src={Images.avatar}
                    className="w-56 h-56 rounded-[50%] hover:scale-110 transition ease-in duration-700 p-2 border-r-[2px] border-solid mt-5"
                    alt="avatar"
                ></img>
            </div>
            <div className="text-center mt-10">
                <Button href="">Linked Resume</Button>
            </div>
        </div>
    );
}

export default Introduce;
