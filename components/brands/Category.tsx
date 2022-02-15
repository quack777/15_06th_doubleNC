import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';

const Category: FC = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router);
    //setData(router.query.sendData);
    console.log('AA');
  });

  return (
    <div className="Category">
      {data.map((data) => (
        <p>{data}</p>
      ))}
    </div>
  );
};

export default Category;
