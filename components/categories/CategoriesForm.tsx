import React, { useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import List from './List';

const CategoriesForm: React.FC = () => {
  return (
    <div>
      <List />
    </div>
  );
};
export default CategoriesForm;
