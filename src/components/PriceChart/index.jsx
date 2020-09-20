import React, { useState, useEffect } from 'react';
import { VictoryContainer, VictoryChart, VictoryLine } from 'victory';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';

import { ButtonPlus } from '../Button';
import { Container, HeaderPrice } from './styles';

function PriceChart() {
  const [newRepo, setNewRepo] = useState('');
  const [chart, setChart] = useState([]);
  useEffect(() => {
    localStorage.setItem(
      '@Dashboard:newRepo',
      JSON.stringify(newRepo),
    );
  }, [newRepo]);

  async function handleAddRepository(event) {
    event.preventDefault();

    if (!newRepo) {
      toast.error('Por favor, preencha o campo antes de pesquisar.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }
    const response = await api.get(`${newRepo}?apikey=8bba6d0aeef48b53da963f19b05d02b5`);
    const company = response.data;

    if (company.length === 0) {
      toast.error('Não encontramos nenhuma empresa com esse nome, por favor tente novamente.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (company === undefined) {
      toast.error('Não encontramos nenhuma empresa com esse nome, por favor tente novamente.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setChart([...chart, company[0]]);
  }

  return (
    <>
      <HeaderPrice>
        <p>
          Gráfico de preços
        </p>
        <form onSubmit={handleAddRepository}>
          <input
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
          />
          <ButtonPlus type="submit">
            +
          </ButtonPlus>
        </form>
        <div>
          <ButtonPlus>
            D
          </ButtonPlus>
          <ButtonPlus>
            S
          </ButtonPlus>
          <ButtonPlus>
            M
          </ButtonPlus>
        </div>
      </HeaderPrice>
      <Container>
        <VictoryChart
          height={230}
          width={920}
          domainPadding={{ x: 15 }}
          containerComponent={<VictoryContainer responsive />}
        >
          {chart.map((response) => (
            <VictoryLine
              key={response.symbol}
              barRatio={0.8}
              style={{
                data: { stroke: '#5636D3' },
              }}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              labels={({ datum }) => datum.y}
              data={[
                { x: 'Baixa do dia', y: response.dayLow },
                { x: 'Alta do dia', y: response.dayHigh },
                { x: 'Último valor antes do fechamento', y: response.previousClose },
                { x: 'Valor atual', y: response.price },
              ]}
            />
          ))}
        </VictoryChart>
      </Container>
    </>
  );
}

export default PriceChart;
