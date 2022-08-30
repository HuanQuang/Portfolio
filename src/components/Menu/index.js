function Menu() {
    const menus = [
        { name: 'HOME', linked: '#' },
        { name: 'ABOUT ME', linked: '#about' },
        { name: 'SKILLS', linked: '#skill' },
        { name: 'PROJECTS', linked: '#project' },
        { name: 'OTHERS', linked: '#other' },
    ];
    return (
        <div className="w-[200px] px-8 py-16 menu-set">
            {menus.map((item, index) => {
                return (
                    <li
                        className="text-[30px] text-white cursor-pointer no-underline list-none border-solid border-b-[1px] hover:text-[green]"
                        key={index}
                    >
                        <a href={item.linked}>{item.name}</a>
                    </li>
                );
            })}
        </div>
    );
}

export default Menu;
