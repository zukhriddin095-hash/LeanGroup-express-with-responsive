import productImg from '../../../assets/1.png'
import productImg1 from '../../../assets/2.png'
import productImg2 from '../../../assets/3.png'
import productImg3 from '../../../assets/4.png'
import productImg4 from '../../../assets/5.png'
import Buttons from '../../buttons/Buttons'

import './products.css'

function Products() {
	return (
		<div className='container products'>
			<h3>
				Наша <span>продукция</span>
				<div className='products-btn'></div>
			</h3>
			<div className='products-btn'>
				<Buttons text={'Ламинатные тубы'} radius={'big'} />
				<Buttons text={'Экструзионные тубы'} radius={'big'} />
				<Buttons text={'Другая упаковка'} radius={'big'} />
			</div>
			<div className='products-imgs'>
				<div className='products-img'>
					<img src={productImg} alt='product-img' />
				</div>
				<div className='products-img'>
					<img src={productImg1} alt='product-img' />
				</div>
				<div className='products-img'>
					<img src={productImg2} alt='product-img' />
				</div>
				<div className='products-img'>
					<img src={productImg3} alt='product-img' />
				</div>
				<div className='products-img'>
					<img src={productImg4} alt='product-img' />
				</div>
			</div>
			<div className='product-cotologe'>
				<Buttons text={'Перейти в каталог'} radius={'small'} />
			</div>
		</div>
	)
}

export default Products
