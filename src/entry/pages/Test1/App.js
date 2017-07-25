import React, { Component } from "react";
import { Loading,Message, Table, Button } from "tinper-bee";
import axios from "axios";
import "./App.css";
import "tinper-bee/assets/tinper-bee.css";

const columns = [
  { title: "姓名", dataIndex: "adminName", key: "adminName", width: 100 },
  { title: "部门", dataIndex: "department", key: "department", width: 100 },
  { title: "职位", dataIndex: "position", key: "position", width: 200 },
  { title: "联系方式", dataIndex: "connact", key: "connact", width: 200 },
  { title: "当前状态", dataIndex: "state", key: "state", width: 200 },
  {
    title: "操作",
    dataIndex: "",
    key: "f",
    render() {
      return <a href="#">一些操作</a>;
    }
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getList: [],
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

  init = () => {
    let self = this;
    axios
      .post("/enterprise/enteradminlist", {
        params: {}
      })
      .then(function(response) {
        self.setState({
          getList: response.data.enterpriseAdmins,
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
          adminName: item.adminName,
          department: item.department,
          position: item.position,
          connact: item.connact,
          state: item.state,
          key: item.id
        });
      });
      return (
        <Table
          onRefresh={this.init}
          columns={columns}
          data={data}
        />
      );
    }
  }
  render() {
    return (
      <div className="manage-list">
        <div className="manage-title">
          <h1 className="">企业管理员</h1>
          <Button className="title-btn" colors="success">邀请管理员</Button>
        </div>

        {this.renderCloudDataCenter()}
      </div>
    );
  }
}

export default App;
