// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from "react";

import {
  Page as NextPage,
  Block as NextBlock,
  BlockCell as NextBlockCell,
  RowColContainer as NextRowColContainer,
  Row as NextRow,
  Col as NextCol,
  P as NextP,
  PageHeader as NextPageHeader,
} from "@alifd/pro-layout/lib/index.js";

import { ProCard, ColumnChart, ProTable } from "@alifd/fusion-ui/lib/index.js";

import { NextText } from "@alilc/lowcode-materials/lib/index.js";

import { createFetchHandler as __$$createFetchRequestHandler } from "@alilc/lowcode-datasource-fetch-handler";

import { create as __$$createDataSourceEngine } from "@alilc/lowcode-datasource-engine/runtime";

import utils, { RefsManager } from "../../utils";

import * as __$$i18n from "../../i18n";

import "./index.css";

class $$Page extends React.Component {
  _context = this;

  _dataSourceConfig = this._defineDataSourceConfig();
  _dataSourceEngine = __$$createDataSourceEngine(this._dataSourceConfig, this, {
    runtimeConfig: true,
    requestHandlersMap: { fetch: __$$createFetchRequestHandler() },
  });

  get dataSourceMap() {
    return this._dataSourceEngine.dataSourceMap || {};
  }

  reloadDataSource = async () => {
    await this._dataSourceEngine.reloadDataSource();
  };

  constructor(props, context) {
    super(props);

    this.utils = utils;

    this._refsManager = new RefsManager();

    __$$i18n._inject2(this);

    this.state = { text: "outer", isShowDialog: false };
  }

