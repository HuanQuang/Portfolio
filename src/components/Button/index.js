function Button({ children, href, ...props }) {
    var Comp = 'button';
    if (href) {
        Comp = 'a';
        props.href = href;
    }

    return (
        <Comp
            className="border-[1px] border-neutral-200 border-solid rounded-md px-2 py-1 hover:scale-110 duration-500 cursor-pointer text-[24px]"
            {...props}
        >
            {children}
        </Comp>
    );
}

export default Button;
