import React, { Component } from "react";
import { Tile, Icon, Button, Message } from "tinper-bee";
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
      .post("/enterprise/listenterbyuserid", {
        params: {}
      })
      .then(function(response) {
        console.log(response.data);
        // self.setState({
        //   getApp : response.data.data,
        //   isLoading : false
        // });
      })
      .catch(function(error) {
        console.log(error);
        Message.create({ content: "数据请求失败", color: "danger" });
      });
  };
  render() {
    return (
      <div className="body">
        <h5>全部企业（共3个）</h5>
        <div className="content">
          <Tile className="tile-content" Component="a" href="baidu">
            <Icon type="uf-plus" />
            <p>新建云数据中心</p>
          </Tile>
          <Tile className="tile-content">
            <img className="logo" src="123.jpg" />
            <div className="content-title">
              <h5>磁贴标题</h5>
              <span className="title-badge process">申请认证中...</span>
            </div>
            <p>进度</p>
            <Button shape="border">border</Button>
          </Tile>
          <Tile className="tile-content">
            <div className="content-title">
              <h5>磁贴标题</h5>
              <span className="title-badge disabled">未认证</span>
            </div>
            <p>进度</p>
          </Tile>
          <Tile className="tile-content">
            <img className="logo" src="123.jpg" />
            <div className="content-title">
              <h5>磁贴标题</h5>
              <span className="title-badge able">已认证</span>
            </div>
            <p>进度</p>
          </Tile>
        </div>
      </div>
    );
  }
}

export default App;
