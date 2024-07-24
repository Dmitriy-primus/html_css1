import styles from "./Header.module.css";
import ModalHeader from "./ModalHeader";
import { useState } from "react";
import search from "./../source/search_d4us6lg2u4ih.svg";
import cart from "./../source/cart_b0s8i0gqjxdh.svg";

const Header = () => {
  const [stateModal, setStateModal] = useState(true);

  const closeModalHendler = () => {
    setStateModal(!stateModal);
  };

  return (
    <header className={styles.header}>
      {stateModal && <ModalHeader closeModal={closeModalHendler} />}
      <div className={styles.wrapp}>
        <div></div>
        <nav className={styles.header_nav}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
          </ul>
        </nav>
        <div className={styles.header_cart}>
          <div className={styles.header_menu}>
            <img src={search} alt="search" />
            <a href="#">search</a>
          </div>
          <div className={styles.header_menu}>
            <span>
              <img src={cart} alt="cart" />
            </span>
            <a href="#">Cart</a>
          </div>
          <button className={styles.header_btn}>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
