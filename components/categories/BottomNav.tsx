import { useRouter } from 'next/router';
import React from 'react';

const BottomNav = () => {
  const router = useRouter();

  const categoryButton = (e: React.MouseEventHandler<HTMLLIElement>): void => {
    router.push(`/categories/${e.target.id}`);
  };

  return (
    <ul>
      <li id="1" onClick={categoryButton}>
        땡처리콘
      </li>
      <li id="67" onClick={categoryButton}>
        카페
      </li>
      <li id="62" onClick={categoryButton}>
        편의점, 마트
      </li>
      <li id="60" onClick={categoryButton}>
        빵, 아이스크림
      </li>
      <li id="61" onClick={categoryButton}>
        피자, 햄버거, 치킨
      </li>
      <li id="65" onClick={categoryButton}>
        문화, 게임, 영화
      </li>
      <li id="129" onClick={categoryButton}>
        외식, 분식
      </li>
      <li id="69" onClick={categoryButton}>
        백화점, 주유, 뷰티
      </li>
      <li id="128" onClick={categoryButton}>
        휴대폰 데이터
      </li>
    </ul>
  );
};

export default BottomNav;
