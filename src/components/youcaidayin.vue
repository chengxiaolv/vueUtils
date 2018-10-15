`<template>
  <div class="credential-particulars-wrapper">
    <div class="zc_dialog clear">
      <!-- <el-dialog :visible.sync="credentialShow" width="960px" center> -->
        <div class="dialog-header">
          <div class="f-l header-left">
            查看凭证： 天津中审联会计事务所项目
          </div>
          <div class="f-r header-right" >
            第
            <el-button size="mini" @click="reduceNum">-</el-button>
            <span class="count-sapn">
              <span>{{minNum}}</span>
              <span>/</span>
              <span>{{maxNum}}</span>
            </span>
            <el-button size="mini" @click="plusBtn">+</el-button>
            <div class="printer-btn" @click="printer">
              <span class="el-icon-printer"></span>打印
            </div>
          </div>
        </div>
        <div class="dialog-title">
          <div class="title">收款凭证</div>
          <div class="date">2018年 09月 13日</div>
        </div>
        <div class="dialog-table">
          <div class="table-head clear">
            <span class="f-l">核算单位：<span class="ml-10">天津中审联有限责任会计事务所</span></span>
            <span class="f-r">第0001号——001/002</span>
          </div>
          <div class="tabel-content clear">
            <el-table :data="credentialData">
              <!-- <el-table-column prop="date" label="摘要" width="207"> -->
              <el-table-column label="摘要" width="207">
                <template slot-scope="scope">
                  <!-- <div>
                    <span>{{scope.row.date}}</span>
                  </div> -->
                  <div>
                    <span>附单数据: &nbsp;2 张 &nbsp;&nbsp;</span>
                    <span class="el-icon-printer" style="color:#3BA4EC;cursor: pointer;" @click="previewClick"></span>
                  </div>
                </template>
              </el-table-column>
              <!-- <el-table-column prop="date" label="科目名称" width="207"> -->
              <el-table-column label="科目名称" width="207">
                <template slot-scope="scope">
                  <div>
                    <span>{{scope.row.date}}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="借方金额" width="250">
                <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                <el-table-column prop="wan" label="万" width="22"></el-table-column>
                <el-table-column prop="qian" label="千" width="22"></el-table-column>
                <el-table-column prop="bai" label="百" width="22"></el-table-column>
                <el-table-column prop="shi" label="十" width="22"></el-table-column>
                <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                <el-table-column prop="fen" label="分" width="22"></el-table-column>
              </el-table-column>
              <el-table-column label="贷方金额" width="250">
                <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                <el-table-column prop="wan" label="万" width="22"></el-table-column>
                <el-table-column prop="qian" label="千" width="22"></el-table-column>
                <el-table-column prop="bai" label="百" width="22"></el-table-column>
                <el-table-column prop="shi" label="十" width="22"></el-table-column>
                <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                <el-table-column prop="fen" label="分" width="22"></el-table-column>
              </el-table-column>
            </el-table>
          </div>
          <el-form class="h-auto mt-10" label-position='left' size="mini">
            <el-row class="fl-p0">
              <el-col :span='3'>
                <el-form-item label='财务主管：'>
                  <div class="form-info"></div>
                </el-form-item>
              </el-col>
              <el-col :span='3' :offset="1">
                <el-form-item label='记账：'>
                  <div class="form-info"></div>
                </el-form-item>
              </el-col>
              <el-col :span='3' :offset="1">
                <el-form-item label='复核：'>
                  <div class="form-info" :title="userName">{{userName}}</div>
                </el-form-item>
              </el-col>
              <el-col :span='3' :offset="1">
                <el-form-item label='出纳：'>
                  <div class="form-info" :title="userName">{{userName}}</div>
                </el-form-item>
              </el-col>
              <el-col :span='3' :offset="1">
                <el-form-item label='制单：'>
                  <div class="form-info" title="中审联">中审联</div>
                </el-form-item>
              </el-col>
              <el-col :span='3' :offset="1">
                <el-form-item label='财经办人：'>
                  <div class="form-info" :title="userName">{{userName}}</div>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      <!-- </el-dialog>   -->
    </div>

    <viewer @inited="inited" ref="viewer" :images="images">
      <template scope="scope">
        <img v-for="src in scope.images" :src="src" :key="src" style="display: none;">
      </template>
    </viewer>

    <div class="printMain">
      <div class="Occlusion"></div>
      <div class="printContent zc_dialog" id="credentialTable" >
        <div class="item">
          <div class="dialog-title">
            <div class="title">收款凭证</div>
            <div class="date">2018年 09月 13日</div>
          </div>
          <div class="dialog-table" id="credentialTable">
            <div class="table-head clear">
              <span class="f-l">核算单位：<span class="ml-10">天津中审联有限责任会计事务所</span></span>
              <span class="f-r">第0001号——001/002</span>
            </div>
            <div class="tabel-content clear">
              <el-table :data="credentialData">
                <!-- <el-table-column prop="date" label="摘要" width="207"> -->
                <el-table-column label="摘要" width="207">
                  <template slot-scope="scope">
                    <!-- <div>
                      <span>{{scope.row.date}}</span>
                    </div> -->
                    <div>
                      <span>附单数据: &nbsp;2 张 &nbsp;&nbsp;</span>
                      <span class="el-icon-printer" style="color:#3BA4EC;cursor: pointer;" @click="previewClick"></span>
                    </div>
                  </template>
                </el-table-column>
                <!-- <el-table-column prop="date" label="科目名称" width="207"> -->
                <el-table-column label="科目名称" width="207">
                  <template slot-scope="scope">
                    <div>
                      <span>{{scope.row.date}}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="借方金额" width="250">
                  <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                  <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                  <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                  <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                  <el-table-column prop="wan" label="万" width="22"></el-table-column>
                  <el-table-column prop="qian" label="千" width="22"></el-table-column>
                  <el-table-column prop="bai" label="百" width="22"></el-table-column>
                  <el-table-column prop="shi" label="十" width="22"></el-table-column>
                  <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                  <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                  <el-table-column prop="fen" label="分" width="22"></el-table-column>
                </el-table-column>
                <el-table-column label="贷方金额" width="250">
                  <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                  <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                  <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                  <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                  <el-table-column prop="wan" label="万" width="22"></el-table-column>
                  <el-table-column prop="qian" label="千" width="22"></el-table-column>
                  <el-table-column prop="bai" label="百" width="22"></el-table-column>
                  <el-table-column prop="shi" label="十" width="22"></el-table-column>
                  <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                  <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                  <el-table-column prop="fen" label="分" width="22"></el-table-column>
                </el-table-column>
              </el-table>
            </div>
            <el-form class="h-auto mt-10" label-position='left' size="mini">
              <el-row class="fl-p0">
                <el-col :span='3'>
                  <el-form-item label='财务主管：'>
                    <div class="form-info"></div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='记账：'>
                    <div class="form-info"></div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='复核：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='出纳：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='制单：'>
                    <div class="form-info" title="中审联">中审联</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='财经办人：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>

        <div class="item">
          <div class="dialog-title">
            <div class="title">收款凭证</div>
            <div class="date">2018年 09月 13日</div>
          </div>
          <div class="dialog-table" id="credentialTable">
            <div class="table-head clear">
              <span class="f-l">核算单位：<span class="ml-10">天津中审联有限责任会计事务所</span></span>
              <span class="f-r">第0001号——001/002</span>
            </div>
            <div class="tabel-content clear">
              <el-table :data="credentialData">
                <!-- <el-table-column prop="date" label="摘要" width="207"> -->
                <el-table-column label="摘要" width="207">
                  <template slot-scope="scope">
                    <!-- <div>
                      <span>{{scope.row.date}}</span>
                    </div> -->
                    <div>
                      <span>附单数据: &nbsp;2 张 &nbsp;&nbsp;</span>
                      <span class="el-icon-printer" style="color:#3BA4EC;cursor: pointer;" @click="previewClick"></span>
                    </div>
                  </template>
                </el-table-column>
                <!-- <el-table-column prop="date" label="科目名称" width="207"> -->
                <el-table-column label="科目名称" width="207">
                  <template slot-scope="scope">
                    <div>
                      <span>{{scope.row.date}}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="借方金额" width="250">
                  <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                  <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                  <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                  <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                  <el-table-column prop="wan" label="万" width="22"></el-table-column>
                  <el-table-column prop="qian" label="千" width="22"></el-table-column>
                  <el-table-column prop="bai" label="百" width="22"></el-table-column>
                  <el-table-column prop="shi" label="十" width="22"></el-table-column>
                  <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                  <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                  <el-table-column prop="fen" label="分" width="22"></el-table-column>
                </el-table-column>
                <el-table-column label="贷方金额" width="250">
                  <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                  <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                  <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                  <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                  <el-table-column prop="wan" label="万" width="22"></el-table-column>
                  <el-table-column prop="qian" label="千" width="22"></el-table-column>
                  <el-table-column prop="bai" label="百" width="22"></el-table-column>
                  <el-table-column prop="shi" label="十" width="22"></el-table-column>
                  <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                  <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                  <el-table-column prop="fen" label="分" width="22"></el-table-column>
                </el-table-column>
              </el-table>
            </div>
            <el-form class="h-auto mt-10" label-position='left' size="mini">
              <el-row class="fl-p0">
                <el-col :span='3'>
                  <el-form-item label='财务主管：'>
                    <div class="form-info"></div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='记账：'>
                    <div class="form-info"></div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='复核：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='出纳：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='制单：'>
                    <div class="form-info" title="中审联">中审联</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='财经办人：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>

        <div class="item">
          <div class="dialog-title">
            <div class="title">收款凭证</div>
            <div class="date">2018年 09月 13日</div>
          </div>
          <div class="dialog-table" id="credentialTable">
            <div class="table-head clear">
              <span class="f-l">核算单位：<span class="ml-10">天津中审联有限责任会计事务所</span></span>
              <span class="f-r">第0001号——001/002</span>
            </div>
            <div class="tabel-content clear">
              <el-table :data="credentialData">
                <!-- <el-table-column prop="date" label="摘要" width="207"> -->
                <el-table-column label="摘要" width="207">
                  <template slot-scope="scope">
                    <!-- <div>
                      <span>{{scope.row.date}}</span>
                    </div> -->
                    <div>
                      <span>附单数据: &nbsp;2 张 &nbsp;&nbsp;</span>
                      <span class="el-icon-printer" style="color:#3BA4EC;cursor: pointer;" @click="previewClick"></span>
                    </div>
                  </template>
                </el-table-column>
                <!-- <el-table-column prop="date" label="科目名称" width="207"> -->
                <el-table-column label="科目名称" width="207">
                  <template slot-scope="scope">
                    <div>
                      <span>{{scope.row.date}}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="借方金额" width="250">
                  <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                  <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                  <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                  <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                  <el-table-column prop="wan" label="万" width="22"></el-table-column>
                  <el-table-column prop="qian" label="千" width="22"></el-table-column>
                  <el-table-column prop="bai" label="百" width="22"></el-table-column>
                  <el-table-column prop="shi" label="十" width="22"></el-table-column>
                  <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                  <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                  <el-table-column prop="fen" label="分" width="22"></el-table-column>
                </el-table-column>
                <el-table-column label="贷方金额" width="250">
                  <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                  <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                  <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                  <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                  <el-table-column prop="wan" label="万" width="22"></el-table-column>
                  <el-table-column prop="qian" label="千" width="22"></el-table-column>
                  <el-table-column prop="bai" label="百" width="22"></el-table-column>
                  <el-table-column prop="shi" label="十" width="22"></el-table-column>
                  <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                  <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                  <el-table-column prop="fen" label="分" width="22"></el-table-column>
                </el-table-column>
              </el-table>
            </div>
            <el-form class="h-auto mt-10" label-position='left' size="mini">
              <el-row class="fl-p0">
                <el-col :span='3'>
                  <el-form-item label='财务主管：'>
                    <div class="form-info"></div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='记账：'>
                    <div class="form-info"></div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='复核：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='出纳：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='制单：'>
                    <div class="form-info" title="中审联">中审联</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='财经办人：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>

        <div class="item">
          <div class="dialog-title">
            <div class="title">收款凭证</div>
            <div class="date">2018年 09月 13日</div>
          </div>
          <div class="dialog-table" id="credentialTable">
            <div class="table-head clear">
              <span class="f-l">核算单位：<span class="ml-10">天津中审联有限责任会计事务所</span></span>
              <span class="f-r">第0001号——001/002</span>
            </div>
            <div class="tabel-content clear">
              <el-table :data="credentialData">
                <!-- <el-table-column prop="date" label="摘要" width="207"> -->
                <el-table-column label="摘要" width="207">
                  <template slot-scope="scope">
                    <!-- <div>
                      <span>{{scope.row.date}}</span>
                    </div> -->
                    <div>
                      <span>附单数据: &nbsp;2 张 &nbsp;&nbsp;</span>
                      <span class="el-icon-printer" style="color:#3BA4EC;cursor: pointer;" @click="previewClick"></span>
                    </div>
                  </template>
                </el-table-column>
                <!-- <el-table-column prop="date" label="科目名称" width="207"> -->
                <el-table-column label="科目名称" width="207">
                  <template slot-scope="scope">
                    <div>
                      <span>{{scope.row.date}}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="借方金额" width="250">
                  <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                  <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                  <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                  <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                  <el-table-column prop="wan" label="万" width="22"></el-table-column>
                  <el-table-column prop="qian" label="千" width="22"></el-table-column>
                  <el-table-column prop="bai" label="百" width="22"></el-table-column>
                  <el-table-column prop="shi" label="十" width="22"></el-table-column>
                  <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                  <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                  <el-table-column prop="fen" label="分" width="22"></el-table-column>
                </el-table-column>
                <el-table-column label="贷方金额" width="250">
                  <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                  <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                  <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                  <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                  <el-table-column prop="wan" label="万" width="22"></el-table-column>
                  <el-table-column prop="qian" label="千" width="22"></el-table-column>
                  <el-table-column prop="bai" label="百" width="22"></el-table-column>
                  <el-table-column prop="shi" label="十" width="22"></el-table-column>
                  <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                  <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                  <el-table-column prop="fen" label="分" width="22"></el-table-column>
                </el-table-column>
              </el-table>
            </div>
            <el-form class="h-auto mt-10" label-position='left' size="mini">
              <el-row class="fl-p0">
                <el-col :span='3'>
                  <el-form-item label='财务主管：'>
                    <div class="form-info"></div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='记账：'>
                    <div class="form-info"></div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='复核：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='出纳：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='制单：'>
                    <div class="form-info" title="中审联">中审联</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='财经办人：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
        
        <div class="item">
          <div class="dialog-title">
            <div class="title">收款凭证</div>
            <div class="date">2018年 09月 13日</div>
          </div>
          <div class="dialog-table" id="credentialTable">
            <div class="table-head clear">
              <span class="f-l">核算单位：<span class="ml-10">天津中审联有限责任会计事务所</span></span>
              <span class="f-r">第0001号——001/002</span>
            </div>
            <div class="tabel-content clear">
              <el-table :data="credentialData">
                <!-- <el-table-column prop="date" label="摘要" width="207"> -->
                <el-table-column label="摘要" width="207">
                  <template slot-scope="scope">
                    <!-- <div>
                      <span>{{scope.row.date}}</span>
                    </div> -->
                    <div>
                      <span>附单数据: &nbsp;2 张 &nbsp;&nbsp;</span>
                      <span class="el-icon-printer" style="color:#3BA4EC;cursor: pointer;" @click="previewClick"></span>
                    </div>
                  </template>
                </el-table-column>
                <!-- <el-table-column prop="date" label="科目名称" width="207"> -->
                <el-table-column label="科目名称" width="207">
                  <template slot-scope="scope">
                    <div>
                      <span>{{scope.row.date}}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="借方金额" width="250">
                  <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                  <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                  <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                  <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                  <el-table-column prop="wan" label="万" width="22"></el-table-column>
                  <el-table-column prop="qian" label="千" width="22"></el-table-column>
                  <el-table-column prop="bai" label="百" width="22"></el-table-column>
                  <el-table-column prop="shi" label="十" width="22"></el-table-column>
                  <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                  <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                  <el-table-column prop="fen" label="分" width="22"></el-table-column>
                </el-table-column>
                <el-table-column label="贷方金额" width="250">
                  <el-table-column prop="yi" label="亿" width="22"></el-table-column>
                  <el-table-column prop="qianwan" label="千" width="22"></el-table-column>
                  <el-table-column prop="baiwan" label="百" width="22"></el-table-column>
                  <el-table-column prop="shiwan" label="十" width="22"></el-table-column>
                  <el-table-column prop="wan" label="万" width="22"></el-table-column>
                  <el-table-column prop="qian" label="千" width="22"></el-table-column>
                  <el-table-column prop="bai" label="百" width="22"></el-table-column>
                  <el-table-column prop="shi" label="十" width="22"></el-table-column>
                  <el-table-column prop="yuan" label="元" width="22"></el-table-column>
                  <el-table-column prop="jiao" label="角" width="22"></el-table-column>
                  <el-table-column prop="fen" label="分" width="22"></el-table-column>
                </el-table-column>
              </el-table>
            </div>
            <el-form class="h-auto mt-10" label-position='left' size="mini">
              <el-row class="fl-p0">
                <el-col :span='3'>
                  <el-form-item label='财务主管：'>
                    <div class="form-info"></div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='记账：'>
                    <div class="form-info"></div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='复核：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='出纳：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='制单：'>
                    <div class="form-info" title="中审联">中审联</div>
                  </el-form-item>
                </el-col>
                <el-col :span='3' :offset="1">
                  <el-form-item label='财经办人：'>
                    <div class="form-info" :title="userName">{{userName}}</div>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import html2canvas from 'html2canvas';
  export default {
    data(){
      return{
        userName: '张三',
        // credentialShow: true,
        credentialData: [{
          date: '银行存款/交行营业部',
          yi: '',
          qianwan: '',
          baiwan: '2',
          shiwan: '3',
          wan: '9',
          qian: '4',
          bai: '5',
          shi: '4',
          yuan: '6',
          jiao: '7',
          fen: '0',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '银行存款/交行营业部',
          yi: '',
          qianwan: '',
          baiwan: '2',
          shiwan: '3',
          wan: '9',
          qian: '4',
          bai: '5',
          shi: '4',
          yuan: '6',
          jiao: '7',
          fen: '0',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '银行存款/交行营业部',
          yi: '',
          qianwan: '',
          baiwan: '2',
          shiwan: '3',
          wan: '9',
          qian: '4',
          bai: '5',
          shi: '4',
          yuan: '6',
          jiao: '7',
          fen: '0',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '银行存款/交行营业部',
          yi: '',
          qianwan: '',
          baiwan: '2',
          shiwan: '3',
          wan: '9',
          qian: '4',
          bai: '5',
          shi: '4',
          yuan: '6',
          jiao: '7',
          fen: '0',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '银行存款/交行营业部',
          yi: '',
          qianwan: '',
          baiwan: '2',
          shiwan: '3',
          wan: '9',
          qian: '4',
          bai: '5',
          shi: '4',
          yuan: '6',
          jiao: '7',
          fen: '0',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '附单数据： 2张',
          yi: '',
          qianwan: '￥',
          baiwan: '2',
          shiwan: '3',
          wan: '9',
          qian: '4',
          bai: '5',
          shi: '4',
          yuan: '6',
          jiao: '7',
          fen: '0',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        images: ['http://img.hb.aicdn.com/8241705253240a41776fe76cbb6330fa96df6f365f143-PqFzAQ_fw658','http://img.hb.aicdn.com/5ac6892bf1196a85443fe22a4b3914942f715f41750f4-MvoHiG_fw658'],
        minNum: 1,
        maxNum: 5,
        itemLenth: 5,
      }
    },
    methods:{
      preview(){
        console.log(1223);
      },
      printer () {
        var self = this
        let content_html = document.getElementById('credentialTable');　
        　　//要转化的div
        let width = content_html.offsetWidth;
        let height = content_html.offsetHeight;
        let offsetTop = content_html.offsetTop;
        let canvas = document.createElement("canvas");
        let context = canvas.getContext('2d');
        let scaleBy = Math.ceil(window.devicePixelRatio);
        canvas.width = width*scaleBy;
        canvas.height = (height+offsetTop)*scaleBy;
        context.scale(scaleBy,scaleBy);
        var opts = {
          allowTaint:true,//允许加载跨域的图片
          tainttest:true, //检测每张图片都已经加载完成
          scale:scaleBy, // 添加的scale 参数
          canvas:canvas, //自定义 canvas
          logging: false, //日志开关，发布的时候记得改成false
          width:width, //dom 原始宽度
          height:height //dom 原始高度
        };
        html2canvas(content_html,opts).then(function (canvas) {
          canvas.style.width = width+"px";
          canvas.style.height = height+"px";
          var image = new Image();
          var imgUri = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream"); // 获取生成的图片的url  
          // console.log(imgUri)
              self.print(imgUri);
      //        let content_html = document.getElementById('poster');　　　　//要转化的div
          // let width = content_html.offsetWidth;
          // let height = content_html.offsetHeight;
              
          });
      },
      print(baseUrl) {

        let img = document.createElement('img')
        img.src = baseUrl
        img.style.display = 'block'
        img.style.width = "100%"

        // console.log(this.itemLenth);

        img.style.height = this.itemLenth * 33.2 + "%" ;
              // img.style.background = 'red'
        let newDiv = document.createElement('div')
        newDiv.style.display = 'block'
        newDiv.style.width = '1300px'
        newDiv.style.height = '900px'
        newDiv.appendChild(img)
        // console.log(newDiv.innerHTML)
  

        setTimeout(() => {
          // document.getElementById('credentialTable').innerHTML = newDiv.innerHTML
          // document.getElementsByTagName('body').innerHTML = newDiv.innerHTML
              // var newStr = "<img src=\""+ imgUri+"\"/>"
              // var form_print = document.getElementById('credentialTable')
              // form_print.style.width = '1300px'
              // form_print.style.height = '900px'
          var newStr = newDiv.innerHTML
          // var newStr = newDiv.innerHTML
          // console.log(newStr)
          var oldStr = document.body.innerHTML
          document.body.innerHTML = newStr
          window.print()
          window.location.reload()
          document.body.innerHTML = oldStr
          
        }, 10);
      },
      previewClick () {
        // this.previewUrl = item.annexUrl;
        this.$viewer.show();
      },
      inited (viewer) {
        this.$viewer = viewer;
      },
      reduceNum(){  //上一页
        if(this.minNum == 1){
          return;
        }
        this.minNum--
      },
      plusBtn(){ //下一页
        if(this.minNum == this.maxNum){
          return
        }
        this.minNum++
      }
    }
  }
</script>
<style scoped lang="scss">
  // @import "../../../static/main.css";
  .credential-particulars-wrapper{
    width: 100%;
    padding-top: 100px;
    height: calc(100% - 100px);
    background-color: #f2f2f2;
    overflow: hidden;
  }
  .zc_dialog {
    width: 960px;
    background-color: #fff;
    padding-top: 8px;
    margin: 0 auto;
    .dialog-header {
      background-color: #E7F1F8;
      // width: 100%;
      height: 40px;
      margin: 8px 20px 8px 20px;
      line-height: 40px;
      .header-left {
        position: relative;
        left: 15px;
      }
      .header-right {
        position: relative;
        right: 15px;
        .count-sapn {
          position: relative;
          top: -3px;
          display: inline-block;
          height: 26px;
          line-height: 26px;
          width: 30px;
          text-align: center;
          margin: 0 -5px;
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #434F58;
          letter-spacing: 0;
          background: #B8D0E1;

        };
        .el-button {
          width: 26px;
          height: 26px;
          font-size: 20px;
          margin-top: 7px;
          padding: 7px;
          line-height: 0.5;
          border: none;
        }
        .printer-btn {
          display: inline-block;
          cursor: pointer;
          font-family: 'PingFangSC,微软雅黑';
          font-size: 14px;
          color: #6F9AE0;
          letter-spacing: 0;
          margin-left: 10px;
          span {
            margin-right: 10px;
          };
        }
      }
    }
    .dialog-title {
      width: 220px;
      margin: 0 auto;
      // text-align: center;
      .title {
        width: 220px;
        height: 50px;
        line-height: 50px;
        font-family: 'PingFangSC,微软雅黑';
        font-size: 36px;
        color: #274253;
        letter-spacing: 0.4em;
        text-indent: 0.4em;
        border-bottom: 2px solid #274253;
      }
      .title + div {
        border-top: solid 1px #274253;
        margin-top: 5px;
        padding-top: 5px;
      }
      .date{
        text-align: center;
        height:40px;
        line-height:40px;
      }
    }
    .dialog-table {
      width: 900px;
      height: 255 px;
      margin: 0px auto;
      .table-head {
        margin: 5px 0;
        font-family: 'PingFangSC,微软雅黑';
        font-size: 13px;
        color: #274253;
        letter-spacing: 0;
      }
    }
  }

  .item{
    border-bottom: dashed 1px #D8D8D8;
    margin-bottom: 5px;
    &:nth-child(3n+0){
      border-bottom: none;
    }
    &:last-child{
       border-bottom: none;
    }
  }
  .printMain{
    background-color: #274253;
    position: relative;
    .Occlusion{
      width: 100%;
      height: 100%;
      background-color: #f2f2f2;
      position: absolute;
      z-index: 999;
    }
  }



  /*文字大小颜色*/
.qd-t {/*强调文字*/
  font-size: 14px;
  color: #16222B;
  cursor: default;
}
.zw-t {/*正文文字*/
  font-size: 14px;
  color: #434F58;
  cursor: default;
}
.cy-t {/*次要文字*/
  font-size: 14px;
  color: #7B868D;
  cursor: default;
}
.ph-t {/*输入提示文字placeholder*/
  font-size: 13px;
  color: #B3B7C8;
  cursor: default;
}
.err-t {/*输入错误提示文字error*/
  font-size: 10px;
  color: #E35F5F;
  cursor: default;
}
.form-info {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #16222B;
  cursor: default;
}
.textarea-info {
  font-size: 14px;
  color: #16222B;
  cursor: default;
}
.error_tip {
  font-size: 10px;
  color: #E35F5F;
  position: absolute;
  margin-top: -5px;
}

/*分隔线颜色*/
.solid {
  height: 0px;
  border: 0.5px solid #D8D8D8;
  margin-bottom: 20px;
}
.dashed {
  height: 0px;
  border: 0.5px dashed #D8D8D8;
  margin-bottom: 20px;
}

[v-cloak] {
  display: none;
}
.al-c {
  text-align: center;
}
.bold {
  font-weight: bold;
}
.c-p {
  cursor: pointer;
}
.lh-0 {
  line-height: 0;
}
.lh-60 {
  line-height: 60px;
}
.center {
  display: block;
  margin: 0 auto;
}
.bg-w {
  background: #fff;
}
.f-l {
  float: left;
}
.f-r {
  float: right;
}
.p-a {
  position: absolute;
}
.w-50p {
  width: 50%;
}
.w-100p {
  width: 100%;
}
.h-auto {
  height: auto;
  overflow: hidden;
}
.h-60 {
  height: 60px;
}
.pr-20 {
  padding-right: 20px;
}

.pl-20 {
  padding-left: 20px;
}
.pl-10 {
  padding-left: 10px;
}
.pb-20 {
  padding-bottom: 20px;
}
.p-0 {
  padding: 0 !important;
}
.p-20-0 {
  padding: 20px 0;
}

.mr-40 {
  margin-right: 40px;
}
.ml-0 {
  margin-left: 0px !important;
}
.ml-5 {
  margin-left: 5px;
}
.ml-10 {
  margin-left: 10px;
}
.ml-15 {
  margin-left: 15px;
}
.ml-20 {
  margin-left: 20px;
}
.ml-30 {
  margin-left: 30px;
}
.ml-40 {
  margin-left: 40px;
}
.ml-50 {
  margin-left: 50px;
}
.ml-80 {
  margin-left: 80px;
}
.ml-100 {
  margin-left: 100px !important;
}
.ml-30p {
  margin-left: 30%;
}
.mr-5 {
  margin-right: 5px;
}
.mr-10 {
  margin-right: 10px;
} 
.mr-20 {
  margin-right: 20px;
}
.mr-30 {
  margin-right: 30px;
}
.mr-50 {
  margin-right: 50px;
}
.mr-80 {
  margin-right: 80px;
}
.mt-10 {
  margin-top: 10px;
} 
.mt-12 {
  margin-top: 12px;
}
.mt-15 {
  margin-top: 15px !important;
}
.mt--22 {
  margin-top: -22px;
}
.mt-20 {
  margin-top: 20px;
}
.mt-25 {
  margin-top: 25px;
}
.mt--25 {
  margin-top: -25px;
}
.mt-30 {
  margin-top: 30px;
}
.mt-35 {
  margin-top: 35px;
}
.mt-40 {
  margin-top: 40px;
}
.mt--130 {
  margin-top: -130px;
}
.mb--06 {
  margin-bottom: -0.6px;
}
.mb-10 {
  margin-bottom: 10px;
}
.mb-20 {
  margin-bottom: 20px;
}
.mb-30 {
  margin-bottom: 30px;
}
.mb-50 {
  margin-bottom: 50px;
}
.mb-150 {
  margin-bottom: 150px;
}
.d-ib {
  display: inline-block;
}
.fs-10 {
  font-size: 10px;
}
.fs-12 {
  font-size: 12px;
}
.fs-13 {
  font-size: 13px;
}
.fs-14 {
  font-size: 14px;
}
.fs-16 {
  font-size: 16px;
}
.fs-18 {
  font-size: 18px;
}
.fs-20 {
  font-size: 20px;
}

.clear::after {
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.clear{
  zoom: 1;
}

.el-p {
  font-size: 14px;
  margin-bottom: 22px;
}
/*.slide-wrapper {
  position: fixed;
  left: 18%;
  top: 63px;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: block;
  background-color: rgba(151, 146, 146, 0.3);
  outline: 0
}*/
.slide-container {
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 3px;
  background-color: #fff;
  z-index: 10;
  overflow-y: auto;
}
/*.slide-toggle {
  width: 36px;
  height: 100px;
  background-color: #fff;
  position: absolute;
  top: 55px;
  left: 20%;
  margin-left: -36px;
  box-shadow: 0 0 2px #AAAAAA;
  
}
.slide-toggle-span {
  width: 24px;
  height: 24px;
  background-color: #fff;
  margin-top: 40px;
  margin-left: 8px;
  font-size: 18px;
}*/
.slide-content {
  margin: 45px 50px 20px;
  border: 1px solid #B3B3B3;
}
.slide-formTittle {
  color: #333333;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}
.slide-footer {

}
</style>


