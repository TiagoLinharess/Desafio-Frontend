import React from 'react';
import { Container, MenuIcon, UserIcon } from './styles';

function Header() {
  return (
    <Container>
      <header>
        <div>
          <MenuIcon />
        </div>
        <nav>
          <div>
            <h1>Tiago Souza</h1>
            <h1>Desenvolvedor</h1>
          </div>
          <UserIcon />
        </nav>
      </header>
    </Container>
  );
}

export default Header;
