//FileName:dbcenter_grand_infor.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码

const TAG = 'DBCENTER_GRAND_INFOR';
const Log = GS.Log.create(TAG);

let grandInforRequest = require('farm/net/net_grand_infor.js');

class DbGrandInfor {
    globalData = {
        "grandinfo": {
            "useid": this.reqData.useid,
            "vip": this.reqData.vip,
            "grandid": this.reqData.grandid,
            "token": this.reqData.token,
            "grandinfo": {
                "dapengid": this.reqData.dapengid,
                "grandid":this.reqData.grandid,
                "name": this.reqData.name,

                'water': this.reqData.water,
                'weed': this.reqData.weed,
                'insect': this.reqData.insect,
                'fertilizer': this.reqData.fertilizer,

                "other": {},
                "items": [
                    {
                        "isplant": this.reqData.isplant,
                        "cropid": this.reqData.cropid,
                        "level": this.reqData.level
                    }
                ]
            }
        }
    };

    grandInforReq = grandInforRequest.grandInforRequest;
    constructor() {
        let grandInfor = new grandInforReq();
        this.reqData = grandInfor.request();
    };

    get getData() {
        Log.debug("返回土地信息数据")
        return this.globalData
    };

}

module.exports = DbGrandInfor