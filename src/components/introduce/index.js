import Typewriter from 'typewriter-effect';
import Button from '../Button';
import Images from '../../assets/image';
function Introduce() {
    return (
        <div className="flex justify-center">
            <div className="p-6 text-center mt-5 w-3/5 text-white">
                <h3 className="text-5xl tracking-widest">Hi! My name's Huan</h3>
                <div className="text-3xl h-[70px] mb-4">
                    <Typewriter
                        options={{
                            strings: [
                                "I'm a Fresher ReacJS Developer, I enjoy learning everything about Front-end and Back-end technologies",
                                'I love creating beautiful user experiences.',
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 30,
                        }}
                    />
                </div>

                <div className="my-5">
                    <Button> Download My Resume</Button>
                </div>
            </div>
            <img
                src={Images.avatar}
                className="w-56 h-56 rounded-[50%] hover:scale-110 transition ease-in duration-700 p-2 border-r-[2px] border-solid mt-10"
                alt="avatar"
            ></img>
        </div>
    );
}

export default Introduce;
