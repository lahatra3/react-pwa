import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../services/product';
import './product.css';

export default function Product() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProducts();
            setProduct(product.products);
        };
        fetchProduct();     
    }, []);

  return (
    (product && product.length > 0) && (
        <div className='container__main__product'>
            <div className='container__product'>
                {
                    product.map((value, index) => (
                    <div className='product__item' key={index + '__product'}>
                        <div className='card'>
                            <div className='img'>
                                <img src={value.thumbnail}/>
                            </div>
                            <div className='title'>{value.title}</div>
                            <div className='description'>{value.description.substring(0, 27) + '...'}</div>
                            <div className='price'>{value.price + ' Ar'}</div>
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className='container__button_create_product'>
                <button>
                    <Link to={"/product/create"}>Ajouter</Link>
                </button>
            </div>
        </div>
    )
  )
}
