import { Link } from "react-router-dom";
import icons from '../../data/icons';
import './categories.css';

const data = [
  {
    name: 'Смартфоны',
    src: icons.phone,
    link: 'phones'
  },
  {
    name: 'Наушники',
    src: icons.headphone,
    link: 'headphones'
  },
  {
    name: 'Умные Часы',
    src: icons.smartwatch,
    link: 'smartwatches'
  },
  {
    name: 'Фото техника',
    src: icons.photo,
    link: 'photos'
  }
];

const Categories = () => {

  return (
    <div>
      <h1>Категории</h1>
      <div className='categories-list'>
        {data.map(item => (
          <Link key={item.name} to={item.link} className='categories-link'>
            <div className='categories-item'>
              <h2 className='categories-name'>{item.name}</h2>
              <img src={item.src}/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories;
