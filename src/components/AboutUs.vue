<template>
  <section class="about_us_page__section">
    <h2>Их разыскивает полиция :)</h2>
    <div class="about_us_page__section__link_section">
      <div class="about_us_page__section__link_section__block">
        <router-link to="/">
          <h3>Чел 1</h3>
          <span>Mid-laner</span>
        </router-link>
        <router-link to="/">
          <h3>Чел 2</h3>
          <span>Carry</span>
        </router-link>
        <router-link to="/">
          <h3>Чел 3</h3>
          <span>Hard-laner</span>
        </router-link>
      </div>
      <div class="about_us_page__section__link_section__block scnd_link_block">
        <router-link to="/">
          <h3>Чел 4</h3>
          <span>Semi-support</span>
        </router-link>
        <router-link to="/">
          <h3>Чел 5</h3>
          <span>Full-support</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
  .about_us_page__section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .about_us_page__section > h2{
    color: #FFFFFF;
    font-family: Jost;
    font-weight: 600;
    font-size: 44px;
    text-align: center;
    margin: 0;
    padding: 0 0 0 0;
  }
  .about_us_page__section__link_section{
    width: 80%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about_us_page__section__link_section__block{
    display: flex;
    width: 80%;
    justify-content: space-around;
  }
  .scnd_link_block{
    width: 56%;
    margin-top: 25px;
  }
  .scnd_link_block > a{
    width: 33% !important;
  }
  .about_us_page__section__link_section__block > a{
    height: 360px;
    width: 23%;
    border: 3px solid #D5D5D5;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
  h3{
    color: #D5D5D5;
    font-size: 30px;
    font-family: Nunito;
    padding: 20px 0;
  }
  .about_us_page__section__link_section__block > a:hover{
    border: 3px solid #FFFFFF;
    box-shadow: 5px 5px 5px 5px #FFFFFF;
  }
  .about_us_page__section__link_section__block > a:hover h3{
    color: #FFFFFF;
  }
  span{
    color: #D5D5D5;
    font-size: 30px;
    font-family: Nunito;
    justify-self: flex-end;
  }
  .about_us_page__section__link_section__block > a:hover span{
    color: #FFFFFF;
  }
</style>
