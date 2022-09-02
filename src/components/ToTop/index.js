import { useEffect, useState } from 'react';

function ToTop() {
    const [state, setState] = useState('hidden');
    useEffect(() => {
        const handleEvent = () => {
            window.scrollY >= 300 ? setState('block') : setState('hidden');
        };
        window.addEventListener('scroll', handleEvent);
    }, []);

    return (
        <a href="#" className={state}>
            <div className="fixed bottom-10 right-3 bg-orange-600 py-1 px-3 rounded-md text-white animate-pulse">
                <i className="fa-solid fa-angles-up"></i>
            </div>
        </a>
    );
}

export default ToTop;
