import React, {useEffect} from 'react'
import Teams from '../Teams';
import About from './About';
import HomeBanner from './Banner';
import Combo from './Combo';
import Entertainment from './Entertainment';
import FaqScroll from './FaqScroll';
import Featured from './Featured';
import Museum from './Museum';
import Partners from './Partners';
import Press from './Press';
import ShopCategory from './ShopCategory';
import Speciality from './Speciality';
import Video from './Video';

const Home = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <React.Fragment>
            {console.log(props)}
            <HomeBanner />
            <Video />
            <Featured />
            <Museum />
            <Entertainment />
            <About />
            <Speciality />
            <Combo theme={props}/>
            <Teams />
            <Press />
            <FaqScroll />
            <Partners />
            <ShopCategory />
        </React.Fragment>
    )
}
export default Home;