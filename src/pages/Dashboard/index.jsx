import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '../../components/Header';
import LeftMenu from '../../components/LeftMenu';
import Tables from '../../components/Tables/index';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container, HeaderDiv, Content, TablesDiv,
} from './styles';

function Dashboard() {
  return (
    <Container>
      <HeaderDiv>
        <Header />
      </HeaderDiv>
      <Content>
        <LeftMenu />
        <TablesDiv>
          <Tables />
        </TablesDiv>
      </Content>
      <ToastContainer />
    </Container>
  );
}

export default Dashboard;
