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
  const { data } = await axios.get('https://api2.ncnc.app/con-category1s/67/nested');
  const { conCategory1: { conCategory2s } } = data;
  const conItems = conCategory2s[0].conItems;

  const paths = conItems && conItems.map(({ id }: any) => ({
    params: { id: id.toString() }
  }))
  
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params && params.id;
  console.log(`getStaticProps: ${id}`);
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
