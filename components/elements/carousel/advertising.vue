<template>
  <div>
    <div class="card-container p-4">
      <div class="slider"  @touchstart="handleTouchStart" @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
        <button class="arrow--left" @click="slideRight">
          <img src="../../../assets/icons/arrow-left-circle.svg" alt="Previous" />
        </button>
        <div class="slides" @click="goAdvertising">
          <div v-for="(card, index) in news" :key="index" class="slide"
            :style="{ transform: `translateX(${(index - curSlide) * 110}%)` }">
            <advertisingCard :title="card.title" :text="card.description" :img-src="card.imgSrc" :img-alt="card.imgAlt" />
           
          </div>
        </div>
        <button class="arrow--right" @click="slideLeft">
          <img src="../../../assets/icons/arrow-right-circle.svg" alt="Next" />
        </button>
      </div>
      <div class="dots-container">
        <span v-for="(slide, index) in slides" :key="index" class="dot" :class="{ 'active': index === curSlide }"
          @click="goToSlide(index)"></span>
      </div>
    </div>
  </div>
</template>

<script>
import advertisingCard from '../cards/advertisingCard.vue';

export default {
  components: {
    advertisingCard
  },
  data() {
    return {
      slides: Array.from({ length: 6 }), // Adjust the length as per your requirements
      maxSlide: 8, // Change this if needed
      curSlide: 0,
      touchStartX: null,
      touchEndX: null,
      // cards: [
      //   {
      //     title: "نام آگهی",
      //     imgSrc: "https://picsum.photos/600/300/?image=25",
      //     imgAlt: "Image 1",
      //     buttonLink: "#",
      //     buttonText: "مشاهده آگهی",
      //     description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      //   },
      //   {
      //     title: "نام آگهی",
      //     imgSrc: "https://picsum.photos/600/300/?image=26",
      //     imgAlt: "Image 2",
      //     buttonLink: "#",
      //     buttonText: "مشاهده آگهی",
      //     description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      //   },
      //   {
      //     title: "نام آگهی",
      //     imgSrc: "https://picsum.photos/600/300/?image=27",
      //     imgAlt: "Image 2",
      //     buttonLink: "#",
      //     buttonText: "مشاهده آگهی",
      //     description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      //   },
      //   {
      //     title: "نام آگهی",
      //     imgSrc: "https://picsum.photos/600/300/?image=28",
      //     imgAlt: "Image 2",
      //     buttonLink: "#",
      //     buttonText: "مشاهده آگهی",
      //     description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      //   },
      //   {
      //     title: "نام آگهی",
      //     imgSrc: "https://picsum.photos/600/300/?image=29",
      //     imgAlt: "Image 2",
      //     buttonLink: "#",
      //     buttonText: "مشاهده آگهی",
      //     description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      //   },
      //   {
      //     title: "نام آگهی",
      //     imgSrc: "https://picsum.photos/600/300/?image=20",
      //     imgAlt: "Image 2",
      //     buttonLink: "#",
      //     buttonText: "مشاهده آگهی",
      //     description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      //   },
      //   {
      //     title: "نام آگهی",
      //     imgSrc: "https://picsum.photos/600/300/?image=21",
      //     imgAlt: "Image 2",
      //     buttonLink: "#",
      //     buttonText: "مشاهده آگهی",
      //     description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      //   },
      //   // Add more card data as needed
      // ]
    };
  },
  computed: {
        news() {
            return this.$store.getters["news/loadedAllnews"] || [];
        },
      },
  methods: {
    slideLeft() {
      if (this.curSlide < this.maxSlide - 4) {
        this.curSlide++;
      }
    },
    slideRight() {
      if (this.curSlide > 0) {
        this.curSlide--;
      }
    },
    goAdvertising() {
      this.$router.push('/profile');
    },

    goToSlide(index) {
      this.curSlide = index;
    },

    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      if (this.touchStartX - this.touchEndX > 50) {
        // Swiped left
        this.slideLeft();
      } else if (this.touchEndX - this.touchStartX > 50) {
        // Swiped right
        this.slideRight();
      }
      this.touchStartX = null;
      this.touchEndX = null;
    }
  }
};
</script>

<style scoped>

</style>