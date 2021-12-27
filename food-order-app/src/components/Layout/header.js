import classes from './header.module.css'
import { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartBtn from './header-btn'

const Header = () => {
    return <Fragment>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartBtn />
    </header>
    <div className={classes['main-image']}>
    <img src={mealsImage} alt="Delicious Food" />
    </div>
    </Fragment>
}
export default Header