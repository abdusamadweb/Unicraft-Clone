import React from 'react';
import AwardsSection from "../components/awards-section/AwardsSection";
import LetsTry from "../components/letstry-section/LetsTry";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='home'>
            <div className='center'>
                Home
                <Link to='/functional'>Functional Page</Link>
            </div>
            <AwardsSection />
            <LetsTry />
        </div>
    );
};

export default Home;