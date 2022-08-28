import Images from '../../assets/image';
function PetProject() {
    return (
        <div className="flex mt-11 justify-around w-[90%] mx-auto">
            <div className="w-[30%] h-[200px] rounded-lg border-2 border-solid border-gray-400 mx-3 bg-[#181920]">
                <img src={Images.todo} className="w-[60%] h-[70%] mx-auto my-[10%] rounded-md"></img>
            </div>
            <div className="w-[30%] h-[200px] rounded-lg border-2 border-solid border-gray-400 mx-3 bg-[#181920]">
                <img src={Images.weather} className="w-[60%] h-[80%] mx-auto my-[8%] rounded-md"></img>
            </div>
            <div className="w-[30%] h-[200px] rounded-lg border-2 border-solid border-gray-400 mx-3 bg-[#181920]">
                <img src={Images.searchTag} className="w-[60%] h-[70%] mx-auto my-[10%] rounded-md"></img>
            </div>
        </div>
    );
}

export default PetProject;
