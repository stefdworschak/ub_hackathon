import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
   esop: {
      employeeName: "",
      employeeAddress: "",
      employeeEmail: "",
      esopType: "",
      numShares: "",
      vestingDate: ""
   },
   company: {
     name: "Piece of Cake Ltd.",
     address: "4 Grand Canal Square, Dublin, Ireland Dublin",
     founded: "",
     companyBusiness,

   }
 },
 getters: {
   employeeName: state => {
     return state.esop.employeeName;
   },
   employeeAddress: state => {
     return state.esop.employeeAddress;
   },
   employeeEmail: state => {
     return state.esop.employeeEmail;
   },
   esopType: state => {
     return state.esop.esopType;
   },
   numShares: state => {
     return state.esop.numShares;
   },
   vestingDate: state => {
     return state.esop.vestingDate;
   }
   
 },
 mutations: {
   setEmployeeName (state, payload) {
     state.esop.employeeName = payload
   },
   setEmployeeAddress (state, payload) {
     state.esop.employeeAddress = payload
   },
   setEmployeeEmail (state, payload) {
     state.esop.employeeEmail = payload
   },
   setEsopType (state, payload) {
     state.esop.esopType = payload
   },
   setNumShares (state, payload) {
     state.esop.numShares = payload
   },
   setVestingDate (state, payload) {
     state.esop.vestingDate = payload
   }
 },
 actions: {}
});