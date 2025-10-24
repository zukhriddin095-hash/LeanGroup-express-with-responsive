import 'swiper/css'
import 'swiper/css/autoplay' // Autoplay uchun CSS
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import sertficate from '../../../assets/sertificate (1).png'
import sertficate1 from '../../../assets/sertificate (2).png'
import sertficate2 from '../../../assets/sertificate (3).png'
import sertficate3 from '../../../assets/sertificate (4).png'
import sertficate4 from '../../../assets/sertificate (5).png'
import './sertifikat.css'

function Sertifilkat() {
	return (
		<div className='container certificate'>
			<h3>
				Качество продукции подтверждают <span>сертификаты</span>
			</h3>
			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false, // Bu muhim!
				}}
				pagination={{
					clickable: true,
					el: '.custom-pagination', // Custom pagination uchun
				}}
				spaceBetween={20}
				loop={true}
				slidesPerView={3}
				navigation={{
					nextEl: '.custom-next',
					prevEl: '.custom-prev',
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 4,
					},
				}}
				style={{ width: '100%', height: '300px' }}
				className='mySwiper'
			>
				<SwiperSlide>
					<div className='sertificate-img'>
						<img src={sertficate} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='sertificate-img'>
						<img src={sertficate1} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='sertificate-img'>
						<img src={sertficate2} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='sertificate-img'>
						<img src={sertficate3} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='sertificate-img'>
						<img src={sertficate4} alt='' />
					</div>
				</SwiperSlide>
				<div className='custom-navigation'>
					<button className='custom-prev'>←</button>
					<button className='custom-next'>→</button>
				</div>
			</Swiper>
		</div>
	)
}

export default Sertifilkat
