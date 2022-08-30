import { useEffect, useState } from 'react';
import Menu from '../Menu';
function Header() {
    const [visible, setVisible] = useState('none');
    const show = () => setVisible('');
    const hide = () => setVisible('none');

    return (
        <div className="w-full h-[120px] pb-6 relative">
            <div className="pt-3.5 mx-8 flex justify-between items-center sm:mx-1">
                <i className="fa-solid fa-code text-3xl p-1 text-white sm:hidden"></i>
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
                    <div className="mr-5 sm:hidden">
                        <i className="fa-solid fa-volume-high text-xl px-[6px] py-1 selection:p-[5.6px] bg-[#ff923e] rounded-md text-white"></i>
                        <i className="fa-solid fa-volume-slash text-xl px-[6px] py-1 p-1 bg-[#ff923e] rounded-md hidden"></i>
                    </div>
                    <i
                        className="fa-solid fa-bars bg-[#ff923e] text-xl text-white px-[10px] py-1 rounded-md h-9 sm:bg-transparent sm:text-3xl sm:py-0"
                        onClick={() => {
                            if (visible == 'none') {
                                show();
                            }
                        }}
                    ></i>
                </div>
            </div>
            <div className="absolute top-0 right-0 animate-pulse animate-wiggle" id="menu" style={{ display: visible }}>
                <i
                    className="fa-solid fa-xmark absolute text-[30px] p-1 text-white right-[16px]"
                    onClick={() => {
                        hide();
                    }}
                ></i>
                <Menu />
            </div>
        </div>
    );
}

export default Header;
