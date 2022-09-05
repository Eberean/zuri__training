* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Mulish', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

a {
  text-decoration: none;
  color: #525252;
  font-size: 1rem;
}

body {
  background-color: #F5F5F5;
  height: 100vh;
}

.container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}

.primary-header {
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  min-height: 50px;
  padding: 1.5rem 0;
  box-shadow: 0 3px 30px rgb(0 0 0 / 5%), 0 1px 6px rgb(0 0 0 / 6%);
  z-index: 99999;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* .logo {
  width: 15%;
  text-align: end;
} */

.logo span {
  display: block;
  color: #2B7A78;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto;
}

ul.nav-links {
  display: flex;
  align-items: center;
  width: 90%;
}

ul.nav-links li {
  display: inline-block;
  font-size: 1.2rem;
}

.nav-links__pages-wrapper {
  width: 75%;
}

.nav-links__pages {
  display: flex;
  justify-content: space-evenly;  
  width: 80%;
  margin: 0 auto;
}

.nav-links__authentication-wrapper {
  width: 35%;
}

.nav-links__authentication {
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 260px;
  margin: 0 auto;
}

.nav-links__authentication-wrapper li {
  border: 1px solid #2B7A78;
  text-align: center;
  padding: 0.6rem 0;
  border-radius: 7px; 
}

.nav-links__authentication-wrapper .sign-in {
  width: 46%;
  color: #2B7A78;
}

.nav-links__authentication-wrapper .sign-up {
  width: 46%;
  background-color: #2B7A78;
}

.product__link {
  border-bottom: 2px solid #2B7A78;
}

.sign-in a {
  color: #2B7A78;
}

.sign-up a {
  color: #F5F5F5;
}

.mobile-nav__container {
  display: none;
}

/* Product Seection */
.product-container__wrapper {
  width: 75%;
  margin: 7rem auto;
}

.product-text__wrapper {
  text-align: center;
}

.product-text__wrapper h1 {
  font-size: 3rem;
  line-height: 2;
  color: #101828;
}

.product-text__wrapper p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #525252;
}

.cards-wrapper {
  width: 85%;
  max-width: 1024px;
  margin: 2rem auto;
}

.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, .1);
  border-radius: 1rem;
  padding: 2rem 6.5rem;
  margin: 4rem 0;
  width: 100%;
}

.cards-image__wrapper {
  width: 60%;
}

.cards-image__wrapper img {
  width: 100%;
}

.cards-contents__wrapper {
  padding: 2rem ;
  width: 80%;
  margin: auto;
}

.cards-contents__wrapper p {
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 1.5rem 0;
  margin: auto;
}

.cards-btn {
  padding: 1rem 2rem;
  border: 1px solid rgb(43, 122, 120);
  border-radius: 10px;
  color: #2B7A78;
}

.cards-btn a {
  font-size: 1.1rem;
  color: #2B7A78;
}

/* Footer Section */
footer {
  background-color: #1a5b58;
  padding: 4rem 0;
}

.footer-container {
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.footer-container a {
  color: #f5f5f5;
  line-height: 2.5;
}

.footer-icons__header {
  font-size: 1.4rem;
}

.icons .fab {
  padding: 0 .1rem 0 .1rem;
  padding-top: 2rem;
  font-size: 1.5rem;
}

.footer-section__head {
  font-size: 1.56rem;
  padding-bottom: 1.4rem;
  font-weight: 400;
}

.footer-container__below-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4rem;
}

.footer-section__copyright p {
  color: #f5f5f5;
  font-size: 1.2rem;
}

.footer-section__agreements {
  display: flex;
  justify-content: space-around;
  flex-shrink: 2;
  width: 35%;
}

.footer-section__agreements p a {
  color: #ffff;
}