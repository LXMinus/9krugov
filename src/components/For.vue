<template>
  <section class="for_page__section">
    <div class="back_arrow">
      <router-link to="/">
        <svg width="60px" height="60px" viewBox="0 -9.55 119.78 119.78" xmlns="http://www.w3.org/2000/svg">
          <path class="link_svg_fill" fill="#D5D5D5" d="M60.3,78.46c-.31,5-.39,9-.82,12.91-.86,7.85-7.86,11.57-14.92,7.85A63.53,63.53,0,0,1,34.4,92.84Q19.67,81,5.29,68.78C-.35,64-1.3,58.65,1.58,51.82a30.86,30.86,0,0,1,2.19-4.65A302.23,302.23,0,0,1,31.91,9.31a48.7,48.7,0,0,1,7.64-6.84C46-2.3,51.84,0,53.52,7.92a65.45,65.45,0,0,1,.78,7.69c.14,1.66.24,3.33.4,5.53a32.54,32.54,0,0,0,4.39.14c7.11-.83,14.18-2.09,21.3-2.57a246.17,246.17,0,0,1,24.89-.54c7.68.26,11.38,3.91,12.77,11.46a112.58,112.58,0,0,1,1.63,24.8c-.05,1.42-.31,2.84-.49,4.25-1,8.35-5.08,13.81-14,14.64a17.63,17.63,0,0,0-4.09,1.24A65.73,65.73,0,0,1,78.3,78.24C72.6,78.16,66.9,78.37,60.3,78.46ZM43.47,14c-9,5.63-27.46,31.38-32.4,44.91,10.7,9.07,21.55,18.33,32.52,27.45,1.38,1.15,3.39,1.55,5.33,2.4,1.38-4.27.25-8,.35-11.62.13-4.81.95-6.57,5.41-7.27,5-.8,10.21-.76,15.33-1,7.4-.41,14.84-.49,22.2-1.28a39.24,39.24,0,0,0,16.08-5c2.55-12.13,1.56-25-2.65-33.79-4.31-1.14-8.87-1.08-13.42-.95-10.86.31-21.7.61-32.42,2.73-5.51,1.09-10.8.41-15.4-3.89C44.12,22.77,43.83,18.81,43.47,14Z"/>
          <path  fill="none" d="M43.47,14c.36,4.86.65,8.82.93,12.64,4.6,4.3,9.89,5,15.4,3.89,10.72-2.12,21.56-2.42,32.42-2.73,4.55-.13,9.11-.19,13.42.95,4.21,8.83,5.2,21.66,2.65,33.79a39.24,39.24,0,0,1-16.08,5c-7.36.79-14.8.87-22.2,1.28-5.12.29-10.29.25-15.33,1-4.46.7-5.28,2.46-5.41,7.27-.1,3.65,1,7.35-.35,11.62-1.94-.85-4-1.25-5.33-2.4-11-9.12-21.82-18.38-32.52-27.45C16,45.33,34.44,19.58,43.47,14Z"/>
        </svg>
      </router-link>
    </div>
    <div class="for_page__section__text_block">
      <h2>Почему эта игра вам обязательно понравится:</h2>
      <div class="for_page__section__content">
        <ul>
          <li>Посвящена насыщенной студенческой жизни и учёбе в университете</li>
          <li>Идеально подойдет для знакомства в компании, внутри множество миниигр на знакомство и общение</li>
          <li>Отлично подходит и для первого знакомства с настольными играми, и для опытных настольщиков.</li>
          <li>Вам не обязательно быть студентом, чтобы получать удовольствие от игры. Она использует общие принципы и механики, понятные и привычные любым возрастам.</li>
          <li>Школьникам она покажет студенческую жизнь во всём её многообразии, а взрослым позволит вспомнить свои студенческие годы и повеселиться.</li>
          <li>В игре множество шуток и отсылок, но главное здесь - юмор самих игроков. Проводите время с удовольствием!</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'For'
}
</script>

<style scoped>
  .for_page__section{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .for_page__section__content{
    overflow-y: scroll;
    max-height: 600px;
    margin-top: 50px;
  }
  .for_page__section__content::-webkit-scrollbar{
    width: 12px;
  }
  .for_page__section__content::-webkit-scrollbar-track{
    background: #D5D5D5;
    border-radius: 20px;
  }
  .for_page__section__content::-webkit-scrollbar-thumb{
    border: 2px solid #151719;
    height: 12px;
    width: 12px;
    background: #FFFFFF;
    border-radius: 20px;
  }
  .for_page__section__text_block{
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: -20px;
  }
  .for_page__section__text_block > h2{
    font-family: Jost;
    font-size: 36px;
  }
  .for_page__section__content > ul li{
    margin-top: 30px;
    font-size: 30px;
    overflow-wrap: break-word;
    list-style-type: "\1F44D";
    text-indent: 15px;
  }
  .for_page__section__content > ul li:first-of-type{
    margin-top: 0;
  }
  .for_page__section__content > ul{
    padding: 20px 60px;
  }
  .back_arrow{
    display: flex;
    align-self: flex-start;
    justify-self: flex-start;
    margin-left: 70px;
  }
  .back_arrow:hover .link_svg_fill{
    fill: #FFFFFF;
  }
</style>
