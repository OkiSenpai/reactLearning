import Card from "./Card";
import styles from './ProductList.module.css';


function ProductList() {
  return (
    <div className="col-md-8">
    <ul>
      <ul className={styles.productList}>
        <li className={styles.productListItem}>
          <Card />
        </li>
        <li className={styles.productListItem}>
          <Card />
        </li>
      </ul>
    </ul>
    </div>
  );
}

export default ProductList;
