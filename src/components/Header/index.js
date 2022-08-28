function Header() {
    return (
        <div className="w-full h-[120px] pb-6">
            <div className="pt-3.5 mx-8 flex justify-between">
                <i className="fa-solid fa-code text-3xl p-1 text-white"></i>
                <div className="flex items-center">
                    <a href="https://www.facebook.com/Ymir.19/" className="mx-4 cursor-pointer">
                        <i className="fa-brands fa-square-facebook text-[30px] "></i>
                    </a>
                    <a href="https://www.instagram.com/ymir__97/" className="mx-4 cursor-pointer">
                        <i className="fa-brands fa-instagram text-[30px] "></i>
                    </a>
                    <a href="https://github.com/HuanQuang" className="mx-4 cursor-pointer">
                        <i className="fa-brands fa-square-github text-[30px] "></i>
                    </a>
                    <a href="https://www.tiktok.com/@ymir.n" className="mx-4 cursor-pointer">
                        <i className="fa-brands fa-tiktok text-[30px] "></i>
                    </a>
                </div>
                <div className="flex items-center">
                    <div className="mr-5">
                        <i className="fa-solid fa-volume-high text-xl px-[6px] py-1 selection:p-[5.6px] bg-[#ff923e] rounded-md text-white"></i>
                        <i className="fa-solid fa-volume-slash text-xl px-[6px] py-1 p-1 bg-[#ff923e] rounded-md hidden"></i>
                    </div>
                    <i className="fa-solid fa-bars bg-[#ff923e] text-xl text-white px-[10px] py-1 rounded-md h-9"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
