import React from 'react'
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

const Home = () => {
    return (
        <React.Fragment>
            <HomeBanner />
            <Video />
            <Featured />
            <Museum />
            <Entertainment />
            <About />
            <Speciality />
            <Combo />
            <Press />
            <FaqScroll />
            <Partners />
            <ShopCategory />
        </React.Fragment>
    )
}
export default Home;