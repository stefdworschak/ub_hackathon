<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card card-stats card-raised">
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-success">
                      <i class="now-ui-icons business_money-coins"></i>
                    </div>
                    <h3 class="info-title">
                        <small>€</small>
                      <animated-number :value="853000"></animated-number>
                    </h3>
                    <h6 class="stats-title">Total Share Value</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-success">
                      <i class="now-ui-icons business_money-coins"></i>
                    </div>
                    <h3 class="info-title">
                      <small>€</small>
                      <animated-number :value="43"></animated-number>
                    </h3>
                    <h6 class="stats-title">Indivdual Share Value</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-info">
                      <i class="now-ui-icons users_single-02"></i>
                    </div>
                    <h3 class="info-title">
                      <animated-number :value="74"></animated-number>
                    </h3>
                    <h6 class="stats-title">Employees</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-danger">
                      <i class="now-ui-icons objects_support-17"></i>
                    </div>
                    <h3 class="info-title">
                      <animated-number :value="353"></animated-number>
                    </h3>
                    <h6 class="stats-title">Total Shares Issued</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-lg-12">

        <card card-body-classes="table-full-width" no-footer-line>
        <h4 slot="header" class="card-title">Cap Table</h4>
        <div>
          <div
            class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
          >
            <el-select
              class="select-primary mb-3"
              style="width: 200px"
              v-model="pagination.perPage"
              placeholder="Per page"
            >
              <el-option
                class="select-default"
                v-for="item in pagination.perPageOptions"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
            <fg-input>
              <el-input
                type="search"
                class="mb-3"
                clearable
                prefix-icon="el-icon-search"
                style="width: 200px"
                placeholder="Search records"
                v-model="searchQuery"
                aria-controls="datatables"
              >
              </el-input>
            </fg-input>
          </div>
          <el-table stripe style="width: 100%;" :data="queriedData">
            <el-table-column
              v-for="column in tableColumns"
              :key="column.label"
              :min-width="column.minWidth"
              :prop="column.prop"
              :label="column.label"
            >
            </el-table-column>
            
          </el-table>
        </div>
        <div
          slot="footer"
          class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
        >
          <div class="">
            <p class="card-category">
              Showing {{ from + 1 }} to {{ to }} of {{ total }} entries
            </p>
          </div>
          <n-pagination
            class="pagination-no-border"
            v-model="pagination.currentPage"
            :per-page="pagination.perPage"
            :total="total"
          >
          </n-pagination>
        </div>
      </card>





      </div>
    </div>
  </div>
</template>

<script>
import { Table, TableColumn, Select, Option } from "element-ui";
import users from "./users";
import Fuse from "fuse.js";
import Swal from "sweetalert2";
import {
  Card,
  Table as NTable,
  AnimatedNumber,
  Progress as NProgress,
  Pagination as NPagination,
  AsyncWorldMap,
  LineChart
} from "src/components";

export default {
  components: {
    Card,
    NTable,
    AnimatedNumber,
    LineChart,
    NProgress,
    NPagination,
    AsyncWorldMap,
    LineChart,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      progress: 0,
      charts: {
        activeUsers: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630],
          color: "#f96332"
        },
        emailsCampaign: {
          labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900],
          color: "#18ce0f"
        },
        activeCountries: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
          ],
          data: [80, 78, 86, 96, 83, 85, 76, 75, 88, 90],
          color: "#2CA8FF"
        }
      },
      tableData: [
        {
          flag: "img/US.png",
          country: "USA",
          value: "2.920",
          percentage: "53.23%"
        },
        {
          flag: "img/DE.png",
          country: "Germany",
          value: "1.300",
          percentage: "20.43%"
        },
        {
          flag: "img/AU.png",
          country: "Australia",
          value: "760",
          percentage: "10.35%"
        },
        {
          flag: "img/GB.png",
          country: "United Kingdom",
          value: "690",
          percentage: "7.87%"
        },
        {
          flag: "img/RO.png",
          country: "United Kingdom",
          value: "600",
          percentage: "5.94%"
        },
        {
          flag: "img/BR.png",
          country: "Brasil",
          value: "550",
          percentage: "4.34%"
        }
      ],
      productsTable: [
        {
          image: "img/saint-laurent.jpg",
          title: "Suede Biker Jacket",
          subTitle: "by Saint Laurent",
          color: "Black",
          size: "M",
          price: 3390,
          quantity: 1,
          amount: 3390
        },
        {
          image: "img/balmain.jpg",
          title: "Jersey T-Shirt ",
          subTitle: "by Balmain",
          color: "Black",
          size: "M",
          price: 499,
          quantity: 2,
          amount: 998
        },
        {
          image: "img/prada.jpg",
          title: "Slim-Fit Swim Short ",
          subTitle: "by Prada",
          color: "Red",
          size: "M",
          price: 200,
          quantity: 1,
          amount: 200
        }
      ],
      mapData: {
        AU: 760,
        BR: 550,
        CA: 120,
        DE: 1300,
        FR: 540,
        GB: 690,
        GE: 200,
        IN: 200,
        RO: 600,
        RU: 300,
        US: 2920
      },
      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      searchQuery: "",
      propsToSearch: ["name", "email", "Shares"],
      tableColumns: [
        {
          prop: "name",
          label: "Name",
          minWidth: 200
        },
        {
          prop: "email",
          label: "Email",
          minWidth: 250
        },
        {
          prop: "Shares",
          label: "Shares",
          minWidth: 100
        },
        {
          prop: "Value",
          label: "Value",
          minWidth: 120
        }
      ],
      tableData: users,
      searchedData: [],
      fuseSearch: null
    };
  },
  mounted(){
      // Fuse search initialization.
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ["name", "email"],
      threshold: 0.3
    });
  },
  watch: {
    /**
     * Searches through the table data by a given query.
     * NOTE: If you have a lot of data, it's recommended to do the search on the Server Side and only display the results here.
     * @param value of the query
     */
    searchQuery(value) {
      let result = this.tableData;
      if (value !== "") {
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    }
  },
  computed: {
    /***
     * Returns a page from the searched data or the whole data. Search is performed in the watch section below
     */
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0) {
        result = this.searchedData;
      }
      return result.slice(this.from, this.to);
    },
    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    total() {
      return this.searchedData.length > 0
        ? this.searchedData.length
        : this.tableData.length;
    }
  },
};
</script>
<style></style>
