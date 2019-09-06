//FileName:dbcenter_buy_store_item.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码


const TAG = 'DBCENTER_BUY_STORE_ITEM';
const Log = GS.Log.create(TAG);
let BuyStoreItemRequest = require('farm/net/net_buy_store_item.js');

class DbBuyStoreItem{
    globalData = {
        
    };

    buyStoreItemReq = BuyStoreItemRequest.BuyStoreItemRequest;
    constructor(itemId,num) {
        let buyStoreItem = new buyStoreItemReq(itemId,num);
        this.reqData = buyStoreItem.request();
    };

    get getData() {
        Log.debug("返回购买商店道具")
        return this.globalData
    };

}

module.exports = DbBuyStoreItem
