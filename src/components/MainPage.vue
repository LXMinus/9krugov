<template>
  <section class="main_page__section">
    <div class="main_page__section__link_section">
      <div class="main_page__section__link_section__block">
        <router-link to="">
          <h2>Для кого?</h2>
          <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13" stroke="#D5D5D5" stroke-width="1" stroke-linecap="round"/>
            <circle cx="12" cy="16" r="1" fill="#D5D5D5"/>
            <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#D5D5D5" stroke-width="1" stroke-linecap="round"/>
          </svg>
        </router-link>
        <router-link to="">
          <h2>О проекте</h2>
        </router-link>
        <router-link to="">
          <h2>Об игре</h2>
        </router-link>
      </div>
      <div class="main_page__section__link_section__block">
        <router-link to="">
          <h2>Что внутри?</h2>
        </router-link>
        <router-link to="">
          <h2>Купить</h2>
        </router-link>
        <router-link to="">
          <h2>О нас</h2>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style scoped>
  .main_page__section{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .main_page__section__link_section{
    width: 60%;
    display: flex;
    flex-direction: column;
  }
  .main_page__section__link_section__block{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .main_page__section__link_section__block:last-of-type{
    margin-top: 50px;
  }
  .main_page__section__link_section__block > a{
    height: 360px;
    width: 25%;
    border: 3px solid #D5D5D5;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
  .main_page__section__link_section__block > a:hover{
    border: 3px solid #FFFFFF;
    box-shadow: 5px 5px 5px 5px #FFFFFF;
  }
  h2{
    color: #D5D5D5;
    font-size: 30px;
  }
</style>
