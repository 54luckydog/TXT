//FileName:dbcenter_get_store_list.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码

const TAG = 'DBCENTER_GET_STORE_LIST';
const Log = GS.Log.create(TAG);
let getStoreListRequest = require('farm/net/net_get_store_list.js');

class DbGetStoreList{
    
    globalData = {
        "items":[
            {
                "name":this.reqData.name,
                "id":this.reqData.id,
                "type":this.reqData.type,
                "desc":this.reqData.desc,
                "value":this.reqData.value,
            }
        ]
    };

    getStoreListReq = getStoreListRequest.getStoreListRequest;
    constructor() {
        let getStoreList = new getStoreListReq();
        this.reqData = getStoreList.request();
    };

    get getData() {
        Log.debug("获取商店列表数据")
        return this.globalData
    };

}

module.exports = DbGetStoreList