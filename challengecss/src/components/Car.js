import styles from './Car.module.css'

const Car = ({car}) => {
    return(
        <div className={styles.card}>
            <h1>{car.name}</h1>
            <p>KM: {car.KM}</p>
            <p>COR: {car.COR}</p>
        </div>
    );
};

export default Car;