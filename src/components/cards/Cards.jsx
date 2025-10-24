import './cards.css'

function Cards({ number, job, name, email, key }) {
	return (
		<div className='card'>
			<div className='card-img'>
				<img
					src={
						'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg'
					}
					alt='avatar'
				/>
			</div>
			<div className='card-title-avo'>
				<h3>{name}</h3>
				<p>{job}</p>
				<a href={`tel:${number}`}>{number}</a>
				{email && <a href={`mailto:${email}`}>{email}</a>}
			</div>
		</div>
	)
}

export default Cards
