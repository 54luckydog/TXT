//FileName:dbcenter_plant.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码

const TAG = 'DBCENTER_PLANT';
const Log = GS.Log.create(TAG);

let plantRequest = require('farm/net/net_plant.js');

class DbPlant {
    globalData = {
        
    }


    plantReq = plantRequest.plantRequest;
    constructor(grandId,seedId) {

        let plant = new plantRequest(grandId,seedId);
        this.reqData = plant.request();
    };

    get getData() {
        Log.debug("返回种植数据")
        return this.globalData
    };

}

module.exports = DbPlant