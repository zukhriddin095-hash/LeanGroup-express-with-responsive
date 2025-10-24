import { Fragment, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import logo from '../../assets/logo.png'
import './header.css'
function Header() {
	const [toggle, setToggle] = useState(false)

	return (
		<Fragment>
			<div className='container'>
				<div className='header'>
					<div className='header-logo'>
						<img src={logo} alt='Logo' />
					</div>
					<navbar className='header-nav'>
						<ul>
							<li>
								<a href='#'>Продукция</a>
							</li>
							<li>
								<a href='#'>Сертификаты</a>
							</li>
							<li>
								<a href='#'>Наша команда</a>
							</li>
							<li>
								<a href='#'>О нас</a>
							</li>
							<li>
								<a href='#'>Новости</a>
							</li>
							<li>
								<a href='#'>Вакансии</a>
							</li>
							<li>
								<a href='#'>Контакты</a>
							</li>
						</ul>
					</navbar>
					<div className='toogle'>
						<button
							className='toggle-header'
							onClick={() => setToggle(!toggle)}
						>
							<MdMenu className='toggle' />
						</button>
						<nav className={toggle ? 'header-nav-true' : 'header-nav-false'}>
							<ul>
								<li>
									<a href='#'>Продукция</a>
								</li>
								<li>
									<a href='#'>Сертификаты</a>
								</li>
								<li>
									<a href='#'>Наша команда</a>
								</li>
								<li>
									<a href='#'>О нас</a>
								</li>
								<li>
									<a href='#'>Новости</a>
								</li>
								<li>
									<a href='#'>Вакансии</a>
								</li>
								<li>
									<a href='#'>Контакты</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className='header-lang'>
						<a href='#'>EN</a>
						<span>|</span>
						<a href='#'>RU</a>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Header
