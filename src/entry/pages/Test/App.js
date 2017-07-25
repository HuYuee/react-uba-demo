import React, { Component } from "react";
import { Message, Loading } from "tinper-bee";
import CompanyList from "./companyList.js";
import axios from "axios";
import "./App.css";
import "tinper-bee/assets/tinper-bee.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getList: [],
      isLoading: true
    };
  }
  componentWillMount() {
    this.init();
  }
  componentDidMount() {}

  componentDidUpdate() {
    //this.init();
  }

  init = () => {
    let self = this;
    axios
      .post("/enterprise/listenterbyuserid", {
        params: {}
      })
      .then(function(response) {
        self.setState({
          getList: response.data.enterprises,
          isLoading: false
        });
      })
      .catch(function(error) {
        console.log(error);
        Message.create({ content: "数据请求失败", color: "danger" });
      });
  };
  renderCloudDataCenter() {
    if (this.state.isLoading) {
      return <Loading loadingType="line" />;
    }
    if (this.state.getList.length != 0) {
      return <CompanyList onRefresh={this.init} list={this.state.getList} />;
    }
  }

  render() {
    return (
      <div className="body">
        <h5>
          全部企业（共{this.state.getList.length}个）
        </h5>
          {this.renderCloudDataCenter()}
      </div>
    );
  }
}

export default App;
