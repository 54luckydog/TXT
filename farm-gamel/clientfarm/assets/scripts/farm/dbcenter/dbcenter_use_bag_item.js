//FileName:dbcenter_use_bag_item.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码

const TAG = 'DBCENTER_USE_BAG_ITEM';
const Log = GS.Log.create(TAG);
let useBagItemRequest = require('farm/net/net_use_bag_item.js');

class DbUseBagItem {
    globalData = {
        "itemid":this.reqData.itemid,
    };

    useBagItemReq = useBagItemRequest.useBagItemRequest;
    constructor(itemId) {
        let useBagItem = new useBagItemReq(itemId);
        this.reqData = useBagItem.request();
    };

    get getData() {
        Log.debug("返回使用背包工具")
        return this.globalData
    };  

}

module.exports = DbUseBagItem