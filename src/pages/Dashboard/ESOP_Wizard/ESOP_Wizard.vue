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
              Shareholder Agreement
            </template>
            <second-step
              ref="step2"
              @on-validated="onStepValidated"
            ></second-step>
          </wizard-tab>

          <wizard-tab :before-change="() => validateStep('step3')">
            <template slot="label">
              <i class="now-ui-icons files_paper"></i>
              Deed of Adherence
            </template>
            <third-step
              ref="step3"
              @on-validated="onStepValidated"
            ></third-step>
          </wizard-tab>

          <wizard-tab :before-change="() => validateStep('step4')">
            <template slot="label">
              <i class="now-ui-icons files_paper"></i>
              Share Option Plan
            </template>
            <fourth-step
              ref="step4"
              @on-validated="onStepValidated"
            ></fourth-step>
          </wizard-tab>

          <wizard-tab :before-change="() => validateStep('step5')">
            <template slot="label">
              <i class="now-ui-icons ui-1_check"></i>
              Review & Sign
            </template>
            <fifth-step
              ref="step5"
              @on-validated="wizardComplete"
            ></fifth-step>
          </wizard-tab>

        </simple-wizard>
      </div>
    </div>
  </div>
</template>

<script>
import FirstStep from "./Wizard/FirstStep.vue";
import SecondStep from "./Wizard/SecondStep.vue";
import ThirdStep from "./Wizard/ThirdStep.vue";
import FourthStep from "./Wizard/FourthStep.vue";
import FifthStep from "./Wizard/FifthStep.vue";
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
    ThirdStep,
    FourthStep,
    FifthStep,
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