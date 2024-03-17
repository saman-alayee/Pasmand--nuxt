<template>
    <div>
      <div class="card-container p-4">
        <div class="slider"  @touchstart="handleTouchStart" @touchmove="handleTouchMove"
          @touchend="handleTouchEnd">
          <button class="arrow--left" @click="slideRight">
            <img src="../../../assets/icons/arrow-left-circle.svg" alt="Previous" />
          </button>
          <div class="slides" @click="goLearning">
            <div v-for="(card, index) in cards" :key="index" class="slide"
              :style="{ transform: `translateX(${(index - curSlide) * 110}%)` }">
              <learningCard :title="card.title" :text="card.description" :img-src="card.imgSrc" :img-alt="card.imgAlt" />
             
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
  import learningCard from '../cards/learningCard.vue';
  
  export default {
    components: {
      learningCard
    },
    data() {
      return {
        slides: Array.from({ length: 6 }), // Adjust the length as per your requirements
        maxSlide: 10, // Change this if needed
        curSlide: 0,
        touchStartX: null,
        touchEndX: null,
        cards: [
          {
            
            imgSrc: "https://picsum.photos/600/300/?image=25",
            imgAlt: "Image 1",
            buttonLink: "#",
            title: "موضوع",
            buttonText: "مشاهده آگهی",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          },
          {
            
            imgSrc: "https://picsum.photos/600/300/?image=26",
            imgAlt: "Image 2",
            buttonLink: "#",
            title: "موضوع",
            buttonText: "مشاهده آگهی",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          },
          {
            
            imgSrc: "https://picsum.photos/600/300/?image=27",
            imgAlt: "Image 2",
            buttonLink: "#",
            title: "موضوع",
            buttonText: "مشاهده آگهی",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          },
          {
            
            imgSrc: "https://picsum.photos/600/300/?image=28",
            imgAlt: "Image 2",
            title: "موضوع",
            buttonLink: "#",
            buttonText: "مشاهده آگهی",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          },
          {
            
            imgSrc: "https://picsum.photos/600/300/?image=29",
            imgAlt: "Image 2",
            title: "موضوع",
            buttonLink: "#",
            buttonText: "مشاهده آگهی",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی  که لازم است و برای شرایپیوسته "
          },
          {
            
            imgSrc: "https://picsum.photos/600/300/?image=20",
            imgAlt: "Image 2",
            title: "موضوع",
            buttonLink: "#",
            buttonText: "مشاهده آگهی",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          },
          {
            
            imgSrc: "https://picsum.photos/600/300/?image=21",
            imgAlt: "Image 2",
            title: "موضوع",
            buttonLink: "#",
            buttonText: "مشاهده آگهی",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          },
          // Add more card data as needed
        ]
      };
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
      goLearning() {
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