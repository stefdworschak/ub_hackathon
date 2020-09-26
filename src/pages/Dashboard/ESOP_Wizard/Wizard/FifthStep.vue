<template>
  <div>
    <h5 class="info-text">Review</h5>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="row">
          <div class="col-sm-12">
            <ReviewESOP />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { IconCheckbox } from "src/components";
import { ReviewESOP } from "./../ReviewESOP.vue";

export default {
  components: {
    IconCheckbox,
    ReviewESOP
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
