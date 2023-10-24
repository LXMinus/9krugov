<template>
  <section class="for_page__section">
    <h2>Почему эта игра вам обязательно понравится:</h2>
    <div class="for_page__section__content">
      <ul>
        <li>Посвящена насыщенной студенческой жизни и учёбе в университете</li>
        <li>Идеально подойдет для знакомства в компании, внутри множество миниигр на общение</li>
        <li>Отлично подходит для первого знакомства с настольными играми</li>
        <li>Внутри множество шуток и отсылок, но главное здесь - юмор самих игроков. Проводите время с удовольствием!</li>
      </ul>
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
    width:50%;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
  }
  .for_page__section > h2{
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
  .for_page__section__content > ul{
    padding: 20px 60px;
  }
</style>
