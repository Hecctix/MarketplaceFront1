import React from 'react';

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../components/img";
import {Banner, collectionProfile} from '../collectionPage/collectionIndex';
{/*import {Slider, Brand} from '../components/componentsIndex';*/}
import Filter from '../components/Filter/Filter';

const collection = () => {
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1}/>
    </div>
    );
};

export default collection;