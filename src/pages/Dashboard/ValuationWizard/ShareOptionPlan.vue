<template>
    <div>

        <p><strong>{{company}}</strong></p>
        <p>&nbsp;</p>
        <p><strong>2020 Share Option Plan</strong></p>
        <p>&nbsp;</p>
        <p><strong>Option Certificate</strong></p>
        <p><strong>THIS DOCUMENT IS IMPORTANT</strong></p>
        <p>&nbsp;</p>
        <p><strong>Name of Optionee</strong><span style="font-weight: 400;">:</span> <span style="font-weight: 400;">{{employee}}</span></p>
        <p>&nbsp;</p>
        <p><strong>Grant Date</strong><span style="font-weight: 400;">:</span> <span style="font-weight: 400;">{{today}}</span></p>
        <p>&nbsp;</p>
        <p><strong>Number of Option Shares</strong><span style="font-weight: 400;">:</span> <span style="font-weight: 400;">{{numShares}}&nbsp; Option Shares</span></p>
        <p>&nbsp;</p>
        <p><strong>Exercise Price</strong><span style="font-weight: 400;">:</span> <span style="font-weight: 400;">EURO 1.00 per Option Share</span></p>
        <p>&nbsp;</p>
        <p><strong>Vesting Commencement Date</strong><span style="font-weight: 400;">:</span> <span style="font-weight: 400;">{{vestingDate}}</span></p>
        <p>&nbsp;</p>
        <p><strong>Expiration Date</strong><span style="font-weight: 400;">:</span> <span style="font-weight: 400;">{{vestingDate}}</span></p>
        <p>&nbsp;</p>
        <p><strong>THIS IS TO CERTIFY</strong><span style="font-weight: 400;"> that the Optionee named above was on the above date granted an Option to subscribe for up to the above number of Ordinary Shares in {{company}} (the "</span><strong>Company</strong><span style="font-weight: 400;">") at the above Exercise Price per Option Share and subject to the Vesting Schedule and Vesting Conditions described below.&nbsp;&nbsp;</span></p>
        <p>&nbsp;</p>
        <p><strong>Vesting Schedule and Vesting Conditions: </strong><span style="font-weight: 400;">The Option shall become exercisable over the five (5)&ndash; year period measured from the Vesting Commencement Date, subject to and conditional upon the satisfaction of the Vesting Conditions set out below.&nbsp;</span></p>
        <p>&nbsp;</p>
        <p><span style="font-weight: 400;">The Option shall vest and become exercisable on the applicable Vest Date set out below as to the percentage of the total number of Option Shares set out below in respect of each Vesting Condition,&nbsp; provided the Optionee is a Service Provider on the relevant Vest Date.</span></p>
        <p>&nbsp;</p>
        <table>
        <tbody>
        <tr>
        <td>&nbsp;</td>
        <td>
        <p><strong>Vesting Condition</strong></p>
        </td>
        <td>
        <p><strong>% of total Option Shares to Vest</strong></p>
        </td>
        <td>
        <p><strong>Vest Date</strong></p>
        </td>
        </tr>
        <tr>
        <td>
        <p><span style="font-weight: 400;">1</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">The Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2018 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2019 represents a growth of at least 100% of the Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2017 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2018</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">12.5%&nbsp;</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2019</span></p>
        </td>
        </tr>
        <tr>
        <td>
        <p><span style="font-weight: 400;">2</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">The Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2018 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2019 represents a growth of at least 150% of the Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2017 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2018</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">12.5%&nbsp;</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2019</span></p>
        </td>
        </tr>
        <tr>
        <td>
        <p><span style="font-weight: 400;">3</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">The Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2019 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2020 represents a growth of at least 100% of the Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2018 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2019</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">12.5%&nbsp;</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2020</span></p>
        </td>
        </tr>
        <tr>
        <td>
        <p><span style="font-weight: 400;">4</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">The Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2019 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2020 represents a growth of at least 150% of the Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2018 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2019</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">12.5%&nbsp;</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2020</span></p>
        </td>
        </tr>
        <tr>
        <td>
        <p><span style="font-weight: 400;">5</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">The Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2020 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2021 represents a growth of at least 100% of the Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2019 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2020</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">12.5%&nbsp;</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2021</span></p>
        </td>
        </tr>
        <tr>
        <td>
        <p><span style="font-weight: 400;">6</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">The Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2020 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2021 represents a growth of at least 150% of the Company&rsquo;s Active ACV Book for the period from April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2019 to March 31</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2020</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">12.5%&nbsp;</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">April 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> 2021</span></p>
        </td>
        </tr>
        <tr>
        <td>
        <p><span style="font-weight: 400;">7</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">The entire issued share capital of the Company (post-investment) is valued at at least &euro;30million in a second-round third party investment (the "</span><strong>Investment</strong><span style="font-weight: 400;">") that occurs on or before 1st April 2020</span></p>
        <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- OR-</span></p>
        <p><span style="font-weight: 400;">A Company Sale occurs on or before 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> April 2022 in which the aggregate consideration payable by the acquirer is at&nbsp; least &euro;30 million&nbsp;</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">25%&nbsp;</span></p>
        </td>
        <td>
        <p><span style="font-weight: 400;">Immediately upon completion of the Investment</span></p>
        <br />
        <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
        <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-OR-</span></p>
        <p><span style="font-weight: 400;">Immediately prior to completion of the Company Sale</span></p>
        </td>
        </tr>
        </tbody>
        </table>
        <p>&nbsp;</p>
        <p><span style="font-weight: 400;">With respect to Vesting Conditions 1 to 4, inclusive, if the applicable Vesting Condition has not been or will not be satisfied on the applicable Vest Date, the Option shall lapse as of such date as to the Option Shares that would have vested if such Vesting Condition had been satisfied.&nbsp;&nbsp;&nbsp;</span></p>
        <p><span style="font-weight: 400;">With respect to Vesting Conditions 5, if neither of such Vesting Conditions is satisfied the Option shall lapse on 1</span><span style="font-weight: 400;">st</span><span style="font-weight: 400;"> April 2022 as to the Option Shares that would have vested if either such Vesting Condition had been satisfied.</span></p>
        <p><strong>"ACV"</strong><span style="font-weight: 400;"> means the value to the Company of a contract over a twelve-month period, as determined by the Board based on the Company's revenue accounts for the relevant period and, in the event of a dispute, confirmed by the Company's auditors.</span></p>
        <p><span style="font-weight: 400;">"</span><strong>Company&rsquo;s Active ACV Book</strong><span style="font-weight: 400;">" means the ACV of contracts with customers of the Company that were secured by the Company.</span></p>
        <p><span style="font-weight: 400;">The Option is personal to the Optionee and may not be transferred, assigned, mortgaged, charged or otherwise disposed of by the Optionee.&nbsp;&nbsp;</span></p>
        <p><span style="font-weight: 400;">The Option is granted and exercisable subject to and in accordance with the Rules of the Company's 2017 Share Option Plan a copy of which is attached.&nbsp; Defined terms in this Option Certificate have the meaning assigned in the Rules or in this Option Certificate.</span></p>
        <p><span style="font-weight: 400;">A form of notice for use by the Optionee for the exercise of the Option is set out overleaf.</span></p>
        <p>&nbsp;</p>
        <table>
        <tbody>
        <tr>
        <td>
        <p><span style="font-weight: 400;">PRESENT when the common seal</span></p>
        <p><span style="font-weight: 400;">of {{company}}</span></p>
        <p><span style="font-weight: 400;">was affixed hereto:</span></p>
        </td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>
        <p><span style="font-weight: 400;">Signature</span></p>
        </td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>
        <p><span style="font-weight: 400;">Print name</span></p>
        </td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>
        <p><span style="font-weight: 400;">Signature</span></p>
        </td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>
        <p><span style="font-weight: 400;">Print name</span></p>
        </td>
        </tr>
        </tbody>
        </table>
        <p><br /><br /></p>
        <p><span style="font-weight: 400;">Attachment: {{company}} {{year}} Share Option Plan</span></p>
        <p>&nbsp;</p>

    </div>
</template>
<script>
import Vue from 'vue';
import Vuex from 'vuex';
export default {
  
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