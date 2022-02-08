export type categories =
  | 'Web'
  | 'Criptografía'
  | 'Ingeniería inversa'
  | 'Forense';

export type hacking = {
  id: string;
  title: string;
  imageUrl: string;
  repositoryUrl: string;
  categories: categories[];
};

export const hackingCards: hacking[] = [
  {
    id: '61e49eac0a14a91f5cb84ba5',
    title: 'Hackdef',
    imageUrl:
      'https://pbs.twimg.com/profile_images/836074595899731968/rzXVnbgh_400x400.jpg',
    repositoryUrl:
      'https://pbs.twimg.com/profile_images/836074595899731968/rzXVnbgh_400x400.jpg',
    categories: ['Web', 'Criptografía', 'Forense', 'Ingeniería inversa'],
  },
  {
    id: '61e49eac0a14a91f5cb84ba5',
    title: 'Hackdef',
    imageUrl:
      'https://pbs.twimg.com/profile_images/836074595899731968/rzXVnbgh_400x400.jpg',
    repositoryUrl:
      'https://pbs.twimg.com/profile_images/836074595899731968/rzXVnbgh_400x400.jpg',
    categories: ['Web', 'Criptografía', 'Forense', 'Ingeniería inversa'],
  },
  {
    id: '61e49eac0a14a91f5cb84ba5',
    title: 'Hackdef',
    imageUrl:
      'https://pbs.twimg.com/profile_images/836074595899731968/rzXVnbgh_400x400.jpg',
    repositoryUrl:
      'https://pbs.twimg.com/profile_images/836074595899731968/rzXVnbgh_400x400.jpg',
    categories: ['Web', 'Criptografía'],
  },
];
