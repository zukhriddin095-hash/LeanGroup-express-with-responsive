import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules' // 🔥 modules dan import
import { Swiper, SwiperSlide } from 'swiper/react'
import Buttons from '../../buttons/Buttons'
import Cards from '../../cards/Cards'
import './commond.css'

function Commond() {
	const AvoData = [
		{
			id: '1',
			name: 'Войнич Дарья',
			job: 'Заместитель директора по продажам',
			number: '+375 (17) 270-53-77 (317)',
			email: '',
		},
		{
			id: '2',
			name: 'Мисько Екатерина',
			job: 'Начальник отдела сопровождения',
			number: '+375 (17) 270-53-77 (115)',
			email: 'k.melnichenko@leangroup.by',
		},
		{
			id: '3',
			name: 'Дмитроченко Дмитрий',
			job: 'Начальник отдела допечатной подготовки',
			number: '+375 (17) 270-53-77 (333)',
			email: 'dmitrochenko@leangroup.by',
		},
		{
			id: '4',
			name: 'Антух Евгений',
			job: 'Начальник отдела снабжения',
			number: ' +375 44 764-16-28',
			email: 'j.antuh@leangroup.by',
		},
		{
			id: '5',
			name: 'Мисник Елена',
			job: 'Специалист по работе с клиентами',
			number: '+375 (17) 270-53-77 (322)',
			email: 'e.misnik@leangroup.by',
		},
		{
			id: '6',
			name: 'Антух Евгений',
			job: 'Начальник отдела снабжения',
			number: ' +375 44 764-16-28',
			email: 'j.antuh@leangroup.by',
		},
		{
			id: '7',
			name: 'Мисник Елена',
			job: 'Специалист по работе с клиентами',
			number: '+375 (17) 270-53-77 (322)',
			email: 'e.misnik@leangroup.by',
		},
	]

	return (
		<div className='container command'>
			<h3>
				Наша <span>команда</span>
			</h3>

			<div className='commond-cards'>
				<Swiper
					modules={[Autoplay]}
					spaceBetween={30}
					loop={true}
					slidesPerView={5}
					autoplay={{ delay: 1500 }}
					breakpoints={{
						400: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						550: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 25,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 30,
						},
					}}
					className='mySwiper'
				>
					{AvoData.map(avo => (
						<SwiperSlide>
							<Cards
								key={avo.id}
								name={avo.name}
								email={avo.email}
								job={avo.job}
								number={avo.number}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className='command-btn'>
				<Buttons radius={'small'} text={'Наша команда'} />
			</div>
		</div>
	)
}

export default Commond
