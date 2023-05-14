interface ISlider {
  image: string;
  title: string;
  price: number;
}

export const getSliderData: ISlider[] = [
  { image: 'potatoTable', title: 'Столовый картофель', price: 142 },
  { image: 'potatoCountry', title: 'Деревенский картофель', price: 129 },
  { image: 'potatoHomemade', title: 'Домашний картофель', price: 133 },
];
