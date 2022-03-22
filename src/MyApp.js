import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';

import SearchField from './SearchField/SearchField';
import Tile from './Tile/Tile';

function MyApp() {
  const [nameToFind, setNameToFind] = useState('');
  const [nextPage, setNextPage] = useState();
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const URL = 'https://rickandmortyapi.com/api/character/?name=';

  useEffect(() => {
    if (nameToFind !== '') {
      fetchData(nameToFind);
    } else {
      setResult([]);
      setNextPage(null);
      setNoResults(false);
    }
  }, [nameToFind]);

  //   const AxiosRequest = axios.create({});

  async function fetchData(nameToFind) {
    await axios
      .get(URL + nameToFind)
      .then(function (response) {
        const data = response.data;
        setNoResults(false);
        setNextPage(data.info.next);
        setResult(data.results);
      })
      .catch(function () {
        setResult([]);
        setNextPage(null);
        setNoResults(true);
      });
  }

  async function loadMoreData() {
    await axios
      .get(nextPage)
      .then(function (response) {
        const data = response.data;
        setNoResults(false);
        setNextPage(data.info.next);
        setResult([...result, ...data.results]);
      })
      .catch(function () {
        setResult([]);
        setNextPage('');
        setNoResults(true);
      });
  }

  return (
    <div>
      <h2>{'Search your Rick and Morthy Character'}</h2>
      <SearchField setSearchName={setNameToFind} />
      {isLoading ? <h4>Loading...</h4> : ''}
      {result.length > 0 &&
        result.map(element => {
          return <Tile element={element} key={element.id} />;
        })}
      {nextPage != null && (
        <Button variant="outlined" onClick={loadMoreData}>
          Load more
        </Button>
      )}
      {noResults && <h3>No Results</h3>}
    </div>
  );
}

export default MyApp;
