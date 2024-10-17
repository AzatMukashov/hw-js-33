export interface CountryProps {
  alpha3Code: string;
  name: string;
  capital: string;
  region: string;
  borders?: string[];
}

export interface CountryListProps {
  countries: Country[];
  onSelectCountry: (code: string) => void;
}

export interface CountryDetails {
  country: Country | null;
}