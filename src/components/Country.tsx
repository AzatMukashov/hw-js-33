import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { CountryDetails } from '../types';
import axios from 'axios';

const Country: React.FC<CountryDetails> = ({country}) => {
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  useEffect(() => {
    const fetchBorderCountries = async () => {
      if (country && country.borders) {
        try {
          const responses = await Promise.all(
            country.borders.map((border: string) => axios.get(`https://restcountries.com/v2/alpha/${border}`))
          );
          setBorderCountries(responses.map((response: { data: { name: string; }; }) => response.data.name));
        } catch (error) {
          console.error('Error fetching border countries:', error);
        }
      }
    };
    fetchBorderCountries().catch(console.error);
  }, [country]);

  if (!country) {
    return <Container className="mt-3 mb-3" style={{height: '500px'}}>Select country</Container>;
  }

  return (
    <Container className="mt-3 mb-3 d-flex flex-column" style={{height: '500px'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h2>{country.name}</h2>
        <img src={country.flag} alt={`Flag of ${country.name}`} style={{width: '150px', height: 'auto'}}/>
      </div>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p style={{marginBottom: '280px'}}><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <div style={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
        <p><strong>Borders:</strong></p>
        <ListGroup style={{maxHeight: '168px', overflowY: 'auto'}}>
          {borderCountries.length > 0 ? borderCountries.map((border: string) => (
            <ListGroup.Item key={border}>{border}</ListGroup.Item>
          )) : <ListGroup.Item>No info about borders</ListGroup.Item>}
        </ListGroup>
      </div>
    </Container>
  );
}

export default Country;
