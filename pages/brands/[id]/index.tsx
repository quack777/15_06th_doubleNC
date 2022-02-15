import React from 'react';
import { useRouter } from 'next/router';
import BrandsTemplate from '../../../components/brands/BrandsTemplate';
import BrandsForm from '../../../components/brands/BrandsForm';

const Brands = () => {
  return (
    <BrandsTemplate>
      <BrandsForm />
    </BrandsTemplate>
  );
};

export default Brands;
