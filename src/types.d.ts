export interface Country {
  alpha3Code: string;
  name: string;
  capital: string;
  region: string;
  borders?: string[];
}

export interface CountryList {
  countries: Country[];
  onSelectCountry: (code: string) => void;
}

export interface Country {
  country: Country | null;
}