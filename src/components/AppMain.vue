<script>
import { store } from '../store';

import GetStarted from './GetStarted.vue';
import BusinessHero from './BusinessHero.vue';
import ApproachCard from './ApproachCard.vue';
import HelpCard from './HelpCard.vue';
import OffersCard from './OffersCard.vue';
import FaqComponent from './FaqComponent.vue';
import SingleEvent from './SingleEvent.vue';
import SingleReview from './SingleReview.vue';

export default {
  name: "AppMain",
  components: {
    GetStarted,
    BusinessHero,
    ApproachCard,
    HelpCard,
    OffersCard,
    FaqComponent,
    SingleEvent,
    SingleReview
  },
  data() {
    return {
      store
    }
  }
}

</script>

<template>

  <section id="site_banner">

    <div class="container banner">

      <div class="row align-items-center justify-content-between">

        <GetStarted />

        <BusinessHero />

      </div>

    </div>

  </section>

  <section id="dream_together" class="p-3">

    <div class="container">

      <div class="titles p-3 text-center">

        <h5 class="mb-3 dream">Let's Dream Big Together</h5>

        <h4>We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply
          executive coaching in the new age fo digitalization.</h4>

      </div>

      <div class="row">

        <ApproachCard v-for="card in store.approach" :card="card" />

      </div>

      <div class="ms_buttons text-center">

        <button type="button" class="btn learn">Learn more</button>

        <button type="button" class="btn start">Get started today</button>

      </div>


    </div>
  </section>

  <section id="help">

    <div class="container p-3">

      <div class="titles p-3 text-center">

        <h5 class="mb-3 dream">Let's Dream Big Together</h5>

        <h1>Explore How can i help you</h1>

      </div>

      <div class="row">

        <HelpCard v-for="help in store.helpCards" :help="help" />

      </div>

    </div>

  </section>

  <section id="offers">

    <div class="container p-3">

      <div class="titles p-3 text-center">

        <h5 class="mb-3 dream">Let's Dream Big Together</h5>

        <h1>Explore How can i help you</h1>

      </div>

      <div class="row">

        <OffersCard v-for="offer in store.offers" :offer="offer" />

      </div>

      <p class="courses text-center">Take the control of their life back and start doing things to make their dream
        come true. <a href="#"><strong>View all courses <span>&rightarrow;</span></strong></a></p>

    </div>

  </section>

  <section id="youtube">

    <div class="container position-relative">

      <img src="../assets/img/maxcoach-shape-07.png" alt="" class="position-absolute bottom-0">

      <div class="row align-items-center p-3">

        <div class="col-6">

          <div class="img_container position-relative">
            <img :src="store.getImagePath(store.thumbYoutube)" alt="" class="img-fluid">
            <img :src="store.getImagePath(store.iconYoutube)" alt=""
              class="position-absolute top-50 start-50 translate-middle">
          </div>

        </div>

        <div class="col-6 worldmap">

          <div class="col-8">
            <h2>To Thrive in Business Today, You will need a Good Plan </h2>

            <div class="faq text-white">
              <FaqComponent v-for="question in store.faq" :questions="question" />
            </div>
          </div>

        </div>
      </div>

    </div>

  </section>

  <section id="events">

    <div class="container">

      <div class="titles p-3 text-center">

        <h5 class="mb-3 section_title">Wanna transform your life?</h5>

        <h1>Upcoming events</h1>

      </div>


      <div class="row">

        <SingleEvent v-for="event in store.events" :event="event" />

      </div>

      <p class="all_events text-center">Excited about our events? <a href="#"><strong>View all events
            <span>&rightarrow;</span></strong></a></p>

    </div>

  </section>

  <section id="reviews" class="p-3">

    <div class="container">

      <div class="titles p-3 text-center">

        <h5 class="mb-3 section_title">People are praising MaxCoach</h5>

        <h1>What make they love us?</h1>

      </div>

      <div class="row justify-content-center p-3">

        <div class="col-6">

          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
              <SingleReview v-for="(review, index) in store.reviews" :review="review" :index="index" />
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  </section>

  <section id="subscribe">

    <div class="container">

      <div class="row">

        <div class="col-3 position-relative">

          <div id="circle" class="position-absolute translate-middle top-50 start-50"></div>

        </div>

        <div class="col-6">

          <div class="titles p-3 text-center">

            <h1>Subscribe <span id="newsletter">Newsletter</span></h1>

            <p>Enter your email address to register to our newsletter subscription delivered on a regular basis!</p>

          </div>

          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enter your email" aria-label="Recipient's username"
              aria-describedby="button-addon2">
            <button class="btn" type="button" id="button-addon2">Subscribe</button>
          </div>

        </div>

        <div class="col-3 position-relative semi_circle">

          <img src="../assets/img/maxcoach-shape-02.png" alt=""
            class="position-absolute translate-middle top-50 start-50">
        </div>
      </div>


    </div>


  </section>

</template>

<style lang="scss" scoped>

</style>