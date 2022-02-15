import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Category from '../categories/Category';
import List from '../categories/List';

const BrandsForm: React.FC = () => {
  const router = useRouter();
  const items = JSON.parse(router.query.data);

  console.log(items);
  return <div>brand</div>;
};

/*
      <Category />
      <List />
*/
export default BrandsForm;
