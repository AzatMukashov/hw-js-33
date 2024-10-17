import React from 'react';
import { Container } from 'react-bootstrap';
import { CountryDetails } from '../types';

const Country: React.FC<CountryDetails> = ({country}) => {
  if (!country) {
    return <Container>Select country</Container>;
  }
  return (
    <Container>
      <h2>{country.name}</h2>
      <p><strong>capital:</strong> {country.capital}</p>
      <p><strong>region:</strong> {country.region}</p>
      <p>
        <strong>borders:</strong> {country.borders && country.borders.length > 0 ? country.borders.join(', ') : 'No info about borders'}
      </p>
    </Container>
  );
};

export default Country;