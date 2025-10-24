import { Fragment } from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'

import footerLogo from '../../assets/logo.png'
import './footer.css'

function Footer() {
	return (
		<Fragment>
			<div className='footer container'>
				<div className='footer-top'>
					<div className='footer-top-logo'>
						<img src={footerLogo} alt='footer-logo' />
					</div>
					<div className='footer-top-social'>
						<SlSocialVkontakte style={{ color: '#EF7C00' }} />
						<FaFacebookF style={{ color: '#EF7C00' }} />
						<FaLinkedinIn style={{ color: '#EF7C00' }} />
					</div>
				</div>
				<div className='footer-span'></div>
				<div className='footer-About'>
					<div className='products'>
						<h3>Продукция</h3>
						<h5>Ламинатные тубы</h5>
						<h5>Экструзионные тубы</h5>
						<h5>Другая упаковка</h5>
					</div>
					<div className='products'>
						<h3>Компания</h3>
						<h5>О нас</h5>
						<h5>Наша команда</h5>
						<h5>Сертификаты</h5>
					</div>
					<div className='products'>
						<h3>Разделы</h3>
						<h5>Контакты</h5>
						<h5>Новости</h5>
						<h5>Вакансии</h5>
					</div>
					<div className='location'>
						<h5>Беларусь</h5>
						<p>
							<a href='tel:+375 (17) 270 53 77'>+375 (17) 270 53 77</a>
						</p>
						<p>
							<a href='tel:+375 (17) 270 53 78'>+375 (17) 270 53 78</a>
						</p>
						<h5>Москва</h5>
						<p>
							<a href='tel:+375 (17) 270 53 77'>+375 (17) 270 53 77</a>
						</p>
						<p>
							<a href='tel:+375 (17) 270 53 78'>+375 (17) 270 53 78</a>
						</p>
					</div>
					<div className='location'>
						<h5>Европа</h5>
						<p>
							<a href='tel:+375 (17) 270 53 77'>+48 73 1111 044</a>
						</p>

						<h5>Екатеринбург</h5>
						<p>
							<a href='tel:+7 (343) 346 82 06'>+7 (343) 346 82 06</a>
						</p>
					</div>
				</div>
				<div className='footer-title'>
					<h5>
						© 2022 Leangroup. All Rights Reserved. Разработка и продвижение
						сайтов SkyWeb.by
					</h5>
				</div>
			</div>
		</Fragment>
	)
}

export default Footer
