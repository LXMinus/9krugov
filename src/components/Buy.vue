<template>
  <section class="buy_page__section">
    <h2>Цена: 999руб.</h2>
    <div class="buy_page__section__link_section">
      <div class="buy_page__section__link_section__block">
      <router-link to="/">
        <h3>Ozon</h3>
        <svg width="200px" height="200px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="none">
          <path class="link_svg_stroke" fill="none" stroke="#D5D5D5" stroke-width="3.2" d="M86.755 43.569c40.545-7.15 77.555 10.53 82.661 39.486 5.106 28.956-23.625 58.227-64.17 65.376-40.547 7.15-77.556-10.53-82.662-39.486C17.478 79.99 46.208 50.718 86.755 43.57Zm4.316 24.472C63.058 72.98 44.73 91.43 47.057 104.63c2.327 13.197 25.86 24.268 53.873 19.328 28.012-4.939 46.34-23.39 44.013-36.589-2.327-13.197-25.86-24.269-53.872-19.33Z" />
        </svg>
      </router-link>
      <router-link to="/">
        <h3>Wildberrys</h3>
        <svg width="200px" height="200px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="none">
          <g style="fill:none;stroke-width:4.42227;stroke-dasharray:none">
            <path class="link_svg_stroke" fill="none" stroke="#D5D5D5" stroke-linejoin="round" stroke-linecap="round" d="m4.955 18.904 6.492 23.921 6.957-23.924 8.105 24.052 6.52-24.044m26.467 17.419c0 2.064-.736 3.779-2.238 5.145-1.503 1.366-3.27 2.064-5.45 2.064h-10.93V18.333h10.134c2.092 0 3.859.698 5.302 2.006 1.474 1.337 2.181 2.994 2.181 4.971 0 2.21-.884 3.895-2.592 5.146 2.238 1.162 3.593 3.255 3.593 5.872z" transform="translate(8.553 12.056) scale(2.71356)"/>
            <path class="link_svg_stroke" fill="none" stroke="#D5D5D5" stroke-linejoin="round" stroke-linecap="round" d="M56.118 30.375H41.623" transform="translate(8.553 12.056) scale(2.71356)"/>
          </g>
        </svg>
      </router-link>
      </div>
      <div class="buy_page__section__link_section__block">
        <router-link to="/">
          <h3>Avito</h3>
          <svg width="200px" height="200px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="none">
              <path class="link_svg_stroke" fill="none" stroke="#D5D5D5" stroke-width="3.2" d="M61.924 172.07c26.468 0 47.924-21.456 47.924-47.924S88.392 76.222 61.924 76.222 14 97.678 14 124.146s21.456 47.925 47.924 47.925z" />
              <path class="link_svg_stroke" fill="none" stroke="#D5D5D5" stroke-width="3.2"  d="M149.044 166.007c15.992 0 28.956-12.963 28.956-28.955 0-15.992-12.964-28.955-28.956-28.955-15.99 0-28.954 12.963-28.954 28.955 0 15.992 12.963 28.955 28.954 28.955z" />
              <path class="link_svg_stroke" fill="none" stroke="#D5D5D5" stroke-width="3.2" d="M71.086 65.979c9.898 0 17.922-8.024 17.922-17.921 0-9.898-8.024-17.922-17.922-17.922-9.898 0-17.921 8.024-17.921 17.922 0 9.897 8.023 17.921 17.921 17.921z" />
              <path class="link_svg_stroke" fill="none" stroke="#D5D5D5" stroke-width="3.2" d="M137.789 97.856c21.519 0 38.964-17.444 38.964-38.963 0-21.52-17.445-38.964-38.964-38.964-21.52 0-38.964 17.445-38.964 38.964s17.445 38.963 38.964 38.963z" />
          </svg>
        </router-link>
        <router-link to="/">
          <h3>VK</h3>
          <svg width="200px" height="200px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path class="link_svg_stroke" fill="none" stroke-linecap="round" stroke="#D5D5D5" stroke-linejoin="round" d="M27.55,35.19V28.55c4.46.68,5.87,4.19,8.71,6.64H43.5a29.36,29.36,0,0,0-7.9-10.47c2.6-3.58,5.36-6.95,6.71-12.06H35.73c-2.58,3.91-3.94,8.49-8.18,11.51V12.66H18l2.28,2.82,0,10.05c-3.7-.43-6.2-7.2-8.91-12.87H4.5C7,20.32,12.26,37.13,27.55,35.19Z"/>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Buy'
}
</script>

<style scoped>
  .buy_page__section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .buy_page__section > h2{
    color: #FFFFFF;
    font-family: Jost;
    font-weight: 600;
    font-size: 44px;
    text-align: center;
    margin: 0;
    padding: 40px 0 0 0;
  }
  .buy_page__section__link_section{
    width: 60%;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
  }
  .buy_page__section__link_section__block{
    width: 47.5%;
    display: flex;
    justify-content: space-between;
  }
  .buy_page__section__link_section__block > a{
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
  .buy_page__section__link_section__block > a:hover{
    border: 3px solid #FFFFFF;
    box-shadow: 5px 5px 5px 5px #FFFFFF;
  }
  .buy_page__section__link_section__block > a:hover h3{
    color: #FFFFFF;
  }
  .buy_page__section__link_section__block > a:hover .link_svg_stroke{
    stroke: #FFFFFF;
  }
</style>
