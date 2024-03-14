<template>
  <b-card no-body class="mb-1 text-right">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button class="text-right" block v-b-toggle.accordion-1 variant="light">لورم ایپسوم متن ساختگی با تولید سادگی
        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</b-button>
    </b-card-header>
    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
          متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
          سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد.

          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
          متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
          سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد.


        </b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Accordion Item 1", content: "Content for Accordion Item 1", expanded: false },
        { title: "Accordion Item 2", content: "Content for Accordion Item 2", expanded: false },
        { title: "Accordion Item 3", content: "Content for Accordion Item 3", expanded: false }
        // Add more accordion items as needed
      ]
    };
  },
  methods: {
    toggleAccordion(index) {
      this.items[index].expanded = !this.items[index].expanded;
    }
  }
};
</script>

<style scoped>
.accordion {
  width: 100%;
  text-align: right;
}

.accordion-item {
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.accordion-header {
  padding: 10px;
  background-color: #f5f5f5;
  font-weight: bold;
}

.accordion-content {
  padding: 10px;
  background-color: #fafafa;
  transition: max-height 0.5s ease;
  overflow: hidden;
}
</style>
