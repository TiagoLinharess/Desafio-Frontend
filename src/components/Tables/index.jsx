import React from 'react';
import PriceChart from '../PriceChart';
import LastSearches from '../LastSearches';
import Wallet from '../Wallet';

import { Container } from './styles';

export default function Tables() {
  return (
    <Container>
      <PriceChart />
      <LastSearches />
      <Wallet />
    </Container>
  );
}
