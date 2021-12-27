import classes from './card.module.css'

const Card = (props) => {
 return <section className={classes.card}>
{props.children}
 </section>
}

export default Card