import './products.css';
import PurplePhone from "../../assets/images/18503-63Deeppurple.jpg";
import PinkPhone from "../../assets/images/14677-597Pink.jpg";
import GreyPhone from "../../assets/images/12454-787bigeek_image1.jpeg";

const phones = [
  {
    name: 'Apple iPhone 14 Pro Max',
    image: PurplePhone,
    price: '114 990',
    description: 'Apple iPhone 14 Pro Max 128GB (Тёмно-фиолетовый | Deep Purple)'
  },
  {
    name: 'Apple iPhone 13 mini',
    image: PinkPhone,
    price: '70 990',
    description: 'Apple iPhone 13 mini 128GB (Розовый | Pink)'
  },
  {
    name: 'Apple iPhone 12 Pro',
    image: GreyPhone,
    price: '78 990 ',
    description: 'Apple iPhone 12 Pro Max 128GB (Графитовый | Graphite)'
  },
  {
    name: 'Apple iPhone 14 Pro Max',
    image: PurplePhone,
    price: '114 990',
    description: 'Apple iPhone 14 Pro Max 128GB (Тёмно-фиолетовый | Deep Purple)'
  },
  {
    name: 'Apple iPhone 13 mini',
    image: PinkPhone,
    price: '70 990',
    description: 'Apple iPhone 13 mini 128GB (Розовый | Pink)'
  },
  {
    name: 'Apple iPhone 12 Pro',
    image: GreyPhone,
    price: '78 990 ',
    description: 'Apple iPhone 12 Pro Max 128GB (Графитовый | Graphite)'
  },
];

const Products = () => {
  return (
    <div>
      <h1>Телефоны</h1>
      <div className='products-list'>
        {phones.map((product, i) => (
          <div key={product.name + i} className='products-card'>
            <div className='products-block'>
              <img className='products-block__img' src={product.image}/>
            </div>
            {/* <div className='products-info'> */}
              <p className='products-description'>{product.description}</p>
              <p className='products-price'>{product.price} <span>₽</span></p>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  )
};

export default Products;