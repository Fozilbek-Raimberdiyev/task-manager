<script setup>
import Layout from "../../Layouts/default.vue";
import "https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js";
import "https://code.jquery.com/jquery-3.7.0.js";
import "https://kit.fontawesome.com/ebbc1aa60f.js";
import "https://unpkg.com/scrollreveal";
import {onMounted} from "vue";
onMounted(() => {


ScrollReveal({ reset: true });
        ScrollReveal().reveal('.banner', { easing:"ease-in", delay: 50, origin: "top" });
        ScrollReveal().reveal('.news', { easing: "ease-in", delay: 200});
        ScrollReveal().reveal('.events', { easing: "ease-in", delay: 200});
        ScrollReveal().reveal('.jobs', { easing: "ease-in", delay: 200});
        ScrollReveal().reveal('.register', { easing: "ease-in", delay: 200});
})
</script>
<template>
    <Layout>
        <!--HOME PAGE-->
        <div class="banner" id="banner">
            <swiper-container class="mySwiper" navigation="true">
                <swiper-slide>
                    <div class="imgbx">
                        <a href="#news"><img src="https://i.postimg.cc/dtLWZmwx/pexels-cottonbro-studio-9656754.jpg"
                                alt=""></a>
                    </div>
                    <div class="text">
                        <h1>NEWS FEEDS</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="imgbx">
                        <a href="#"><img src="https://i.postimg.cc/L8N4npDS/pexels-miguel-acosta-1259626.jpg" alt=""></a>
                    </div>
                    <div class="text">
                        <h1>UPCOMING EVENTS</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="imgbx">
                        <a href="#"><img src="https://i.postimg.cc/8k27SNKn/pexels-arthouse-studio-4413745.jpg" alt=""></a>
                    </div>
                    <div class="text">
                        <h1>AVAILABLE JOBS</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.</p>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
        <!--NEWS SECTION-->
        <section class="news" id="news">
            <div class="titletext">
                <h1>News <span>Feed</span></h1>
            </div>
            <div class="container cards_container">
                <div class="card">
                  <div class="card__header">
                    <img src="https://i.postimg.cc/gkCk3bbx/pexels-cottonbro-studio-3944425.jpg" alt="card__image" class="card__image" width="600">
                  </div>
                  <div class="card__body">
                    <span class="tag">News</span>
                    <h4>Trending Tech Products</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                  </div>
                  <div class="card__footer">
                    <div class="user">
                      <img src="https://i.pravatar.cc/40" alt="user__image" class="user__image">
                      <div class="user__info">
                        <h5>User 1</h5>
                        <small>2h ago</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card__header">
                    <img src="https://i.postimg.cc/x1LjRp9t/pexels-cottonbro-studio-3944454.jpg" alt="card__image" class="card__image" width="600">
                  </div>
                  <div class="card__body">
                    <span class="tag">News</span>
                    <h4>Newly Introduced AI Model</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                  </div>
                  <div class="card__footer">
                    <div class="user">
                      <img src="https://i.pravatar.cc/40?img=9" alt="user__image" class="user__image">
                      <div class="user__info">
                        <h5>User 2</h5>
                        <small>Yesterday</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card__header">
                    <img src="https://i.postimg.cc/J7dh4BTc/pexels-cottonbro-studio-3944460.jpg" alt="card__image" class="card__image" width="600">
                  </div>
                  <div class="card__body">
                    <span class="tag">News</span>
                    <h4>Recent Trends In IT</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                  </div>
                  <div class="card__footer">
                    <div class="user">
                      <img src="https://i.pravatar.cc/40?img=5" alt="user__image" class="user__image">
                      <div class="user__info">
                        <h5>User 3</h5>
                        <small>2d ago</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                    <div class="card__header">
                      <img src="https://i.postimg.cc/3N6rLPyb/pexels-negative-space-177557.jpg" alt="card__image" class="card__image" width="600">
                    </div>
                    <div class="card__body">
                      <span class="tag">News</span>
                      <h4>Top Grossing Video Games</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div class="card__footer">
                      <div class="user">
                        <img src="https://i.pravatar.cc/40?img=13" alt="user__image" class="user__image">
                        <div class="user__info">
                          <h5>User 4</h5>
                          <small>2h ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card__header">
                      <img src="https://i.postimg.cc/ydRz1kWn/pexels-andrea-piacquadio-3760778.jpg" alt="card__image" class="card__image" width="600">
                    </div>
                    <div class="card__body">
                      <span class="tag">News</span>
                      <h4>Market Crises</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div class="card__footer">
                      <div class="user">
                        <img src="https://i.pravatar.cc/40?img=23" alt="user__image" class="user__image">
                        <div class="user__info">
                          <h5>User 5</h5>
                          <small>2h ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card__header">
                      <img src="https://i.postimg.cc/qBc91fKt/pexels-ono-kosuki-6000154.jpg" alt="card__image" class="card__image" width="600">
                    </div>
                    <div class="card__body">
                      <span class="tag tag-blue">News</span>
                      <h4>What's new in 2022 Tech</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div class="card__footer">
                      <div class="user">
                        <img src="https://i.pravatar.cc/40?img=21" alt="user__image" class="user__image">
                        <div class="user__info">
                          <h5>User 6</h5>
                          <small>2h ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
        </section>
        <!--EVENTS SECTION-->
        <section class="events" id="events">
            <div class="titletext">
                <h1>Upcoming <span>Events</span></h1>
            </div>
            <div class="container">
                <div class="card">
                  <div class="card__header">
                    <img src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card__image" class="card__image" width="600">
                  </div>
                  <div class="card__body">
                    <span class="tag">Events</span>
                    <h4>Conference Meeting</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                  </div>
                  <div class="card__footer">
                    <div class="user">
                      <img src="https://i.pravatar.cc/40?img=32" alt="user__image" class="user__image">
                      <div class="user__info">
                        <h5>User 1</h5>
                        <small>2h ago</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card__header">
                    <img src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card__image" class="card__image" width="600">
                  </div>
                  <div class="card__body">
                    <span class="tag">Events</span>
                    <h4>Talk Show Shoot</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                  </div>
                  <div class="card__footer">
                    <div class="user">
                      <img src="https://i.pravatar.cc/40?img=31" alt="user__image" class="user__image">
                      <div class="user__info">
                        <h5>User 2</h5>
                        <small>Yesterday</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card__header">
                    <img src="https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card__image" class="card__image" width="600">
                  </div>
                  <div class="card__body">
                    <span class="tag">Events</span>
                    <h4>Farewell Function</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                  </div>
                  <div class="card__footer">
                    <div class="user">
                      <img src="https://i.pravatar.cc/40?img=30" alt="user__image" class="user__image">
                      <div class="user__info">
                        <h5>User 3</h5>
                        <small>2d ago</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                    <div class="card__header">
                      <img src="https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card__image" class="card__image" width="600">
                    </div>
                    <div class="card__body">
                      <span class="tag">Events</span>
                      <h4>DJ Night</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div class="card__footer">
                      <div class="user">
                        <img src="https://i.pravatar.cc/40?img=40" alt="user__image" class="user__image">
                        <div class="user__info">
                          <h5>User 4</h5>
                          <small>2h ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card__header">
                      <img src="https://images.pexels.com/photos/2608512/pexels-photo-2608512.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card__image" class="card__image" width="600">
                    </div>
                    <div class="card__body">
                      <span class="tag">Events</span>
                      <h4>Talk Show</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div class="card__footer">
                      <div class="user">
                        <img src="https://i.pravatar.cc/40?img=50" alt="user__image" class="user__image">
                        <div class="user__info">
                          <h5>User 5</h5>
                          <small>2h ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card__header">
                      <img src="https://images.pexels.com/photos/2774572/pexels-photo-2774572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="card__image" class="card__image" width="600">
                    </div>
                    <div class="card__body">
                      <span class="tag tag-blue">Events</span>
                      <h4>Motivational Talks</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div class="card__footer">
                      <div class="user">
                        <img src="https://i.pravatar.cc/40?img=51" alt="user__image" class="user__image">
                        <div class="user__info">
                          <h5>User 6</h5>
                          <small>2h ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
        </section>
         <!--JOBS SECTION-->
        <section class="jobs" id="jobs">
            <div class="titletext">
                <h1>Available <span>Jobs</span></h1>
            </div>
            <div class="container">
                <div class="card">
                  <div class="card__header">
                    <img src="https://images.pexels.com/photos/3862370/pexels-photo-3862370.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card__image" class="card__image" width="600">
                  </div>
                  <div class="card__body">
                    <span class="tag">Jobs</span>
                    <h4>Civil Engineers</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                  </div>
                  <div class="card__footer">
                    <div class="user">
                      <img src="https://i.pravatar.cc/40?img=52" alt="user__image" class="user__image">
                      <div class="user__info">
                        <h5>User 1</h5>
                        <small>2h ago</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card__header">
                    <img src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card__image" class="card__image" width="600">
                  </div>
                  <div class="card__body">
                    <span class="tag">Jobs</span>
                    <h4>Data Analyst</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                  </div>
                  <div class="card__footer">
                    <div class="user">
                      <img src="https://i.pravatar.cc/40?img=53" alt="user__image" class="user__image">
                      <div class="user__info">
                        <h5>User 2</h5>
                        <small>Yesterday</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card__header">
                    <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card__image" class="card__image" width="600">
                  </div>
                  <div class="card__body">
                    <span class="tag">Jobs</span>
                    <h4>Web Designer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                  </div>
                  <div class="card__footer">
                    <div class="user">
                      <img src="https://i.pravatar.cc/40?img=54" alt="user__image" class="user__image">
                      <div class="user__info">
                        <h5>User 3</h5>
                        <small>2d ago</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                    <div class="card__header">
                      <img src="https://images.pexels.com/photos/7658352/pexels-photo-7658352.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card__image" class="card__image" width="600">
                    </div>
                    <div class="card__body">
                      <span class="tag">Jobs</span>
                      <h4>Charted Accountant</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div class="card__footer">
                      <div class="user">
                        <img src="https://i.pravatar.cc/40?img=55" alt="user__image" class="user__image">
                        <div class="user__info">
                          <h5>User 4</h5>
                          <small>2h ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card__header">
                      <img src="https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card__image" class="card__image" width="600">
                    </div>
                    <div class="card__body">
                      <span class="tag">Jobs</span>
                      <h4>Company Secretary</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div class="card__footer">
                      <div class="user">
                        <img src="https://i.pravatar.cc/40?img=56" alt="user__image" class="user__image">
                        <div class="user__info">
                          <h5>User 5</h5>
                          <small>2h ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card__header">
                      <img src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card__image" class="card__image" width="600">
                    </div>
                    <div class="card__body">
                      <span class="tag tag-blue">Jobs</span>
                      <h4>Data Engineer</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div class="card__footer">
                      <div class="user">
                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image">
                        <div class="user__info">
                          <h5>User 6</h5>
                          <small>2h ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
        </section>
    </Layout>
