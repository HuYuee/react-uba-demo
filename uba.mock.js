module.exports = {
  GET: [
    {
      "/apptenant/web/tenant/datecenters": "./mock/test.json"
    },
    {
      "/apptenant/web/tenant/u8apps": "./mock/web/tenant/u8apps.json"
    }
  ],
  POST: [
    {
      "/enterprise/listenterbyuserid": "./mock/test.json"
    },
    {
      "/enterprise/enteradminlist":"./mock/test1.json"
    },
    {
      "/enterprise/clouddatacenterlist":"./mock/test2.json"
    }
  ]
};
