import React, { Component } from "react";
import { Icon, Tile, Button } from "tinper-bee";
import axios from "axios";
import "./companyList.css";

class CompanyList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let listItems = this.props.list.map(item => {
      let style = "disabled",
        text = "未认证";
      switch (item.state) {
        case "auditing":
          style = "process";
          text = "申请认证中...";
          break;
        case "active":
          style = "able";
          text = "已认证";
          break;
        case "inactive":
          style = "process";
          text = "认证未通过";
          break;
      }
      return (<Tile className="tile-content">
        <img className="logo" src={item.logo} />
        <div className="content-title">
          <h5>
            {item.name}
          </h5>
          <span className={`title-badge ${style}`}>{text}</span>
        </div>
        <p>
          {item.number}个云数据中心
        </p>
        <Button shape="border">立即认证</Button>
      </Tile>)
    });

    return (
      <div className="list-content">
        <Tile className="tile-content" Component="a" href="baidu">
          <Icon type="uf-plus" />
          <p>新建云数据中心</p>
        </Tile>
        {listItems}
      </div>
    );
  }
}

export default CompanyList;
