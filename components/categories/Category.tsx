import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';

const Category: FC = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router);
    setData(router.query.sendData);
    console.log('AA');
  });
  const categoryButton = (e: React.MouseEventHandler<HTMLLIElement>): void => {
    router.push(`/categories/${e.target.id}`);
  };
  console.log(data);
  return (
    <div className="Category">
      {data?.map((data) => (
        <p id={data.id} onClick={categoryButton}>
          {data}
        </p>
      ))}
    </div>
  );
};

export default Category;
