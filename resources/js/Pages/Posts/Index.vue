<script setup>
import Layout from "../../Layouts/default.vue";
import {router} from "@inertiajs/vue3";
const data =  router.get("api/posts");
// console.log(data)
</script>
<template>
    <Layout>
        <div class="content-wrap">
        
        
        <main class="main-posts-list">
        
        
                <article class="article">
        
                    <div class="article-img-column">
                        <img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post1.jpg" alt="Человек, идущий по берегу">
                    </div>
         
                    <div class="article-text-column">
                        <ul class="tab-list">
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Travel</a>
                            </li>
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Health</a>
                            </li>
                        </ul>
                        <h2 class="article-title">
                            <a class="article-title-link" href="#0">10 мест, ради которых стоит проснуться на рассвете</a>
                        </h2>
                        <time class="article-datetime" datetime="2019-06-10">10 июня 2019</time>    
                        <cite class="article-author">Неизвестный автор</cite>
                        <div class="article-content">
                            <p>Итак, вы в Питере. Раннее утро. Лед с рек и каналов уже ушел, запущены фонтаны города… 
                                Музеи еще закрыты. Что посмотреть?</p>
                        </div>
                    </div>
        
                </article>
                
                <article class="article">
        
                    <div class="article-img-column">
                        <img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post2.jpg" alt="Йога">
                    </div>
         
                    <div class="article-text-column">
                        <ul class="tab-list">
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Health</a>
                            </li>
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Lifestyle</a>
                            </li>
                        </ul>
                        <h2 class="article-title">
                            <a class="article-title-link" href="#0">Йога для начинающих в домашних условиях</a>
                        </h2>
                        <time class="article-datetime" datetime="2019-06-10">10 июня 2019</time>    
                        <cite class="article-author">Неизвестный автор</cite>
                        <div class="article-content">
                            <p>Расскажем, какие упражнения выбрать и как сделать коврик для занятий йогой из того, что можно найти в шкафу.</p>
                        </div>
                    </div>
        
                </article>
                
                <article class="article">
        
                    <div class="article-img-column">
                        <img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post3.jpg" alt="Музыкальный фестиваль">
                    </div>
        
         <div class="article-text-column">
            <ul class="tab-list">
                <li class="tab-item">
                    <a class="tab-link" href="#">Music</a>
                </li>
            </ul>
            <h2 class="article-title">
                <a class="article-title-link" href="#0">Лучшие музыкальные фестивали этого лета</a>
            </h2>
            <time class="article-datetime" datetime="2019-06-10">10 июня 2019</time>    
            <cite class="article-author">Неизвестный автор</cite>
            <div class="article-content">
                <p>Лето на носу, а с ним и музыкальные фестивали. На каком же из них вы разобьёте свою палатку?</p>
                <p>Мы составили список лучших летних фестивалей по всему миру.</p>
            </div>
         </div>
        
                </article>
                
                <article class="article">
        
                    <div class="article-img-column">
                        <img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post4.jpg" alt="Стол с едой">
                    </div>
        
                    <div class="article-text-column">
                        <ul class="tab-list">
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Lifestyle</a>
                            </li>
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Food</a>
                            </li>
                        </ul>
                        <h2 class="article-title">
                            <a  class="article-title-link" href="#0">Наукоёмкий подход к кулинарии</a>
                        </h2>
                        <time class="article-datetime" datetime="2019-06-10">10 июня 2019</time>    
                        <cite class="article-author">Неизвестный автор</cite>
                        <div class="article-content">
                            <p>Узнаем основы проектирования новых пищевых и около-пищевых опытов, вскроем физику, химию и микробиологию еды.</p>
                        </div>
                    </div>
        
                </article>
                
                <article class="article">
                    <div class="article-img-column">
                        <img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post5.jpg" alt="Подушка с надписью 'Hang out spot'">
                    </div>
        
                    <div class="article-text-column">
                        <ul class="tab-list">
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Lifestyle</a>
                            </li>
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Interior</a>
                            </li>
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Art</a>
                            </li>
                        </ul>
                        <h2 class="article-title">
                            <a class="article-title-link" href="#0">Делаем модные принты на подушках для интерьера</a>
                        </h2>
                        <time class="article-datetime" datetime="2019-06-10">10 июня 2019</time>    
                        <cite class="article-author">Неизвестный автор</cite>
                        <div class="article-content">
                            <p>Подушки для дивана целесообразнее заказать в съемных чехлах на молнии, 
                                если потребуется чистка подушек, проще снять чехлы, чем везти подушку в химчистку</p>
                        </div>
                    </div>
        
                </article>
                
                <article class="article">
                    <div class="article-img-column">
                        <img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post6.jpg" alt="Люди на вершине горы">
                    </div>
        
                    <div class="article-text-column">
                        <ul class="tab-list">
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Travel</a>
                            </li>
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Lifestyle</a>
                            </li>
                        </ul>
                        <h2 class="article-title">
                            <a class="article-title-link" href="#">Как первый раз отправиться в горы?</a>
                        </h2>
                        <time class="article-datetime" datetime="2019-06-10">10 июня 2019</time>    
                        <cite class="article-author">Неизвестный автор</cite>
                        <div class="article-content">
                            <p>Для начала нужно определиться, в каком формате пройдёт ваше путешествие. 
                                Это зависит от многих факторов, не только от ваших желаний и интересов.</p>
                        </div>
                    </div>
         
                </article>
                
                <article class="article">
                    <div class="article-img-column">
                        <img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post4.jpg" alt="Стол с едой">
                    </div>
                    <div class="article-text-column">
                        <ul class="tab-list">
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Lifestyle</a>
                            </li>
                            <li class="tab-item">
                                <a class="tab-link" href="#0">Food</a>
                            </li>
                        </ul>
                        <h2 class="article-title">
                            <a  class="article-title-link" href="#0">Наукоёмкий подход к кулинарии</a>
                        </h2>
                        <time class="article-datetime" datetime="2019-06-10">10 июня 2019</time>    
                        <cite class="article-author">Неизвестный автор</cite>
                        <div class="article-content">
                            <p>Узнаем основы проектирования новых пищевых и около-пищевых опытов, вскроем физику, химию и микробиологию еды.</p>
                        </div>
                    </div>
        
                </article>
        
        
        </main>
        
        
        <aside class="sidebar">
        
            <section class="new-posts">
                <h2 class="sidebar-title">Новые посты</h2>
        
                <div class="new-posts-list">
        
                    <article class="new-posts-article">
                        <div class="post-img-column">
                            <img class="new-posts-image" src="https://netology-code.github.io/html-2-diploma/sources/images/2.jpg" alt="Человек, идущий по берегу">
                        </div>
        
                        <div class="post-text-column">
                            <time class="new-posts-datetime" datetime="2019-06-14">14 июня 2019</time>  
                            <h3 class="new-posts-title">
                              <a class="new-posts-link" href="#0">10 мест, ради которых стоит проснуться</a>
                              </h3>
                        </div>
                    </article>
            
                    <article class="new-posts-article">
                        <div class="post-img-column">
                            <img class="new-posts-image" src="https://netology-code.github.io/html-2-diploma/sources/images/151.jpg" alt="Йога">
                        </div>
        <div class="post-text-column">
            <time class="new-posts-datetime" datetime="2019-06-14">14 июня 2019</time>  
            <h3 class="new-posts-title">
              <a class="new-posts-link" href="#0">Йога для домашних</a>
              </h3>
        </div>
        
                    </article>
            
                    <article class="new-posts-article">
                        <div class="post-img-column">
                            <img class="new-posts-image" src="https://netology-code.github.io/html-2-diploma/sources/images/45.jpg" alt="Балкон">
                        </div>
                          <div class="post-text-column">
                            <time class="new-posts-datetime" datetime="2019-06-14">14 июня 2019</time>  
                            <h3 class="new-posts-title">
                              <a class="new-posts-link" href="#0">Как мы превратили классное место в балкон</a>
                              </h3>
                          </div>
                    </article>
            
                    <article class="new-posts-article">
                        <div class="post-img-column">
                            <img class="new-posts-image" src="https://netology-code.github.io/html-2-diploma/sources/images/501.jpg" alt="Стол с едой">
                        </div>
                        <div class="post-text-column">
                            <time class="new-posts-datetime" datetime="2019-06-14">14 июня 2019</time>  
                            <h3 class="new-posts-title">
                              <a class="new-posts-link" href="#0">Кулинарный подход к науке</a> 
                              </h3>
                        </div>
        
                    </article>
            
                    
                    <article class="new-posts-article">
                        <div class="post-img-column">
                            <img class="new-posts-image" src="https://netology-code.github.io/html-2-diploma/sources/images/7.jpg" alt="Прически">
                        </div>
                        <div class="post-text-column">
                            <time class="new-posts-datetime" datetime="2019-06-14">14 июня 2019</time>  
                            <h3 class="new-posts-title">
                              <a class="new-posts-link" href="#0">Лучшие прически для распущенных волос</a>                        
                              </h3>
                        </div>
        
                    </article>
                </div>
        
                <form class="search">
                    <label class="visually-hidden" for="search">Поиск по блогу</label>
                        <input id="search" type="search" class="search-field" name="search" placeholder="Найти..." required>
                        <button class="search-button"><span class="visually-hidden">Найти</span></button>
              </form>
            </section>
        
            <section class="subscription">
                <h2 class="sidebar-title">Рассылка</h2>
        
                <form class="subscription-form">
                        <label class="visually-hidden" for="email">Подписаться</label>
                            <input id="email" type="email" class="subscription-field" name="email"
                                placeholder="Ваш email-адрес" required>
                                <button class="subscription-button">Подписаться</button>
                </form>
            </section>
        
            <section class="tags">
              <h2 class="sidebar-title">Теги</h2>
                <ul class="tags-list">
                    <li class="tags-item">
                        <a class="tags-link" href="#0">fashion</a>
                    </li>
                    <li class="tags-item">
                        <a class="tags-link" href="#0">music</a>
                    </li>
                    <li class="tags-item">
                        <a class="tags-link" href="#0">lifestyle</a>
                    </li>
                    <li class="tags-item">
                        <a class="tags-link" href="#0">art</a>
                    </li>
                    <li class="tags-item">
                        <a class="tags-link" href="#0">interior</a>
                    </li>
                    <li class="tags-item">
                        <a class="tags-link" href="#0">travel</a>
                    </li>
                    <li class="tags-item">
                        <a class="tags-link" href="#0">food</a>
                    </li>
                    <li class="tags-item">
                        <a class="tags-link" href="#0">health</a>
                    </li>
                </ul>
            </section>
        
            <section class="categories">
              <h2 class="sidebar-title">Темы</h2>
                <ul class="category-list">
                    <li class="category-item">
                        <a class="category-link" href="#0">Красота<sup class="number">12</sup></a>
                    </li>
                    <li class="category-item">
                        <a class="category-link" href="#0">Здоровье<sup class="number">4</sup></a>
                    </li>
                    <li class="category-item">
                        <a class="category-link" href="#0">Образ жизни<sup class="number">145</sup></a>
                    </li>
                    <li class="category-item">
                      <a class="category-link" href="#0">Музыка<sup class="number">28</sup></a>
                    </li>
                    <li class="category-item">
                        <a class="category-link" href="#0">Спорт<sup class="number">62</sup></a>
                    </li>
                    <li class="category-item">
                        <a class="category-link" href="#0">Йога<sup class="number">8</sup></a>
                    </li>
                </ul>
            </section>
        
        </aside>
        </div>
    </Layout>
