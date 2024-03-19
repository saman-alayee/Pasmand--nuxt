<template>
    <div>

        <div>
            <learningCard v-for="(item, index) in items" :key="index" :title="item.title" :imageSrc="item.imageSrc"
                :imgAlt="item.imgAlt" :text="item.text" :author="item.author" :date="item.date" />
        </div>
       
        <div class="mt-4">
            <div class="mt-1">
            <p class=" text-right h4">جدیدترین آموزش ها </p>
            <div class="separator mb-5"></div>
        </div>
            <learningCarousel />
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>
<script>
import learningCard from '../../elements/cards/singleLearningCard.vue';
import learningCarousel from '../../elements/carousel/learning.vue'
import Footer from '../../elements/footer/footer.vue';

export default {
    components: {
        learningCard, learningCarousel,Footer
        
    },
    data() {
        return {
            // Sample data array
            items: [
                {
                    title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                    imageSrc: '/img/login/balloon-lg.jpg',
                    imgAlt: 'Image 1',
                    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
                    author: 'محمد محمدیان',
                    date: '2024/06/08',

                },

            ],
        };
    },
}
</script>