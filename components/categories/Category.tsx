import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';

const Category: FC = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const categoryInfo = JSON.parse(router.query.sendData);
    // console.log(categoryInfo);
    setData(categoryInfo);
    // console.log('AA');
    console.log(router.query);
  }, []);

  const categoryButton = (id, name): void => {
    // router.push(`/categories/${id}`);
    router.push({ pathname: `/categories/[id]`, query: { categoryName: name } }, `/categories/${id}`);
  };

  console.log(router.query, 'test');

  return (
    <div className="Category">
      {data?.map((data) => (
        <p key={data.id} onClick={() => categoryButton(data.id, data.name)}>
          {data.name}
        </p>
      ))}
    </div>
  );
};

export default Category;
