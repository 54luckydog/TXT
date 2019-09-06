//FileName:dbcenter_get_grand.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码

const TAG = 'DBCENTER_GET_GRAND';
const Log = GS.Log.create(TAG);
let getGrandRequest = require('farm/net/net_get_grand.js');

class DbGetGrand{
    globalData = {
       
    };

    getGrandReq = getGrandRequest.getGrandRequest;
    constructor(dapengId,grandId) {
        let getGrand = new getGrandReq(dapengId,grandId);
        this.reqData = getGrand.request();
    };

    get getData() {
        Log.debug("返回购买土地数据")
        return this.globalData
    };

}

module.exports = DbGetGrand