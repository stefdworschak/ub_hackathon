<template>
  <div>
    <h5 class="info-text">Review</h5>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="row">
          <div class="col-sm-12">
            <Review />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Review from "./../Review.vue";

export default {
  components: {
    Review
  },
  data() {
    return {
    };
  },
  methods: {
    validate() {
      this.$emit("on-validated", true, this.model);
      return Promise.resolve(true);
    }
  }
};
</script>
<style></style>
