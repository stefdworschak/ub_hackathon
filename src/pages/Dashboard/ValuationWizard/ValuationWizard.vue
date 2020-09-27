<template>
  <div>
    <div class="row">
    <div class="col-sm-12">
      <div class="picture-container">
        <el-upload
          class="picture"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="addExtra"
          :auto-upload="false"
          :show-file-list="false"
        >
          <img v-if="valuationDocument" :src="valuationDocument" class="picture-src" />
        </el-upload>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6" style="margin-top:20px">
      <el-table stripe style="width: 100%;" :data="tableData">
        <el-table-column
          v-for="column in tableColumns"
          :key="column.label"
          :prop="column.prop"
          :label="column.label"
        ></el-table-column>
            
      </el-table>
    </div>
    <div class="col-sm-6" style="margin-top:20px">
        <card class="card-chart" no-footer-line>
          <template slot="header">
            <h5 class="card-category">Valuations</h5>
            <h4 class="card-title">Most Recent Valuations</h4>
          </template>
          <div class="chart-area">
            <line-chart
              :labels="lineChart1.labels"
              :data="lineChart1.data"
              :color="lineChart1.color"
              :height="200"
            >
            </line-chart>
          </div>
          <div slot="footer" class="stats">
            <i class="now-ui-icons arrows-1_refresh-69"></i> Just Updated
          </div>
        </card>
    </div>
  </div>
</div>  

</template>
<script>
import {  Table, TableColumn,Upload } from "element-ui";
import LineChart from "src/components/Charts/LineChart";

export default {
  components: {
    [Upload.name]: Upload,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn ,
    LineChart
  },
  data() {
    return {
      valuationDocument: "https://www.pngkit.com/png/full/670-6706313_plus-button-green.png",
      lineChart1: {
        labels: [
          "2016-01-01",
          "2017-01-01",
          "2018-01-01",
          "2019-01-01",
          "2020-01-01"
        ],
        data: [25000, 25500, 25800, 32250, 35000],
        color: "#f96332"
      },
      tableColumns: [
        {
          'label': 'Valuation Date',
          'prop': 'date',
        },
        {
          'label': 'Valuation Value',
          'prop': 'valuation',
        }
      ],
      tableData: [
        {
          'date': '2020-01-01',
          'valuation': 'Eur 35,000',
        },
        {
          'date': '2019-01-01',
          'valuation': 'Eur 34,000',
        },
        {
          'date': '2018-01-01',
          'valuation': 'Eur 33,000',
        },
        {
          'date': '2017-01-01',
          'valuation': 'Eur 25,500',
        },
        {
          'date': '2016-01-01',
          'valuation': 'Eur 25,000',
        }
      ]
    }
  },
  methods: {
    handlePreview(file) {
      this.model.imageUrl = URL.createObjectURL(file.raw);
    },
    addExtra(){
      this.tableData.unshift({
          'date': '2020-09-27',
          'valuation': 'Eur 35500',
      })
      this.lineChart1 =  {
        labels: [
          "2016-01-01",
          "2017-01-01",
          "2018-01-01",
          "2019-01-01",
          "2020-01-01",
          '2020-09-27'
        ],
        data: [25000, 25500, 25800, 32250, 35000, 35500],
        color: "#f96332"
      }
    }
  }
}
</script>
<style>
.picture-src {
  width: 60px!important;
  background-color: #0c2646;
  border-radius: 50%;
}
</style>