  $ = (refName) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName) => {
    return this._refsManager.getAll(refName);
  };

  _defineDataSourceConfig() {
    const _this = this;
    return {
      list: [
        {
          type: "fetch",
          isInit: function () {
            return true;
          },
          options: function () {
            return {
              params: {},
              method: "GET",
              isCors: true,
              timeout: 5000,
              headers: {},
              uri: "mock/info.json",
            };
          },
          id: "info",
          shouldFetch: function () {
            console.log("should fetch.....");
            return true;
          },
        },
      ],
    };
  }

  componentWillUnmount() {
    console.log("will unmount");
  }

  testFunc() {
    console.log("test func");
  }

  onClick() {
    this.setState({
      isShowDialog: true,
    });
  }

  closeDialog() {
    this.setState({
      isShowDialog: false,
    });
  }

  componentDidMount() {
    this._dataSourceEngine.reloadDataSource();

    console.log("did mount");
  }

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <div
        ref={this._refsManager.linkRef("outerView")}
        style={{ height: "100%" }}
      >
        <NextPage
          headerDivider={true}
          minHeight="100vh"
          presetNav={true}
          presetAside={true}
          footer={false}
          nav={false}
          aside={false}
          placeholderStyle={{ gridRowEnd: "span 1", gridColumnEnd: "span 12" }}
          headerProps={{ background: "surface" }}
          header={
            <NextPageHeader style={{ background: "#ffffff", padding: "" }}>
              <NextRowColContainer rowGap={20} colGap={20}>
                <NextRow>
                  <NextCol
                    colSpan={1}
                    justifyContent="flex-start"
                    ref={this._refsManager.linkRef("nextcol-fc6b87d2")}
                  >
                    <NextP
                      wrap={false}
                      type="body2"
                      verAlign="middle"
                      textSpacing={true}
                      align="left"
                      ref={this._refsManager.linkRef("nextp-ea5c04c7")}
                    >
                      <NextText
                        type="h5"
                        mark={false}
                        code={false}
                        delete={false}
                        underline={false}
                        strong={false}
                      >
                        {__$$eval(() => this.state.info?.info)}
                      </NextText>
                    </NextP>
                  </NextCol>
                </NextRow>
              </NextRowColContainer>
            </NextPageHeader>
          }
          isTab={false}
          contentAlignCenter={false}
          contentProps={{ style: { background: "rgba(255,255,255,0)" } }}
          ref={this._refsManager.linkRef("nextpage-5794903d")}
        >
          <ProCard
            title="柱状图"
            hasDivider={true}
            isFillContainer={true}
            loading={false}
            bodyPadding=""
            hasCollapse={false}
            text={true}
            visibleButtonCount={3}
            operationConfig={{ align: "center" }}
            operations={[]}
            ref={this._refsManager.linkRef("procard-cd965da6")}
          >
            <ColumnChart
              data={[
                { year: "1991", value: 72345678 },
                { year: "1992", value: 4321132 },
                { year: "1993", value: 33121112.5 },
                { year: "1994", value: 45227221 },
                { year: "1995", value: 4321221.9 },
                { year: "1996", value: 6322121 },
                { year: "1997", value: 78312213 },
                { year: "1998", value: 4192312 },
                { year: "1999", value: 6212332 },
                { year: "2000", value: 3192312 },
              ]}
              xField="year"
              yField="value"
              color="#0079f2"
              label={{ visible: true, position: "middle" }}
              cardProps={{ visibleButtonCount: 3 }}
              ref={this._refsManager.linkRef("columnchart-42a0f43f")}
            />
          </ProCard>
          <NextBlock
            placeholderStyle={{ height: "100%" }}
            noPadding={false}
            noBorder={false}
            title="区域标题"
            rowGap={20}
            colGap={20}
            background="surface"
            layoutmode="O"
            strict={true}
            colSpan={12}
            rowSpan={1}
            mode="transparent"
            childTotalColumns={12}
          >
            <NextBlockCell
              colSpan={12}
              rowSpan={1}
              mode="procard"
              isAutoContainer={true}
              title="区块标题"
              hasDivider={true}
              loading={false}
              bodyPadding=""
              hasCollapse={false}
              text={true}
              visibleButtonCount={3}
              operationConfig={{ align: "center" }}
              operations={[]}
            >
              <NextRowColContainer rowGap={20} colGap={20}>
                <NextRow>
                  <NextCol colSpan={1} justifyContent="flex-start">
                    <NextP
                      wrap={false}
                      type="body2"
                      verAlign="middle"
                      textSpacing={true}
                      align="left"
                    >
                      <ProTable
                        dataSource={[
                          {
                            id: "id-2f5DdE2b-0",
                            date: "2013-06-12",
                            percent: 1.862,
                            documentAmount: 2022,
                            currency: "CNY",
                            company: "支付宝科技有限公司",
                          },
                          {
                            id: "id-2f5DdE2b-1",
                            date: "2013-06-12",
                            percent: 1.862,
                            documentAmount: 2022,
                            currency: "CNY",
                            company: "支付宝科技有限公司",
                          },
                        ]}
                        actionColumnButtons={{
                          dataSource: [
                            { children: "查看", type: "primary" },
                            {
                              children: "编辑",
                              type: "primary",
                              disabled: true,
                            },
                            { children: "删除", type: "primary" },
                          ],
                          text: true,
                          visibleButtonCount: 3,
                        }}
                        actionBarButtons={{
                          dataSource: [
                            { type: "primary", children: "操作一" },
                            { type: "normal", children: "操作二" },
                          ],
                          visibleButtonCount: 3,
                        }}
                        paginationProps={{
                          pageSize: 20,
                          current: 1,
                          hidden: false,
                        }}
                        settingButtons={true}
                        columns={[
                          {
                            title: "公司",
                            dataIndex: "company",
                            width: 160,
                            formatType: "link",
                            searchable: true,
                          },
                          {
                            title: "单据金额",
                            dataIndex: "documentAmount",
                            formatType: "money",
                          },
                          {
                            title: "币种",
                            dataIndex: "currency",
                            formatType: "currency",
                            filters: [
                              { label: "CNY", value: "CNY" },
                              { label: "USD", value: "USD" },
                              { label: "JPY", value: "JPY" },
                              { label: "HKD", value: "HKD" },
                            ],
                            filterMode: "multiple",
                            explanation: "提示信息",
                            width: 110,
                          },
                          {
                            title: "完成进度",
                            dataIndex: "percent",
                            formatType: "progress",
                          },
                          {
                            title: "到账日期",
                            dataIndex: "date",
                            formatType: "date",
                          },
                        ]}
                        actionColumnProps={{ title: "操作", width: 120 }}
                        indexColumn={false}
                        hasBorder={false}
                        isZebra={false}
                        fixedHeader={false}
                        size="medium"
                      />
                    </NextP>
                  </NextCol>
                </NextRow>
              </NextRowColContainer>
            </NextBlockCell>
          </NextBlock>
          <NextBlock
            placeholderStyle={{ height: "100%" }}
            noPadding={false}
            noBorder={false}
            title="区域标题"
            rowGap={20}
            colGap={20}
            background="surface"
            layoutmode="O"
            strict={true}
            colSpan={12}
            rowSpan={1}
            mode="transparent"
            childTotalColumns={12}
            ref={this._refsManager.linkRef("nextblock-f69c3404")}
          >
            <NextBlockCell
              colSpan={12}
              rowSpan={1}
              mode="procard"
              isAutoContainer={true}
              title="区块标题"
              hasDivider={true}
              loading={false}
              bodyPadding=""
              hasCollapse={false}
              text={true}
              visibleButtonCount={3}
              operationConfig={{ align: "center" }}
              operations={[]}
            >
              <NextRowColContainer rowGap={20} colGap={20}>
                <NextRow>
                  <NextCol colSpan={1} />
                </NextRow>
              </NextRowColContainer>
            </NextBlockCell>
          </NextBlock>
          <NextBlock
            placeholderStyle={{ height: "100%" }}
            noPadding={false}
            noBorder={false}
            title="区域标题"
            rowGap={20}
            colGap={20}
            background="surface"
            layoutmode="O"
            strict={true}
            colSpan={12}
            rowSpan={1}
            mode="transparent"
            childTotalColumns={12}
          >
            <NextBlockCell
              colSpan={12}
              rowSpan={1}
              mode="procard"
              isAutoContainer={true}
              title="区块标题"
            >
              <NextRowColContainer rowGap={20} colGap={20}>
                <NextRow>
                  <NextCol colSpan={1} />
                </NextRow>
              </NextRowColContainer>
            </NextBlockCell>
          </NextBlock>
        </NextPage>
      </div>
    );
  }
}

export default $$Page;

function __$$eval(expr) {
  try {
    return expr();
  } catch (error) {}
}

function __$$evalArray(expr) {
  const res = __$$eval(expr);
  return Array.isArray(res) ? res : [];
}

function __$$createChildContext(oldContext, ext) {
  const childContext = {
    ...oldContext,
    ...ext,
  };
  childContext.__proto__ = oldContext;
  return childContext;
}
