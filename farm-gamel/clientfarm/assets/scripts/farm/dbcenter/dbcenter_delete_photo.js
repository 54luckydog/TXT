//FileName:dbcenter_delete_photo.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码

const TAG = 'DBCENTER_DELETE_PHOTO';
const Log = GS.Log.create(TAG);

let PhotoDeleteRequest = require('farm/net/net_delete_photo.js');

class DbPhotoDelete{
    globalData = {
        
    };

    photoDeleteReq = PhotoDeleteRequest.PhotoDeleteRequest;
    constructor(photoId) {
        let photoDelete = new photoDeleteReq(photoId);
        this.reqData = photoDelete.request();
    };

    get getData() {
        Log.debug("返回删除照片数据")
        return this.globalData
    };

}

module.exports = DbPhotoDelete