</template>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
:root {
    --primary: #111;
    --secondary: #A6D1E6;
    --bg: #F0F8FF;
    --border: #aaa;
}
* 
{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth ;
}
.top
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    padding: 0 50px;
    font-size: 1.5em;
}
.top .links a
{
    text-decoration: none;
    color: var(--primary);
    transition: .5s;
}
.top .links a:hover
{
    color: var(--secondary);
}
.top .head
{
    font-weight: 600;
}
.top .head span
{
    color: var(--secondary);
}
.top .search i
{
    transition: .5s;
    padding-right: 10px;
}
.top .search i:hover
{
    color: var(--secondary);
    cursor: pointer;
}
.top .search .hamburger
{
    display: none;
}
.header
{
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 1000;
    background: #fff;
}
.header .navigation
{
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    position: relative;
}
.header .navigation li a
{
    text-decoration: none;
    color: var(--primary);
    padding: 5px 40px;
    transition: .3s ease-in-out;
    border-bottom: 2px solid #fff;
    left: 0;
}
.header .navigation li a:hover
{
    border-bottom: 2px solid var(--secondary);
}
.banner
{
    margin: 20px 0px;   
}
.banner swiper-container 
{
    width: 100%;
    height: 80vh;
    position: absolute;
    left: 0;
    right: 0;
  }

