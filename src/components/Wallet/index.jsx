/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ButtonDecrement, ButtonAdd } from '../Button';
import Input from '../Input';
import {
  Container, List, Title, PlusIcon, ListForm,
} from './styles';

function LastSearches() {
  const [addForm, setAddForm] = useState([]);
  const [buySellRegister, setBuySellRegister] = useState(() => {
    const storageBuySellRegister = localStorage.getItem(
      '@Dashboard:BuySellRegister',
    );

    if (storageBuySellRegister) {
      return JSON.parse(storageBuySellRegister);
    }
    return [];
  });
  const [createCard, setCreateCard] = useState(() => {
    const storageCards = localStorage.getItem(
      '@Dashboard:cards',
    );

    if (storageCards) {
      return JSON.parse(storageCards);
    }
    return [];
  });
  const [maxForm, setMaxForm] = useState([0]);
  const [cardKey, setCardKey] = useState([]);
  const [cardKeySubtract, setCardKeySubtract] = useState([]);
  const [buySellCondition, setBuySellCondition] = useState([]);

  function formatDate() {
    const data = new Date();
    const dia = data.getDate().toString();
    const diaF = (dia.length === 1) ? `0${dia}` : dia;
    const mes = (data.getMonth() + 1).toString();
    const mesF = (mes.length === 1) ? `0${mes}` : mes;
    const anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [addForm]);

  useEffect(() => {
    localStorage.setItem(
      '@Dashboard:cards',
      JSON.stringify(createCard),
    );
  }, [createCard]);

  useEffect(() => {
    localStorage.setItem(
      '@Dashboard:BuySellRegister',
      JSON.stringify(buySellRegister),
    );
  }, [buySellRegister]);

  function subtractNewCard(data) {
    buySellCondition.splice(0, 1);
    setBuySellCondition([...buySellCondition, data]);
  }

  function addNewCard(data) {
    if (data.name === '' || data.companyChart === '' || data.price === '') {
      toast.error('Por favor preencha todos os campos.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      buySellCondition.splice(0, 1);
      setBuySellCondition([...buySellCondition, false]);
      return;
    }
    if (data.companyChart.length >= 10 || data.price.length >= 10) {
      toast.error('Digite no máximo 10 caracteres por campo.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      buySellCondition.splice(0, 1);
      setBuySellCondition([...buySellCondition, false]);
      return;
    }
    const existCard = (createCard.findIndex((card) => card.name === data.name));

    if (buySellCondition[0]) {
      if (existCard === -1) {
        toast.error('Não é possível realizar essa ação.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        buySellCondition.splice(0, 1);
        setBuySellCondition([...buySellCondition, false]);
      } else {
        const storageCards = localStorage.getItem(
          '@Dashboard:cards',
        );
        const listCards = JSON.parse(storageCards);

        if (data.companyChart > listCards[existCard].companyChart) {
          toast.error('Não é possível Vender o um número de ações maior do que você possui.', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          buySellCondition.splice(0, 1);
          setBuySellCondition([...buySellCondition, false]);
          return;
        }

        const companyChartPlus = listCards[existCard].companyChart - data.companyChart;
        if (companyChartPlus <= 0) {
          createCard.splice(existCard, 1);
          setCreateCard([...createCard]);
          buySellCondition.splice(0, 1);
          setBuySellCondition([...buySellCondition, false]);
          return;
        }
        const { price } = listCards[existCard];

        createCard.splice(existCard, 1);
        setCreateCard([...createCard]);

        const editedCard = {
          name: data.name,
          companyChart: companyChartPlus,
          price,
          date: formatDate(),
        };

        handleSaveBuyAndSell(parseInt(data.companyChart), data.name, '-');
        handleCreateCard(editedCard);
        buySellCondition.splice(0, 1);
        setBuySellCondition([...buySellCondition, false]);
      }
    } else {
      data.companyChart = parseInt(data.companyChart);
      const price = parseFloat(data.price);
      data.price = price.toFixed(2);
      if (existCard === -1) {
        if (data.companyChart <= 0) {
          return;
        }

        handleSaveBuyAndSell(data.companyChart, data.name);
        handleCreateCard(data);
        buySellCondition.splice(0, 1);
        setBuySellCondition([...buySellCondition, false]);
      } else {
        const storageCards = localStorage.getItem(
          '@Dashboard:cards',
        );
        const listCards = JSON.parse(storageCards);

        const companyChartPlus = listCards[existCard].companyChart + data.companyChart;
        if (companyChartPlus <= 0) {
          createCard.splice(existCard, 1);
          setCreateCard([...createCard]);
          return;
        }
        const division = (parseFloat(listCards[existCard].price) + parseFloat(data.price)) / 2;
        const getPriceAverage = division.toFixed(2);

        createCard.splice(existCard, 1);
        setCreateCard([...createCard]);

        const editedCard = {
          name: data.name,
          companyChart: companyChartPlus,
          price: getPriceAverage,
          date: formatDate(),
        };

        handleSaveBuyAndSell(parseInt(data.companyChart), data.name);
        handleCreateCard(editedCard);
        buySellCondition.splice(0, 1);
        setBuySellCondition([...buySellCondition, false]);
      }
    }
  }

  function attachCardIndexPlus(name) {
    cardKey.splice(0, 1);
    setCardKey([...cardKey, name]);
  }

  function attachCardIndexSubtract(name) {
    cardKey.splice(0, 1);
    setCardKeySubtract([...cardKeySubtract, name]);
  }

  function addSubtractCompanyChart(data) {
    console.log(data.newCharts);
    if (data.newCharts < 0) {
      toast.error('Não é possível comprar ou vender ações com números negativos.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      buySellCondition.splice(0, 1);
      setBuySellCondition([...buySellCondition, false]);
      return;
    }
    if (cardKey[0]) {
      let charts = parseInt(data.newCharts);
      if (!charts) {
        charts = 1;
      }
      const existCard = (createCard.findIndex((card) => card.name === cardKey[0]));
      const storageCards = localStorage.getItem(
        '@Dashboard:cards',
      );
      const listCards = JSON.parse(storageCards);

      const companyChartPlus = listCards[existCard].companyChart + charts;
      if (companyChartPlus <= 0) {
        createCard.splice(existCard, 1);
        setCreateCard([...createCard]);
        return;
      }

      createCard.splice(existCard, 1);
      setCreateCard([...createCard]);

      const editedCard = {
        name: cardKey[0],
        companyChart: companyChartPlus,
        price: listCards[existCard].price,
        date: formatDate(),
      };

      handleSaveBuyAndSell(charts, cardKey[0]);
      setCreateCard([...createCard, editedCard]);
    } else {
      let charts = parseInt(data.newCharts);
      if (!charts) {
        charts = 1;
      }
      const existCard = (createCard.findIndex((card) => card.name === cardKeySubtract[0]));
      const storageCards = localStorage.getItem(
        '@Dashboard:cards',
      );
      const listCards = JSON.parse(storageCards);

      if (charts > listCards[existCard].companyChart) {
        toast.error('Não é possível Vender o um número de ações maior do que você possui.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        buySellCondition.splice(0, 1);
        setBuySellCondition([...buySellCondition, false]);
        return;
      }

      const companyChartPlus = listCards[existCard].companyChart - charts;
      if (companyChartPlus <= 0) {
        createCard.splice(existCard, 1);
        setCreateCard([...createCard]);
        return;
      }

      createCard.splice(existCard, 1);
      setCreateCard([...createCard]);

      const editedCard = {
        name: cardKeySubtract[0],
        companyChart: companyChartPlus,
        price: listCards[existCard].price,
        date: formatDate(),
      };

      handleSaveBuyAndSell(charts, cardKeySubtract[0], '-');
      setCreateCard([...createCard, editedCard]);
    }
    cardKey.splice(0, 1);
    cardKeySubtract.splice(0, 1);
  }

  function handleCreateCard(data) {
    const newCard = {
      name: data.name,
      companyChart: data.companyChart,
      price: data.price,
      date: formatDate(),
    };

    buySellCondition.splice(0, 1);
    setBuySellCondition([...buySellCondition, false]);
    setCreateCard([...createCard, newCard]);
  }

  function handleSaveBuyAndSell(companyChart, name, operator) {
    const existCard = (buySellRegister.findIndex((card) => card.name === name));
    let purchased;
    let sold;

    if (existCard === -1) {
      sold = 0;
      purchased = 0;
      if (companyChart >= 0) {
        purchased = companyChart;
      } else {
        sold += 1;
      }

      const editedCard = {
        name,
        purchased,
        sold,
        date: formatDate(),
      };

      setBuySellRegister([...buySellRegister, editedCard]);
    } else {
      const storageBuySellRegister = localStorage.getItem(
        '@Dashboard:BuySellRegister',
      );
      const listCards = JSON.parse(storageBuySellRegister);

      if (listCards[existCard].sold !== undefined) {
        sold = listCards[existCard].sold;
      } else {
        sold = 0;
      }

      if (listCards[existCard].purchased !== undefined) {
        purchased = parseInt(listCards[existCard].purchased);
      } else {
        purchased = 0;
      }

      if (operator === '-') {
        sold += companyChart;
      }

      buySellRegister.splice(existCard, 1);
      setBuySellRegister([...buySellRegister]);

      const editedCard = {
        name,
        purchased,
        sold,
        date: formatDate(),
      };

      setBuySellRegister([...buySellRegister, editedCard]);
    }
  }

  function createForm() {
    if (maxForm[0] === 0) {
      const response = {
        id: 'Formulário',
      };
      maxForm.splice(0, 1);
      setMaxForm([...maxForm, 1]);
      setAddForm([...addForm, response]);
    } else {
      const state = (addForm.findIndex((form) => form.id === 'Item1'));
      addForm.splice(state, 1);
      maxForm.splice(0, 1);
      setMaxForm([...maxForm, 0]);
      setAddForm([...addForm]);
    }
  }

  function closeForm(id) {
    const state = (addForm.findIndex((form) => form.id === id));
    addForm.splice(state, 1);
    maxForm.splice(0, 1);
    setMaxForm([...maxForm, 0]);
    setAddForm([...addForm]);
  }

  return (
    <>
      <Title>
        <p>Minha carteira</p>
        <PlusIcon onClick={createForm} />
      </Title>
      <Container>
        {addForm.map((response) => (
          <Form key={response.id} onSubmit={addNewCard}>
            <ListForm>
              <nav>
                <li>Nome</li>
                <Input
                  name="name"
                  type="Text"
                  maxLength="10"
                />
              </nav>
              <nav>
                <li>Ações</li>
                <Input
                  name="companyChart"
                  type="Number"
                  maxLength="10"
                />
              </nav>
              <nav>
                <li>Preço</li>
                <Input
                  name="price"
                  type="Number"
                  maxLength="10"
                />
              </nav>
              <div>
                <ButtonAdd type="submit">
                  Comprar
                </ButtonAdd>
                <ButtonDecrement type="submit" onClick={() => subtractNewCard(true)}>
                  Vender
                </ButtonDecrement>
                <ButtonDecrement onClick={() => closeForm(response.id)}>
                  Cancelar
                </ButtonDecrement>
              </div>
            </ListForm>
          </Form>
        ))}
        <section>
          {createCard.map((response) => (
            <Form key={response.name} onSubmit={addSubtractCompanyChart}>
              <List>
                <p>{response.name}</p>
                <section>
                  <nav>
                    <li>Ações</li>
                    <li>{response.companyChart}</li>
                  </nav>
                  <nav>
                    <li>Preço</li>
                    <li>
                      R$
                      {response.price}
                    </li>
                  </nav>
                  <nav>
                    <li>Data</li>
                    <li>{response.date}</li>
                  </nav>
                  <nav>
                    <Input
                      name="newCharts"
                      type="Number"
                    />
                  </nav>
                </section>
                <div>
                  <ButtonAdd type="submit" onClick={() => attachCardIndexPlus(response.name)}>
                    Comprar
                  </ButtonAdd>
                  <ButtonDecrement type="submit" onClick={() => attachCardIndexSubtract(response.name)}>
                    Vender
                  </ButtonDecrement>
                </div>
              </List>
            </Form>
          ))}
        </section>
      </Container>
    </>
  );
}

export default LastSearches;
