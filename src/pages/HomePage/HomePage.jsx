import { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import About from '../../components/sections/about/About'
import Commond from '../../components/sections/commond/Commond'
import Hero from '../../components/sections/hero/Hero'
import Inform from '../../components/sections/inform/Inform'
import News from '../../components/sections/news/News'
import Products from '../../components/sections/products/products'
import Sertifilkat from '../../components/sections/sertifikat/Sertifilkat'

function HomePage() {
	return (
		<Fragment>
			<Header />
			<Hero />
			<About />
			<Sertifilkat />
			<Products />
			<Inform />
			<Commond />
			<News />
			<Footer />
		</Fragment>
	)
}

export default HomePage
