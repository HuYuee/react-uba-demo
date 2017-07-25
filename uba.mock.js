module.exports = {
  "GET": [{
    "/apptenant/web/tenant/datecenters": "./mock/test.json"
  },{
    "/apptenant/web/tenant/u8apps": "./mock/web/tenant/u8apps.json"
  }],
  "POST": [{
    "/User/Post": "./mock/test.json"
  },
      {
          "/apptenant/web/tenant/json/getUsersByTenantId": "./mock/UserManage/UserList.json"
      }]
}
