import groupBy from 'lodash/groupBy';

export type SupportedCountry = {
  name: string;
  code: string;
  range: string;
};

export const supportedCountries: SupportedCountry[] = [
  {
    name: 'Andorra',
    code: 'AD',
    range: 'AD100 : AD700',
  },
  {
    name: 'Argentina',
    code: 'AR',
    range: '1601 : 9431',
  },
  {
    name: 'American Samoa',
    code: 'AS',
    range: '96799 : 96799',
  },
  {
    name: 'Austria',
    code: 'AT',
    range: '1010 : 9992',
  },
  {
    name: 'Australia',
    code: 'AU',
    range: '0200 : 9726',
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    range: '1000 : 9461',
  },
  {
    name: 'Belgium',
    code: 'BE',
    range: '1000 : 9992',
  },
  {
    name: 'Bulgaria',
    code: 'BG',
    range: '1000 : 9974',
  },
  {
    name: 'Brazil',
    code: 'BR',
    range: '01000-000 : 99990-000',
  },
  {
    name: 'Canada',
    code: 'CA',
    range: 'A0A : Y1A',
  },
  {
    name: 'Switzerland',
    code: 'CH',
    range: '1000 : 9658',
  },
  {
    name: 'Czech Republic',
    code: 'CZ',
    range: '100 00 : 798 62',
  },
  {
    name: 'Germany',
    code: 'DE',
    range: '01067 : 99998',
  },
  {
    name: 'Denmark',
    code: 'DK',
    range: '0800 : 9990',
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
    range: '10101 : 11906',
  },
  {
    name: 'Spain',
    code: 'ES',
    range: '01001 : 52080',
  },
  {
    name: 'Finland',
    code: 'FI',
    range: '00002 : 99999',
  },
  {
    name: 'Faroe Islands',
    code: 'FO',
    range: '100 : 970',
  },
  {
    name: 'France',
    code: 'FR',
    range: '01000 : 98799',
  },
  {
    name: 'Great Britain',
    code: 'GB',
    range: 'AB1 : ZE3',
  },
  {
    name: 'French Guyana',
    code: 'GF',
    range: '97300 : 97390',
  },
  {
    name: 'Guernsey',
    code: 'GG',
    range: 'GY1 : GY9',
  },
  {
    name: 'Greenland',
    code: 'GL',
    range: '2412 : 3992',
  },
  {
    name: 'Guadeloupe',
    code: 'GP',
    range: '97100 : 97190',
  },
  {
    name: 'Guatemala',
    code: 'GT',
    range: '01001 : 22027',
  },
  {
    name: 'Guam',
    code: 'GU',
    range: '96910 : 96932',
  },
  {
    name: 'Guyana',
    code: 'GY',
    range: '97312 : 97360',
  },
  {
    name: 'Croatia',
    code: 'HR',
    range: '10000 : 53296',
  },
  {
    name: 'Hungary',
    code: 'HU',
    range: '1011 : 9985',
  },
  {
    name: 'Isle of Man',
    code: 'IM',
    range: 'IM1 : IM9',
  },
  {
    name: 'India',
    code: 'IN',
    range: '110001 : 855126',
  },
  {
    name: 'Iceland',
    code: 'IS',
    range: '101 : 902',
  },
  {
    name: 'Italy',
    code: 'IT',
    range: '00010 : 98168',
  },
  {
    name: 'Jersey',
    code: 'JE',
    range: 'JE1 : JE3',
  },
  {
    name: 'Japan',
    code: 'JP',
    range: '100-0001 : 999-8531',
  },
  {
    name: 'Liechtenstein',
    code: 'LI',
    range: '9485 : 9498',
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    range: '* : 96167',
  },
  {
    name: 'Lithuania',
    code: 'LT',
    range: '00001 : 99069',
  },
  {
    name: 'Luxembourg',
    code: 'LU',
    range: 'L-1009 : L-9999',
  },
  {
    name: 'Monaco',
    code: 'MC',
    range: '98000 : 98000',
  },
  {
    name: 'Moldavia',
    code: 'MD',
    range: 'MD-2000 : MD-7731',
  },
  {
    name: 'Marshall Islands',
    code: 'MH',
    range: '96960 : 96970',
  },
  {
    name: 'Macedonia',
    code: 'MK',
    range: '1000 : 7550',
  },
  {
    name: 'Northern Mariana Islands',
    code: 'MP',
    range: '96950 : 96952',
  },
  {
    name: 'Martinique',
    code: 'MQ',
    range: '97200 : 97290',
  },
  {
    name: 'Mexico',
    code: 'MX',
    range: '01000 : 99998',
  },
  {
    name: 'Malaysia',
    code: 'MY',
    range: '01000 : 98859',
  },
  {
    name: 'Holland',
    code: 'NL',
    range: '1000 : 9999',
  },
  {
    name: 'Norway',
    code: 'NO',
    range: '0001 : 9991',
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    range: '0110 : 9893',
  },
  {
    name: 'Phillippines',
    code: 'PH',
    range: '0400 : 9811',
  },
  {
    name: 'Pakistan',
    code: 'PK',
    range: '10010 : 97320',
  },
  {
    name: 'Poland',
    code: 'PL',
    range: '00-001 : 99-440',
  },
  {
    name: 'Saint Pierre and Miquelon',
    code: 'PM',
    range: '97500 : 97500',
  },
  {
    name: 'Puerto Rico',
    code: 'PR',
    range: '00601 : 00988',
  },
  {
    name: 'Portugal',
    code: 'PT',
    range: '1000-001 : 9980-999',
  },
  {
    name: 'French Reunion',
    code: 'RE',
    range: '97400 : 97490',
  },
  {
    name: 'Russia',
    code: 'RU',
    range: '101000 : 901993',
  },
  {
    name: 'Sweden',
    code: 'SE',
    range: '10005 : 98499',
  },
  {
    name: 'Slovenia',
    code: 'SI',
    range: '1000 : 9600',
  },
  {
    name: 'Svalbard & Jan Mayen Islands',
    code: 'SJ',
    range: '8099 : 9178',
  },
  {
    name: 'Slovak Republic',
    code: 'SK',
    range: '010 01 : 992 01',
  },
  {
    name: 'San Marino',
    code: 'SM',
    range: '47890 : 47899',
  },
  {
    name: 'Thailand',
    code: 'TH',
    range: '10100 : 96220',
  },
  {
    name: 'Turkey',
    code: 'TR',
    range: '01000 : 81950',
  },
  {
    name: 'United States',
    code: 'US',
    range: '00210 : 99950',
  },
  {
    name: 'Vatican',
    code: 'VA',
    range: '00120 : 00120',
  },
  {
    name: 'Virgin Islands',
    code: 'VI',
    range: '00801 : 00851',
  },
  {
    name: 'Mayotte',
    code: 'YT',
    range: '97600 : 97680',
  },
  {
    name: 'South Africa',
    code: 'ZA',
    range: '0002 : 9992	',
  },
].sort((a, b) => a.name.localeCompare(b.name));

export const grouped = groupBy(supportedCountries, ({ name }) => name.charAt(0));
