import CartIcon from './../../assets/CartIcon'
import classes from './header-btn.module.css'

const HeaderCartBtn = () => {
    return<button className={classes.button}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span  className={classes.badge}>3</span>
        </button>
   
}
export default HeaderCartBtn