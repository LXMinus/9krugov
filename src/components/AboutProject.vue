<template>
  <section class="about_project_page__section">
    <h2>Информация о проекте:</h2>
    <div class="about_project_page__section__content">
      <ul>
        <li>Изначально создавался для адаптации первокурсников к среде университета, их знакомства и общения.</li>
        <li>Можно узнать о различных студ. мероприятиях, форумах, объединениях и активностях.</li>
        <li>Наш главный лозунг: "Учиться должно быть весело!"</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  .about_project_page__section{
    width: 50%;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
  }
  .about_project_page__section > h2{
    font-family: Jost;
    font-size: 36px;
  }
  .about_project_page__section__content > ul li{
    margin-top: 30px;
    font-size: 30px;
    overflow-wrap: break-word;
    list-style-type: "\1F44C";
    text-indent: 15px;
  }
  .about_project_page__section__content > ul{
    padding: 20px 60px;
  }
</style>
