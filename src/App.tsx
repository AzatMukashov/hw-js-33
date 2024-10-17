import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import CountryList from './components/CountryList.tsx';
import Country from './components/Country.tsx';
import { CountryProps } from './types';

const App: React.FC = () => {
  const [countries, setCountries] = useState<CountryProps[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryProps | null>(null);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get('https://restcountries.com/v2/all?fields=alpha3Code,name');
      setCountries(response.data);
    };
    fetchCountries();
  }, []);
  useEffect(() => {
    if (selectedCountryCode) {
      const fetchCountry = async () => {
        const response = await axios.get(`https://restcountries.com/v2/alpha/${selectedCountryCode}`);
        setSelectedCountry(response.data);
      };
      fetchCountry();
    }
  }, [selectedCountryCode]);
  return (
    <Container>
      <Row>
        <Col md={4}>
          <CountryList
            countries={countries}
            onSelectCountry={setSelectedCountryCode}/>
        </Col>
        <Col md={8}>
          <Country country={selectedCountry}/>
        </Col>
      </Row>
    </Container>
  )
};

export default App
