import React, { useContext } from 'react';
import Banner from './Banner';
import Carusal from './Carusal';
import SpecialSec2 from './SpecialSec2';
import SpecialSec1 from './SpecialSec1';
import CatagoryContainer from './CatagoryTabs/CatagoryContainer';
import { Dna } from 'react-loader-spinner'
import { AuthContext } from '../Provider/AuthProvider';
import PageTitle from '../PageTitle';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import useTitle from '../../Hooks/useTitle';


const Home = () => {
    useTitle("Home")
    const { loading } = useContext(AuthContext);
    if(loading){
        return <div className='flex justify-around'><Dna
        visible={true}
        height="100"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      /></div>
    }

    return (
        <div>
            {/* <PageTitle title={'Home'}/> */}
            {/* <Helmet>
                <title>PlayTime-Home</title>
            </Helmet> */}
           <Banner/>
           <Carusal/>
           <SpecialSec1/>
           <CatagoryContainer/>
           <SpecialSec2/>
        </div>
    );
};

export default Home;