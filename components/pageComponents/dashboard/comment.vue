<template>
    <div class="mt-3">
        <div class="mt-1 pr-1">
            <p class=" text-right h4">آخرین نظرات شما</p>
            <div class="separator mb-5"></div>
        </div>
        <div>
            <BaseModal class ref="modalComment">
                <div class="popup-content mt-3" style="display: block;">
                    <div class="popup-container">
                        <div class="popup-content-box">
                            <div class="mt-1 pr-1">
                                <p class=" text-right h4"> نظر شما</p>
                                <div class="separator mb-5"></div>
                            </div>
                            <div class="empty-alert" v-if="error">
                                {{ error }}
                            </div>
                            <baseInput type="text" align="right" placeholder="موضوع" v-model="title" />
                            <baseInput isTextarea="true" type="textarea" align="right" placeholder="توضیحات"
                                v-model="description" />
                            <div class="star-icon">
                                <p style="padding: 3px;">امتیاز شما </p>
                                <div class="pr-2" v-for="(star, index) in 5" :key="index"
                                    @click="handleStarClick(index)" :class="starColor(index)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                            </div>
                            <BaseButton @click="validateForm" buttonText="ثبت نظر "
                                buttonClasses="btn-login btn btn-success btn-md btn-multiple-state btn-shadow" />
                            <BaseButton @click="closeComment" buttonText="بستن "
                                buttonClasses="btn-close btn btn-danger btn-md btn-multiple-state btn-shadow" />
                        </div>
                    </div>
                </div>
            </BaseModal>

            <div class="d-flex justify-content-center">
                <BaseButton @click="openComment" buttonText="ثبت نظر جدید"
                    buttonClasses="btn-login btn btn-success btn-md btn-multiple-state btn-shadow" />

            </div>
            <b-row class="text-right text-dark h6">
                <b-col v-for="(comment, index) in commentList" :key="index" class="mt-3" lg="12" md="12" sm="12"
                    cols="12">
                    <commentCard :goldStars="comment.stars" :title="comment.title" :date="comment.date" :content="comment.content" />
                </b-col>

            </b-row>
            <div>
                <Footer />
            </div>
        </div>
    </div>
</template>
<script>
import commentCard from '../../elements/cards/commentCard.vue';
import BaseButton from '../../elements/button/baseButton.vue'
import BaseModal from '../../elements/modal/index.vue'
import baseInput from '../../elements/forms/baseInput.vue';
import Footer from '../../elements/footer/footer.vue';

export default {
    components: {
        commentCard, BaseButton, BaseModal, baseInput, Footer
    },
    data() {
        return {
            title: '',
            description: '',
            error: '', clickedStars: 0,
            commentList: [
                {
                    title: 'لورم ایپسوم',
                    date: '1404/06/08',
                    stars: 2,
                    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و ...'
                }, {
                    title: 'لورم ایپسوم',
                    date: '1404/06/08',
                    stars: 3,
                    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و ...'
                }, {
                    title: 'لورم ایپسوم',
                    date: '1404/06/08',
                    stars: 2,
                    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و ...'
                }, {
                    title: 'لورم ایپسوم',
                    date: '1404/06/08',
                    stars: 5,
                    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و ...'
                }, {
                    title: 'لورم ایپسوم',
                    date: '1404/06/08',
                    stars: 1,
                    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و ...'
                },
                // Add more comments as needed
            ]
        };
    },
    methods: {
        // Comment modal
        openComment() {
            this.$refs.modalComment.openModal();
        },
        closeComment() {
            this.$refs.modalComment.closeModal();
        },
        validateForm() {
            // Clear previous errors
            this.error = '';

            // Check if title is empty
            if (!this.title.trim()) {
                this.error = 'لطفاً موضوع خود را وارد کنید';
                return;
            }
            if (this.clickedStars == 0) {
                this.error = 'لطفاً امتیاز خود را وارد کنید';
                return;
            }
            // Check if description is empty
            if (!this.description.trim()) {
                this.error = 'لطفاً توضیحات خود را وارد کنید';
                return;
            }

            // Check if description is at least 8 characters long
            if (this.description.length > 300) {
                this.error = 'توضیخات نباید بیشتر از 300 حروف باشد';
                return;
            }

            // If everything is valid, proceed with the desired action
            // For example, you can make an API call to authenticate the user
        },
        handleStarClick(index) {
            this.clickedStars = index + 1; // Update clicked stars count
        },
        // Method to dynamically set star color
        starColor(index) {
            return {
                'text-warning': index < this.clickedStars // Apply 'text-warning' class for clicked stars
            }
        }
    },
}
</script>