//FileName:dbcenter_user_grand_item.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码

const TAG = 'DBCENTER_USER_GRAND_ITEM';
const Log = GS.Log.create(TAG);

let useGrandItemRequest = require('farm/net/net_use_grand_item.js');

class DbUseBagItem {
    globalData = {
        
    };

    useGrandItemReq = useGrandItemRequest.useGrandItemRequest;
    constructor(cmd,userId) {
        let useGrandItem = new useGrandItemReq(cmd,userId);
        this.reqData = useGrandItem.request();
    };

    get getData() {
        Log.debug("返回使用土地工具数据")
        return this.globalData
    };  

}

module.exports = DbUseBagItem