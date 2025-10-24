import { Fragment } from 'react'
import './buttans.css'
function Buttons({ text, radius }) {
	return (
		<Fragment>
			<button className={`btn btn-${radius}`}>{text}</button>
		</Fragment>
	)
}

export default Buttons
