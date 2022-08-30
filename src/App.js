import Present from './components/Parts/Present';
import AboutMe from './components/Parts/AboutMe';
function App() {
    return (
        <div className="App">
            <Present />
            <AboutMe />
            <a href="#">
                <div className="fixed bottom-10 right-3 bg-orange-600 py-1 px-3 rounded-md text-white animate-pulse">
                    <i className="fa-solid fa-angles-up"></i>
                </div>
            </a>
        </div>
    );
}

export default App;
