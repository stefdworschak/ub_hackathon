<template>
  <div class="esop-content">
    <div class="row d-flex justify-content-center esop">
      <div class="col-md-10 mr-auto ml-auto">
        <simple-wizard>
          <template slot="header">
            <h3 class="card-title">Build your ESOP</h3>
            <h3 class="description">
              Build a new Employee Stock Ownership Plan (ESOP) using our simple wizard
            </h3>
          </template>

          <wizard-tab :before-change="() => validateStep('step1')">
            <template slot="label">
              <i class="now-ui-icons users_circle-08"></i>
              Employee and Shares Information
            </template>
            <first-step
              ref="step1"
              @on-validated="onStepValidated"
            ></first-step>
          </wizard-tab>

          <wizard-tab :before-change="() => validateStep('step2')">
            <template slot="label">
              <i class="now-ui-icons files_paper"></i>
              Review & Send
            </template>
            <second-step
              ref="step2"
              @on-validated="wizardComplete"
            ></second-step>
          </wizard-tab>

        </simple-wizard>
      </div>
    </div>
  </div>
</template>

<script>
import FirstStep from "./Wizard/FirstStep.vue";
import SecondStep from "./Wizard/SecondStep.vue";
import Swal from "sweetalert2";
import { SimpleWizard, WizardTab } from "src/components";

export default {
  data() {
    return {
      wizardModel: {}
    };
  },
  components: {
    FirstStep,
    SecondStep,
    SimpleWizard,
    WizardTab
  },
  methods: {
    validateStep(ref) {
      return this.$refs[ref].validate();
    },
    onStepValidated(validated, model) {
      this.wizardModel = { ...this.wizardModel, ...model };
    },
    wizardComplete() {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the finish button!",
        type: "success",
        confirmButtonClass: "btn btn-success",
        buttonsStyling: false
      });
    }
  }
};
</script>
<style>
  .esop-content {
    margin-top: 60px;
  }
</style>