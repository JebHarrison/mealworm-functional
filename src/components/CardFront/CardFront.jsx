import React from 'react';
import styles from './CardFront.module.scss';
// import CardFront from './components/CardFront';


const CardFront = () => {
    return (
        <div className={styles.cardFront}>
            <img src="" alt="Thai Green Curry" />
            <section className={styles.recipeDetails}>
                <h2>Thai Green Curry</h2>
                <p>
                    <span>Thai</span>
                </p>
                <div>
                    <a href="">Full Recipe</a>
                    <a href=""></a>YouTube</div>
            </section>
        </div>
    )
}

export default CardFront
