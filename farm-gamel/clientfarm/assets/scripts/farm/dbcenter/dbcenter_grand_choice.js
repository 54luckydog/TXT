//FileName:dbcenter_grand_choice.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码

const TAG = 'DBCENTER_GRAND_CHOICE';
const Log = GS.Log.create(TAG);
let grandChoiceRequest = require('farm/net/net_grand_choice.js');

class DbGrandChoice {
    globalData = {
        "cmd": this.reqData.cmd,
        "params": {
            "grands": [
                {
                    "dapengid": this.reqData.dapengid,
                    "grandid": this.reqData.grandid,
                    "name": this.reqData.name,
                    "desc": this.reqData.desc,
                    "url": this.reqData.url,
                }
            ]
        }
    };

    grandChoiceReq = grandChoiceRequest.grandChoiceRequest;
    constructor(cmd,dapengId) {
        let grandChoice = new grandChoiceReq(cmd,dapengId);
        this.reqData = grandChoice.request();
    };

    get getData() {
        Log.debug("返回土地选择数据")
        return this.globalData
    };

}

module.exports = DbGrandChoice