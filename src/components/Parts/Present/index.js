import Header from '../../Header';
import Introduce from '../../introduce';
import Images from '../../../assets/image';
function Present() {
    return (
        <div className="home">
            <Header />
            <Introduce />
            <img className="w-full" src={Images.wave} alt=""></img>
        </div>
    );
}

export default Present;
