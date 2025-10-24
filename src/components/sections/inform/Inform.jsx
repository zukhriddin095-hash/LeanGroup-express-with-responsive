import { FaUser } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'

import Buttons from '../../buttons/Buttons'
import './iform.css'

function Inform() {
	return (
		<div className=' inform container'>
			<div className='inform-wrapper'>
				<h3>
					Получить подробную <span>информацию</span>
				</h3>
				<p>
					Просто заполните форму, наш менеджер свяжется с вами в ближайшее время
				</p>
				<form action='#'>
					<div className='user-input'>
						<button>
							<FaUser />
						</button>
						<input type='text' placeholder='Ваше имя' />
					</div>
					<div className='user-call'>
						<button>
							<IoIosCall />
						</button>
						<input type='number' placeholder='+375 (29) 0000000' />
					</div>
					<div className='user-comment'>
						<textarea
							id='comment'
							name='usercomment'
							rows='5'
							cols='40'
							placeholder='Комментарий'
						></textarea>
					</div>
					<div className='user-btn'>
						<Buttons text={'Получить информацию'} radius={'small'} />
					</div>
				</form>
			</div>
		</div>
	)
}

export default Inform
