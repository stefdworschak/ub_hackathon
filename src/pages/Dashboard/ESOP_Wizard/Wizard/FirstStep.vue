<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="validate">
      <h5 class="info-text">
        Let's start with the basic information (with validation)
      </h5>
      <div class="row justify-content-center">
        <div class="col-sm-12">
          <ValidationProvider
            name="employeeName"
            rules="required"
            v-slot="{ passed, failed }"
          >
            <fg-input
              type="text"
              :error="failed ? 'The Employee Full Name field is required' : null"
              :hasSuccess="passed"
              class="form-control-lg"
              placeholder="Employee Full Name (required)"
              v-model="employeeName"
            >
            </fg-input>
          </ValidationProvider>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-12">
        
          <ValidationProvider
              name="employeeAddress"
              rules="required"
              v-slot="{ passed, failed }"
            >
            <fg-input
              type="textarea"
              class="form-control-lg"
              :error="failed ? 'The Employee Address field is required' : null"
              :hasSuccess="passed"
              placeholder="Employee Address (required)"
              v-model="employeeAddress"
  
            >
            </fg-input>
          </ValidationProvider>
      
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-12">
        
          <ValidationProvider
              name="employeeEmail"
              rules="required"
              v-slot="{ passed, failed }"
            >
            <fg-input
              type="textarea"
              class="form-control-lg"
              :error="failed ? 'The Employee Email Addres field is required' : null"
              :hasSuccess="passed"
              placeholder="Employee Email Address (required)"
              v-model="employeeEmail"
  
            >
            </fg-input>
          </ValidationProvider>
      
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-12">
          <ValidationProvider
              name="numShares"
              rules="required"
              v-slot="{ passed, failed }"
            >
            <fg-input
              type="textarea"
              class="form-control-lg"
              :error="failed ? 'The Scheme Description field is required' : null"
              :hasSuccess="passed"
              placeholder="Number Of Shares"
              v-model="numShares"
  
            >
            </fg-input>
          </ValidationProvider>
            
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-12">
          <ValidationProvider
              name="vestingDate"
              rules="required"
              v-slot="{ passed, failed }"
            >
            <fg-input
              type="textarea"
              class="form-control-lg"
              :error="failed ? 'The Vesting Date field is required' : null"
              :hasSuccess="passed"
              placeholder="Vesting Date (required)"
              v-model="vestingDate"
  
            >
            </fg-input>
          </ValidationProvider>
            
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-12">
           <ValidationProvider
            name="esopType"
            rules="required"
            v-slot="{ failed }"
          >
            <fg-input
              :error="failed ? 'The Scheme Type field is required' : null"
              placeholder="Select Scheme Type">
              <el-select
                v-model="esopType"
                class="select-primary"
                name="esopType"
                placeholder="Select Scheme Type"
              >
                <el-option
                  v-for="esopType in ESOPTypeOptions"
                  class="select-primary"
                  :label="esopType"
                  :value="esopType"
                  :key="esopType"
                ></el-option>
              </el-select>
            </fg-input>
          </ValidationProvider>

        </div>

      </div>
    </form>
  </ValidationObserver>
</template>
<script>
import Vue from 'vue';
import Vuex from 'vuex';
import { Upload, Select, Option } from "element-ui";
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", required);
extend("email", email);

export default {
  components: {
    [Upload.name]: Upload,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      ESOPTypeOptions: ["Growth Shares", "KEEP"]
    };
  },
  mounted(){
    console.log(this.$store.state.esop);
  },
  computed: {
    employeeName: {
      get () {
        return this.$store.state.esop.employeeName;
      },
      set (value) {
        this.$store.commit('setEmployeeName', value);
      }
    },
    employeeAddress: {
      get () {
        return this.$store.state.esop.employeeAddress;
      },
      set (value) {
        this.$store.commit('setEmployeeAddress', value);
      }
    },
    employeeEmail: {
      get () {
        return this.$store.state.esop.employeeEmail;
      },
      set (value) {
        this.$store.commit('setEmployeeEmail', value);
      }
    },
    esopType: {
      get () {
        return this.$store.state.esop.esopType;
      },
      set (value) {
        this.$store.commit('setEsopType', value);
      }
    },
    numShares: {
      get () {
        return this.$store.state.esop.numShares;
      },
      set (value) {
        this.$store.commit('setNumShares', value);
      }
    },
    vestingDate: {
      get () {
        return this.$store.state.esop.vestingDate;
      },
      set (value) {
        this.$store.commit('setVestingDate', value);
      }
    }
  },
  methods: {
    handlePreview(file) {
      this.model.imageUrl = URL.createObjectURL(file.raw);
    },
    validate() {
      return this.$refs.form.validate().then(res => {
        this.$emit("on-validated", res);
        return res;
      });
    }
  }
};
</script>
<style>
.row.justify-content-center {
  padding-bottom: 10px;
}
.text-danger.invalid-feedback {
  margin-top: 10px;
}

input.form-control::placeholder {
  color: gray;
}
</style>
