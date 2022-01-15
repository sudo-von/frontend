export type job = {
  companyName: string;
  role:
    | 'Full stack developer'
    | 'Backend developer'
    | 'Frontend developer'
    | 'Software developer';
  date: string;
};

export const jobs: job[] = [
  {
    companyName: 'Intel corporation',
    role: 'Software developer',
    date: 'dic 2021',
  },
  {
    companyName: 'Tredicom',
    role: 'Backend developer',
    date: 'nov 2020 - sep 2021',
  },
  {
    companyName: 'IEC',
    role: 'Frontend developer',
    date: 'ene 2021 - jun 2021',
  },
  {
    companyName: 'Evotek',
    role: 'Full stack developer',
    date: 'ene 2019 - nov 2020',
  },
  {
    companyName: 'Datum',
    role: 'Full stack developer',
    date: 'abr 2019 - jun 2019',
  },
];
