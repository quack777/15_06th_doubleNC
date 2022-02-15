import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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