</template>
<style scoped>
@font-face {
    font-family: "Open Sans";
    src:url(https://netology-code.github.io/html-2-diploma/sources/fonts/OpenSans-Regular.woff);
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Open Sans";
    src:url(https://netology-code.github.io/html-2-diploma/sources/fonts/OpenSans-Bold.woff);
    font-weight: bold;
    font-style: normal;
  }
  
  body {
    min-width: 1200px;
    margin: 0;
    font-family: "Open Sans", "Arial", sans-serif;
    font-size: 14px;
    color: black;
    background-color: white;
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  img {
    vertical-align: middle;
  }
  
  
  /*СТАТЬИ*/
  
  .content-wrap {
    width: 1170px;
    margin: 0 auto;
    padding: 61px 0 64px 0;
    display: flex;
    justify-content: space-between;
  }
  
  .article {
    display: flex;
  }
  
  .article:not(:last-child) {
    margin-bottom: 60px;
  }
  
  .article-text-column {
    width: 367px;
    padding-left: 30px;
  }
  
  .tab-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .tab-link {
    margin-right: 20px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    color: #b59f5b;
  }
  
  .tab-link:hover {
    text-decoration: underline;
    text-decoration-color: rgba(181, 159, 91, 0.4);
  }
  
  .article-title {
    width: 330px;
    margin: 0;
    padding-bottom: 15px;
    text-transform: uppercase;
    font-size: 20px;
  }
  
  .article-title-link {
    text-decoration: none;
    color: #000;
  }
  
  .article-title-link:hover {
    color: #b59f5b;
  }
  
  .article-datetime {
    margin-right: 5px;
    font-size: 12px;
    line-height: 40px;
    color: #888888;
  }
  
  .article-author {
    font-weight: bold;
    font-style: normal;
    font-size: 12px;
    line-height: 40px;
    color: black;
  }
  
  /* КОНТЕНТ СБОКУ */
  .sidebar {
    width: 275px;
  }
  
  .sidebar-title {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
    text-align: center;
  }
  
  .sidebar-title::after {
    content: "";
    display: block;
    width: 65px;
    height: 3px;
    margin: 5px auto;
    background-color: rgba(181, 159, 91, 0.4);
  }
  
  .new-posts-list {
    margin: 20px 0 20px 0;
  }
  
  .new-posts-article {
    display: flex;
    margin-bottom: 22px;
  }
  
  .post-img-column {
    padding-top: 5px;
  }
  
  .post-text-column {
    margin: 0;
    padding-left: 18px;
  }
  
  .new-posts-datetime {
    font-size: 12px;
    color: #888888;
  }
  
  .new-posts-title {
    margin:0;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .new-posts-link {
    text-decoration: none;
    color: #000;
    line-height: 18px;
  }
  
  .new-posts-link:hover {
    color: #b59f5b;
  }
  
  .search {
    padding-bottom: 55px;
  }
  
  .search-field {
    box-sizing: border-box;
    padding-left: 15px;
    width: 220px;
    height: 48px;
    vertical-align: middle;
    outline: none;
    border: transparent 1px solid;
    background-color: #f4f7f6;
  }
  
  .search-field:focus {
    border: 1px solid #b59f5b;
  }
  
  .search-button {
    width: 48px;
    height: 48px;
    background-color: #b59f5b;
    border: none;
    background-image:url("https://netology-code.github.io/html-2-diploma/sources/images/search.svg");
    background-repeat: no-repeat;
    background-size: 18px;
    background-position: center center;
    vertical-align: middle;
    transition: color 0.3s, background-color 0.3s;
  }
  
  .search-button:hover {
    background-color: #000;
  }
  
  .subscription-field {
    width: 272px;
    height: 48px;
    box-sizing: border-box;
    margin-top: 25px;
    padding-left: 15px;
    vertical-align: middle;
    outline: none;
    border: transparent 1px solid;
    background-color: #f4f7f6;
  }
  
  .subscription-field:focus {
    border: 1px solid #b59f5b;
  }
  
  .subscription-button {
    width: 272px;
    height: 48px;
    margin: 17px 0 62px 0;
    background-color: #b59f5b;
    color: white;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    transition: color 0.3s, background-color 0.3s;
  }
  
  .subscription-button:hover {
    background-color: #000;  
  }
  
  .tags-list {
    display: flex;
    flex-wrap: wrap;
    padding: 22px 0 60px 0;
  }
  
  .tags-item {
    padding: 0 10px 7px 0;
  }
  
  .tags-link {
    display: inline-block;
    padding:5px 10px;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    border: 3px solid #eeeeee;
  }
  
  .tags-link:hover {
    border: 3px solid #b59f5b;
  }
  
  .category-item {
    border-bottom: 1px solid #eeeeee;
  }
  
  .category-link {
    font-weight: bold;
    line-height: 47px;
    text-decoration: none;
    color: #000;
  }
  
  .category-link:hover {
    color: #b59f5b;
  }
  
  .number {
    margin-left: 5px;
    font-size: 12px;
    color: #b59f5b;
  }
  
</style>
