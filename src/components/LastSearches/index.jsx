import React from 'react';

import { ButtonAdd, ButtonDecrement } from '../Button';
import {
  Container, List, Title, GearIcon,
} from './styles';

function LastSearches() {
  return (
    <>
      <Title>
        <p>Histórico de buscas</p>
        <GearIcon />
      </Title>
      <Container>
        <List>
          <p>AAPL</p>
          <div>
            <nav>
              <li>R$ 1200.00</li>
              <li>Abertura</li>
            </nav>
            <nav>
              <li>R$ 1400.00</li>
              <li>Fechamento</li>
            </nav>
          </div>
          <ButtonAdd>Adicionar</ButtonAdd>
          <ButtonDecrement>Remover</ButtonDecrement>
        </List>
        <List>
          <p>FB</p>
          <div>
            <nav>
              <li>R$ 12000.00</li>
              <li>Abertura</li>
            </nav>
            <nav>
              <li>R$ 160000.00</li>
              <li>Fechamento</li>
            </nav>
          </div>
          <ButtonAdd>Adicionar</ButtonAdd>
          <ButtonDecrement>Remover</ButtonDecrement>
        </List>
        <List>
          <p>AMZN</p>
          <div>
            <nav>
              <li>R$ 1200.00</li>
              <li>Abertura</li>
            </nav>
            <nav>
              <li>R$ 160.00</li>
              <li>Fechamento</li>
            </nav>
          </div>
          <ButtonAdd>Adicionar</ButtonAdd>
          <ButtonDecrement>Remover</ButtonDecrement>
        </List>
      </Container>
    </>
  );
}

export default LastSearches;
