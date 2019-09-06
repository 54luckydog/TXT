//FileName:dbcenter_photo_infor.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码

const TAG = 'DBCENTER_PHOTO_INFO';
const Log = GS.Log.create(TAG);
let photoInforRequest = require('farm/net/net_photo_infor.js');

class DbPhotoInfor {
    globalData = {
        "photos": [
            {
                "url": this.reqData.url,
                "photoid": this.reqData.url,
            }
        ]
    };

    photoInforReq = photoInforRequest.photoInforRequest;
    constructor(userId) {
        let photoInfor = new photoInforReq(userId);
        this.reqData = photoInfor.request();
    };

    get getData() {
        Log.debug("返回照片信息数据")
        return this.globalData
    };

}

module.exports = DbPhotoInfor