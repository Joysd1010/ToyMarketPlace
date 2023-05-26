import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Marvel from './Marvel';
import Avenger from './Avenger';
import StarWar from './StarWar';
import Dc from './Dc';
import Transformer from './Transformer';
const CatagoryContainer = () => {
const [marvel,setMarvel]=useState([])
const [avengers,setAvengers]=useState([])
const [starWars,setStarWars]=useState([])
const [dc,setDc]=useState([])
const [transformers,setTransformers]=useState([])
// const [allData,setAllData]=useState([])
    useEffect(()=>{
        fetch('https://y-inky-iota.vercel.app/alltoys')
        .then(res=>res.json())
        .then(data=>{
           
            setAvengers(data.filter(data=>data.category=="Avengers"))
            setStarWars(data.filter(data=>data.category=="Star Wars"))
            setDc(data.filter(data=>data.category=="DC"))
            setTransformers(data.filter(data=>data.category=="Transformers"))
            setMarvel(data.filter(data=>data.category=="Marvel"))
        })
    },[])
console.log(starWars)


    return (
        <div className='md:mx-20 mx-5 py-10'>
            <Tabs>
    <TabList>
      <Tab >Marvel</Tab>
      <Tab>Avengers</Tab>
      <Tab>DC</Tab>
      <Tab>StarWars</Tab>
      <Tab>Transformers</Tab>
    </TabList>

    <TabPanel>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
        {
            marvel.map(hero=><Marvel key={hero._id} marvel={hero}/>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
        {
            avengers.map(hero=><Avenger key={hero._id} avenger={hero}/>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
      {dc.map(hero=><Dc key={hero._id} dc={hero}/>)}
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
      {starWars.map(hero=><StarWar key={hero._id} star={hero}/>)}
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
      {transformers.map(hero=><Transformer key={hero._id} trans={hero}/>)}
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default CatagoryContainer;