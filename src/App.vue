<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <!-- <button @click="runSql('SELECT COUNT(*) FROM sentences')">
      SELECT COUNT(*) FROM mytable
    </button>
    <button @click="runSql('SELECT * FROM sentences')">
      SELECT * FROM mytable
    </button> -->
    
    <!-- <pre>{{ result }}</pre> -->
    <!-- <img src="http://ww2.sinaimg.cn/large/006cSmwjly1h7g5p1dx23j30u011zth4.jpg" referrerpolicy="no-referrer"/> -->

    <el-container style=" border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>EFT</template>
            <el-menu-item-group>
              <template slot="title">微博</template>
              <el-menu-item v-for="(item,i) in weiboNavList" :key="i" :index="item.name">
                  {{ item.navItem }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>句子</template>
            <el-menu-item-group>
              <template slot="title">情感</template>
              <el-menu-item v-for="(item,i) in sentenceNavList" :key="i" :index="item.name" @click="queryber(item.name)">
                  {{ item.navItem }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container style="height: calc(100vh - 20px)"> 
        <el-header style="text-align: right; font-size: 12px">
          <el-input
            style="width: 200px; margin-right: 15px"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="queryParams.searchText"
            clearable
            @change="queryByText">
          </el-input>
          
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <el-table :data="result">
            <el-table-column prop="date" label="日期" width="150" :formatter="formatDate">
            </el-table-column>
            <el-table-column prop="text" label="内容" v-if="!isEFT">
            </el-table-column>
            <el-table-column prop="content" label="内容2" v-if="isEFT">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { createDbWorker } from "sql.js-httpvfs";

// import HelloWorld from "@/components/HelloWorld.vue";

const publicPath = process.env.NODE_ENV === "production" ? "/ETFlog/" : "/";

const workerUrl = new URL(
  `${publicPath}sql.js-httpvfs/sqlite.worker.js`,
  import.meta.url
);
const wasmUrl = new URL(
  `${publicPath}sql.js-httpvfs/sql-wasm.wasm`,
  import.meta.url
);

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      result: undefined,
      weiboNavList: [
        {name:'etf',navItem:'ETF拯救世界'},
        {name:'er',navItem:'二级市场捡辣鸡冠军'}
      ],
      sentenceNavList: [
        {name:'sentences',navItem:'短句'},
        {name:'story',navItem:'故事'}
      ],
      /** 是否EFT */
      isEFT: false,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        table: undefined,
        searchText: undefined
      }
    };
  },
  async mounted() {

  },
  async created() {
    this.worker = await createDbWorker(
      [
        {
          from: "inline",
          config: {
            serverMode: "full",
            url: `${publicPath}db/ber.db`,
            requestChunkSize: 4096,
          },
        },
      ],
      workerUrl.toString(),
      wasmUrl.toString()
    );

    // this.runSql("SELECT name _id FROM sqlite_master WHERE type ='table'");
    this.runSql("SELECT * FROM sentences limit 1,10");
  },
  methods: {
    /** 运行sql语句 */
    async runSql(sql) {
      this.result = await this.worker.db.query(sql);
    },
    /** 查询 */
    async queryber(table) {
      this.isEFT = false;
      var sql = 'SELECT * FROM ' + table;
      this.queryParams.table = table;
      this.result = await this.worker.db.query(sql);
    },
    /** 搜索 */
    async queryByText(){
      var start = (this.queryParams.pageNum - 1) * this.queryParams.pageSize;
      var sql = '';
      if(this.queryParams.table == 'weibo') {
        sql = 'SELECT * FROM ' + this.queryParams.table + ' WHERE content like "%' + this.queryParams.searchText + '%" LIMIT ' + start + ', ' + this.queryParams.pageSize;
      } else {
        sql = 'SELECT * FROM ' + this.queryParams.table + ' WHERE text like "%' + this.queryParams.searchText + '%" LIMIT ' + start + ', ' + this.queryParams.pageSize;
      }
      console.log(sql);
      this.result = await this.worker.db.query(sql);
    },
    /** 格式时间 */
    formatDate(row, column) {
      // 获取单元格数据
      let data = row[column.property]
      if(data == null) {
          return null
      }
      let dt = new Date(data)
      return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
    },
  },
  watch: {
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
