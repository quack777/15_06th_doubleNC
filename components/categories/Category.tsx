import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';

const Category: FC = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setData(router.query.sendData);
  });
  const categoryButton = (e: React.MouseEventHandler<HTMLLIElement>): void => {
    router.push(`/categories/${e.target.id}`);
  };

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
