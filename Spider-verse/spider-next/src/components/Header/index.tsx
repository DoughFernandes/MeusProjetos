import React from 'react';
import Image from 'next/image';

import menu from '../../../public/icons/menu.svg';
import user from '../../../public/icons/user.svg';
import spider from '../../../public/spider-logo.svg';

import './header.scss'

const Header: React.FC = () => {
  return (
    <header>
      <Image
        src={menu}
        alt='Botão de opcões do menu'
        width={25}
        height={36}
      />
      <Image
        src={spider}
        alt='Botão de opcões do menu'
        width={260}
        height={70}
      />
      <Image
        src={user}
        alt='Botão de opcões do menu'
        width={25}
        height={36}
      />
    </header>
  );
};

export default Header;
