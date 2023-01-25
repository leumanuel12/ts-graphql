import './App.css';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';


const LIST_COUNTRIES = gql`
{
  countries {
    code
    name
    native
    emoji
    currency
    languages {
      code
      name
    }
  }
}`;

export type Countries = {
  countries: {
    code: string,
    name: string,
    native: string,
    emoji: string,
    currency: string,
    languages: {
      code: string,
      name: string,
    }
  }
}

function App() {
  const {loading, error, data} = useQuery(LIST_COUNTRIES);

  useEffect( () => {
    console.log(loading, error, data?.countries)
  }, [] )

  return (
    <div className="App">
      {/*data?.countries ? data.countries.map : null*/}
    </div>
  );
}

export default App;
