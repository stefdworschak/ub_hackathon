<template>
  <div>
    <h5 class="info-text">Review</h5>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="row">
          <div class="col-sm-12">
            <ShareholderAgreement />
            <div class="col-sm-4">
            <icon-checkbox
              v-model="model.agree"
              icon="now-ui-icons ui-1_check"
              title="Code"
            >
            </icon-checkbox>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { IconCheckbox } from "src/components";
import ShareholderAgreement from "./../ShareholderAgreement.vue";

export default {
  components: {
    IconCheckbox,
    ShareholderAgreement
  },
  data() {
    return {
      model: {
        today: new Date().toISOString().substring(0,10),
        agree: true
      },
      company: "Test Limited",
      employee: "My Employee"
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
