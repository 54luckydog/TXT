//FileName:dbcenter_bag_infor.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码

const TAG = 'DBCENTER_BAG_INFOR';
const Log = GS.Log.create(TAG);
let BagInforRequest = require('farm/net/net_bag_infor.js');

class DbBagInfor{
    
    globalData = {
        "items": [
            {
                "name":this.reqData.name,
                "id":this.reqData.id,
                "type":this.reqData.type,
                "desc":this.reqData.desc,
                "count":this.reqData.count
            }
        ]
    };

    bagInforReq = BagInforRequest.BagInforRequest;
    constructor() {
        Log.debug("背包信息")
        let bagInfor = new bagInforReq();
        this.reqData = bagInfor.request();
    };

    get getData() {
        Log.debug("返回背包信息数据")
        return this.globalData
    };

}

module.exports = DbBagInfor