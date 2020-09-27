<template>
  <div>
    <div class="row">
      <div class="col-12">
      
        <el-table :data="tableData">
          <el-table-column
            min-width="150"
            label=""
            property="key"
          ></el-table-column>
          <el-table-column
            min-width="150"
            label=""
            property="val"
          ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import { Table, TableColumn } from "element-ui";
import Vue from 'vue';
import Vuex from 'vuex';
export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      company: this.$store.getters.companyName,
      companyDirector: "John Prentice",
      companyAddress: this.$store.getters.companyAddress,      
      companyBusiness: this.$store.getters.companyBusiness,
      companyNumber: this.$store.getters.companyNumber,
      shareValue: 1.25,

      today: new Date().toISOString().substring(0, 10),
      year: new Date().toISOString().substring(0, 4),
      dataTable: [
        {
          key: 'c',
          val: 'a'
        }
      ]
    }
  },
  computed: {
    employee: {
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
    employeeJob: {
      get () {
        return this.$store.state.esop.employeeJob;
      },
      set (value) {
        this.$store.commit('setEmployeeJob', value);
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
    amoutMoney: {
      get () {
        return parseInt(this.$store.getters.numShares) ;
      }
    },
    vestingDate: {
      get () {
        return this.$store.state.esop.vestingDate;
      },
      set (value) {
        this.$store.commit('setVestingDate', value);
      }
    },
    expiryDate: {
      get () {
        let numberOfDaysToAdd = 1095;
        return someDate.setDate(new Date(his.$store.getters.vestingDate) + numberOfDaysToAdd)
      }
    }
  },
  mounted(){
  }
}
</script>