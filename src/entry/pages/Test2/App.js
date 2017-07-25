import React, { Component } from "react";
import { Loading, Message, Table, Button } from "tinper-bee";
import axios from "axios";
import "./App.css";
import "tinper-bee/assets/tinper-bee.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      { title: "云数据中心名称", dataIndex: "name", key: "name", width: 100 },
      { title: "管理员", dataIndex: "AdminName", key: "AdminName", width: 100 },
      { title: "联系方式", dataIndex: "connact", key: "connact", width: 200 },
      { title: "当前状态", dataIndex: "state", key: "state", width: 200 },
      {
        title: "操作",
        dataIndex: "",
        key: "f",
        render: (text, record, index) => {
          let data = this.state.getList[index];
          let html = "";
          if (data && data.state) {
            switch (data.state) {
              case "待授权":
                return (
                  <div>
                    <Button shape="border" onClick={this.handleAgree(index)}>同意</Button>
                    <Button className="double-btn" shape="border" onClick={this.handleRefuse(index)}>拒绝</Button>
                  </div>
                );
                break;
              case "已同意":
                return  (
                  <Button shape="border" onClick={this.handleRemove(index)}>
                    移除
                  </Button>
                );
                break;
            }
          }
        }
      }
    ];
    this.state = {
      getList: [],
      list: [],
      isLoading: true
    };
  }
  componentWillMount() {}
  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    //this.init();
  }
  handleAgree = (index)=>{
    return () => {
    console.log(index);
    }
  }
  handleRefuse =(index)=>{
    return () => {
    console.log(index);
    }
  }
  handleRemove =(index)=>{
    return () => {
    console.log(index);
    }
  }

  init = () => {
    let self = this;
    axios
      .post("/enterprise/clouddatacenterlist", {
        params: {}
      })
      .then(function(response) {
        self.setState({
          getList: response.data.enterpriseCloudDataCenters,
          isLoading: false
        });
      })
      .catch(function(error) {
        console.log(error);
        Message.create({ content: "数据请求失败", color: "danger" });
      });
  };
  renderCloudDataCenter() {
    let data = [];
    if (this.state.isLoading) {
      return <Loading loadingType="line" />;
    }
    if (this.state.getList.length != 0) {
      let list = this.state.getList;
      list.map(item => {
        data.push({
          name: item.name,
          AdminName: item.AdminName,
          connact: item.connact,
          state: item.state,
          key: item.id
        });
      });
      return <Table onRefresh={this.init} columns={this.columns} data={data} />;
    }
  }
  render() {
    return (
      <div className="manage-list">
        <div className="manage-title">
          <h1 className="">云数据中心管理</h1>
        </div>

        {this.renderCloudDataCenter()}
      </div>
    );
  }
}

export default App;