swiper-slide 
  {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

swiper-slide .imgbx img 
  {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%)
  }
swiper-slide .text
  {
    position: absolute;
    color: #fff;
    top: 70%;
  }
section
  {
    padding: 40px 30px;
  }
.news
{
    position: relative;
   top: 50rem;
    text-align: center;
}
.news .titletext
{
    text-align: center;
    font-size: 2em;
    padding-bottom: 40px;
}
.news .titletext span
{
    color: var(--secondary);
}
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-block: 2rem;
    gap: 2rem;
    background: var(--bg);
    border-radius: 20px;
    padding: 50px 0px;
  }
  
  img {
    max-width: 100%;
    object-fit: cover;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: clamp(20rem, calc(20rem + 2vw), 22rem);
    overflow: hidden;
    box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    background: #fff;
  }
  
  .card__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  
  
  .tag {
    align-self: flex-start;
    padding: .25em .75em;
    border-radius: 1em;
    font-size: .75rem;
    background: var(--secondary);
    color: #fff;
  }
  
  .tag + .tag {
    margin-left: .5em;
  }
  
  .card__body h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  
  .card__footer {
    display: flex;
    padding: 1rem;
    margin-top: auto;
  }
  
  .user {
    display: flex;
    gap: .5rem;
  }
  
  .user__image {
    border-radius: 50%;
  }
  
  .user__info > small {
    color: #666;
  }

