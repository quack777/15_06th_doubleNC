import React from 'react';
import axios from 'axios';
import ItemsTemplate from '../../../components/items/ItemsTemplate';
import ItemsForm from '../../../components/items/ItemsForm';

import { GetStaticProps, GetStaticPaths } from 'next';
import { getItemInfo, ItemInfoType } from '../../api/items.api';

const Items: React.FC<ItemInfoType> = (itemInfo: ItemInfoType) => {
    
  return (
    <ItemsTemplate>
      <ItemsForm itemInfo={itemInfo}/>
    </ItemsTemplate>
  );    
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {data: { conCategory1s }} = await axios.get('https://api2.ncnc.app/con-category1s');
  const categoriesID = conCategory1s.map(({id}: any) => id);
  let paths: any = [];

  for(let id of categoriesID) {
    const { data } = await axios.get(`https://api2.ncnc.app/con-category1s/${id}/nested`);
    const { conCategory1: { conCategory2s } } = data;
    let conItems = [];
    for(let i = 0; i < conCategory2s.length; i++) {
      conItems = conCategory2s[i].conItems;

      const conItemsID = conItems.map(({ id }: any) => ({
        params: { id: id.toString() }
      }))
      paths = paths.concat(conItemsID);
    }
  }
  
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params && params.id;
    const { itemInfo } = await getItemInfo(id);
    console.log(itemInfo);
    if(!itemInfo) {
      return {
        notFound: true
      }
    }

    return {
      props: itemInfo
    }
}

export default Items;
