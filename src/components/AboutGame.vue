<template>
  <section class="about_game_page__section">
    <h2>Немного игровых моментов:</h2>
    <div class="about_game_page__section__content">
      <ul>
        <li class="adoult_li">Игра рассчитана на 2-6 игроков, 12+.</li>
        <li class="team_li">Игра исключительно командная</li>
        <li class="two_li">Есть два режима игры:</li>
        <li>
          <ul class="podpuncts">
            <li class="podpuncts__child_li">Короткий - приключение на 2-3 часа, вы постараетесь выжить и закончить первые два года учёбы.</li>
            <li class="podpuncts__old_li">Полный - вы сможете полностью посмотреть игру (не для слабонервных). Более спокойное и комфортное общение на 4-5 часов, за которые вы сможете полностью окончить университет.</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutGame'
}
</script>

<style scoped>
  .about_game_page__section{
    width: 70%;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
  }
  .about_game_page__section > h2{
    font-family: Jost;
    font-size: 36px;
  }
  .about_game_page__section__content > ul li{
    margin-top: 30px;
    font-size: 30px;
    overflow-wrap: break-word;
    text-indent: 15px;
  }
  .adoult_li{
    list-style-type: "\1F47E";
  }
  .team_li{
    list-style-type: "\1F46F";
  }
  .two_li{
    list-style-type: "\1F3B2";
  }
  .about_game_page__section__content > ul{
    padding: 20px 60px;
  }
  .podpuncts{
    padding: 0 0 0 70px;
  }
  .podpuncts__child_li{
    list-style-type: "\1F476";
  }
  .podpuncts__old_li{
    list-style-type: "\1F9D4";
  }
</style>