.events
{
    text-align: center;
}
.events .titletext
{
    text-align: center;
    font-size: 2em;
    padding-bottom: 40px;
}
.events .titletext span
{
    color: var(--secondary);
}
.jobs
{
    text-align: center;
}
.jobs .titletext
{
    text-align: center;
    font-size: 2em;
    padding-bottom: 40px;
}
.jobs .titletext span
{
    color: var(--secondary);
}   
.register
{
    text-align: center;
    border-top: 1px solid var(--border);
}
.register .titletext
{
    text-align: center;
    font-size: 2em;
    padding-bottom: 40px;
}
.register .titletext span
{
    color: var(--secondary);
}  
.form
{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    background: var(--secondary);
    padding: 30px;
    width: 700px;
    margin: auto;
    border-radius: 20px;
    height: auto;
}
.form .formimg img
{
    width: 350px;
    border-radius: 25px;
}
.form .formcontent
{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}
.form .formcontent input
{
    border: none;
    padding: 10px 30px;
    border-radius: 20px;
}
.strip
{
    background: var(--secondary);
    width: 100%;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.strip h1
{
    color: #fff;
    font-weight: 300;
}
.strip .icons a{
    color: #fff;
}
.alert {
    position: fixed;
    top: 5%;
    right: 2%;
    background: var(--secondary);
    color: #fff;
    font-weight: 800;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    padding: 20px;
    width: 300px;
    height: 100vh;
    border-radius: 10px;
    transform: translateX(150%);
    transition: transform 0.3s ease-in-out;
    z-index: 2;
}
.alert .navigation1
{
    display: flex;
    flex-direction: column;
    gap: 70px;
    list-style: none;
    text-align: center;
}
.alert .navigation1 li a
{
    text-decoration: none;
    color: #fff;
}
.alert p {
    margin: 30px;
    letter-spacing: 1px;
}

.alert i {
    display: flex;
    justify-content: flex-end;
    font-size: 30px;
    cursor: pointer;
    color: #fff;
}
.register .form .btn
{
    margin-top: 10px;
    border: none;
    padding: 10px 30px;
    background: #fff;
    border-radius: 25px;
    cursor: pointer;
    transition: .5s;
}

@media(max-width: 911px){
    .header
    {
        display: none;
    }
    .top .search .hamburger
    {
        display: block;
    }   
    .register .form
    {
        margin: 0 0;
    }
    swiper-slide .imgbx img {
        height: 100vh;
    }
    .top .search{
        display: flex;
        justify-content: space-between;
    }
    .top
    {
        position: sticky;
        top: 0;
        z-index: 2;
        background: #fff;
        width: 100%;
    }
    .banner
    {
    margin: 0px 0px;   
    }
    .form
    {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
