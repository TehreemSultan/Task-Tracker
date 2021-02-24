import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onClick, btnText, color}) => {
    return (
       <header className='header'>
          <h1>{title}</h1> 
          <Button color={color} text={btnText} onClick={onClick} />
       </header>
    )
}

Header.defaultProps={
    title:'Task Tracker',
}

Header.propTypes={
    title:PropTypes.string,
}
export default Header
