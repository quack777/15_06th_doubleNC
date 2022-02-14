import React from 'react';
import { useRouter } from 'next/router';
import BrandsTemplate from '../../../components/brands/BrandsTemplate';
import BrandsForm from '../../../components/brands/BrandsForm';

const Brands = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);

  return (
    <BrandsTemplate>
      <BrandsForm />
    </BrandsTemplate>
  );
};

export default Brands;
