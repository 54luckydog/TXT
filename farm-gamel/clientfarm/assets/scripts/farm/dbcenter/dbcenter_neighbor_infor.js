//FileName:dbcenter_neighbor_infor.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码

const TAG = 'NET_BAG_INFO';
const Log = GS.Log.create(TAG);
let neighborInforRequest = require('farm/net/net_neighbor_infor.js');

class DbGrandChoice {
    globalData = {
        "neighborList": [
            {
                "userinfo": {
                    "name": this.reqData.name,
                    "url": this.reqData.url,
                    "userid": this.reqData.userid
                },
                "grandinfo": {
                    "dapengid":this.reqData.dapengid,
                    "grandid": this.reqData.grandid,
                    "name": this.reqData.name,

                    'water': this.reqData.water,
                    'weed':this.reqData.weed,
                    'insect':this.reqData.insect,
                    'fertilizer': this.reqData.fertilizer,

                    "other": {},
                    "items": [
                        {
                            "isplant": this.reqData.isplant,
                            "cropid": this.reqData.cropid,
                            "level": this.level
                        }
                    ]
                }

            }
        ]
    }


    neighborInforReq = neighborInforRequest.neighborInforRequest;
    constructor() {
        let neighborInfor = new neighborInforReq();
        this.reqData = neighborInfor.request();
    };

    get getData() {
        Log.debug("返回邻居数据")
        return this.globalData
    };

}

module.exports = DbGrandChoice