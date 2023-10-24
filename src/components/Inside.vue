<template>
  <section class="inside_page__section">
    <h2>Что внутри?</h2>
    <div class="inside_page__section__link_section">
      <div class="inside_page__section__link_section__block">
        <router-link to="/">
          <h3>Коробка и фишки</h3>
        </router-link>
        <router-link to="/">
          <h3>Карточки</h3>
        </router-link>
      </div>
      <div class="inside_page__section__link_section__block">
        <router-link to="/">
          <h3>Карта и кость</h3>
        </router-link>
        <router-link to="/">
          <h3>Правила</h3>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Inside'
}
</script>

<style scoped>
  .inside_page__section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .inside_page__section > h2{
    color: #FFFFFF;
    font-family: Jost;
    font-weight: 600;
    font-size: 44px;
    text-align: center;
    margin: 0;
    padding: 40px 0 0 0;
  }
  .inside_page__section__link_section{
    width: 60%;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
  }
  .inside_page__section__link_section__block{
    width: 47.5%;
    display: flex;
    justify-content: space-between;
  }
  /*.inside_page__section__link_section__block:last-of-type{*/
  /*  margin-top: 50px;*/
  /*}*/
  .inside_page__section__link_section__block > a{
    height: 360px;
    width: 45%;
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
  .inside_page__section__link_section__block > a:hover{
    border: 3px solid #FFFFFF;
    box-shadow: 5px 5px 5px 5px #FFFFFF;
  }
  .inside_page__section__link_section__block > a:hover h3{
    color: #FFFFFF;
  }
</style>
