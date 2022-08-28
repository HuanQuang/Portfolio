function Tittle({ children }) {
    return (
        <div className="relative w-fit m-auto">
            <h2 className="text-[28px] w-fit mx-auto p-3 text-active">{children}</h2>
            <div className="absolute w-full h-1 left-[1%] rounded top-[62px] right-[39%] backgroundActive"></div>
            <div className="absolute w-8 h-3 rounded backgroundActive bottom-[-4px] right-[38%]"></div>
        </div>
    );
}

export default Tittle;
