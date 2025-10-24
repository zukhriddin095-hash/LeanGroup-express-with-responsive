import newsImg from '../../../assets/news (1).jpg'
import newsImg1 from '../../../assets/news (1).png'
import newsImg2 from '../../../assets/news (2).jpg'
import Buttons from '../../buttons/Buttons'
import './news.css'
function News() {
	return (
		<div className='container news'>
			<h3>Новости</h3>

			<div className='news-cards'>
				<div className='news-card'>
					<img src={newsImg2} alt='news-card-img' />
					<div className='news-card-title'>
						<p>28.01.2022</p>
						<h5>"ЛеанГрупп" серебряный призер EcoVadis!</h5>
					</div>
				</div>
				<div className='news-card'>
					<img src={newsImg} alt='news-card-img' />
					<div className='news-card-title'>
						<p>28.01.2022</p>
						<h5>"ЛеанГрупп" серебряный призер EcoVadis!</h5>
					</div>
				</div>
				<div className='news-card'>
					<img src={newsImg1} alt='news-card-img' />
					<div className='news-card-title'>
						<p>16.12.2021</p>
						<h5>Туба, как вид упаковки</h5>
					</div>
				</div>
			</div>

			<div className='news-btn'>
				<Buttons text={'Все новости'} radius={'small'} />
			</div>
		</div>
	)
}

export default News
