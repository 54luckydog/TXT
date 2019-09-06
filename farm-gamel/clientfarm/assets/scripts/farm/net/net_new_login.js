
//FileName:net_login.js
//Author:zhengyunlong
//CreateDate:2019-09-01 9：30
//Description:微信登陆
//Modify:zhengyunlong修改了代码

const TAG = 'NET_LOGIN';
const Log = GS.Log.create(TAG);
const UUID = GS.Utils;
class Login {
    globalData = {
        "useid":"" ,//this.getData.useid,
        "vip":"",// this.getData.vip,
        "grandid": "",//this.getData.grandid,
        "token": "",//this.getData.token,
        "grandinfo": {
            "dapengid": "",//this.getData.dapengid,
            "grandid":"",// this.getData.grandid,
            "name":"",// this.getData.name,
            'water': "",//this.getData.water,
            'weed': "",//this.getData.weed,
            'insect':"",// this.getData.insect,
            'fertilizer': "",//this.getData.fertilizer,

            "other": {},
            "items": [
                {
                    "isplant": "",//this.getData.isplant,
                    "cropid": "",//this.getData.cropid,
                    "level": "",//this.getData.level,
                }
            ]
        }
    }
    constructor() {
        this._code = "";
        this._nickName = "";
        this._imageUrl = "";
        this._encryptedData = "";
        this._iv = "";
        
    };
    onLoad() {
        this.checkUserInfoPermission(); //检查用户限权设置
    };
    doLogin() {
        Log.debug("登陆")
        wx.login({
            "timeout": 1500,
            success: function (loginRes) {
                if (loginRes.code) {
                    this._code = loginRes.code;
                    wx.getUserInfo({
                        withCreadentials: true, //携带登录态信息
                        success: function (infoRes) {
                            this.userInfo = infoRes.userInfo;
                            this._nickName = userInfo.nickName;
                            this._imageUrl = userInfo.imageUrl;
                            this._encryptedData = res.encryptedData;
                            this._iv = res.iv;
                            this.request();
                        },

                        fail: function () {

                            wx.hideLoading();

                        }
                    });
                    
                } else {
                    this.showInfo("登陆失败");
                    Log.debug("调用wx.login获取code失败")
                }
            },
            fail: function (error) {

                this.showInfo("接口调用失败")
                Log.debug(error)

            },
        })

    }
    //检查用户限权设置
    checkUserInfoPermission() {
        wx.getSetting({
            success: function (res) {
                if (!res.authSetting['scope.userInfo']) {
                    wx.authorize({
                        scop: 'scope.userInfo',
                        success() {
                            this.doLogin()
                        },
                        fail() {
                            wx.openSetting({
                                success: function (res) {
                                    this.doLogin()
                                    Log.debug("openSetting success")
                                },
                                fail: function (res) {
                                    Log.debug("openSetting fail")
                                }
                            });
                        }
                    });
                } else {
                    this.doLogin()
                }
            },
            fail: function (error) {
                Log.debug(error)
            }
        });

    };
    request() {
        this.uuid = UUID.Utils.creatUUID();
        let reqData = {
            code: this._code,
            uuid: this.uuid,
            encryptedData: this._encryptedData,//unionId是在encryptedData中获得的
            iv: this._iv,
            //  unionId: this._unionId,
            nickName: this._nickName,
            imageUrl: this._imageUrl,
        };
        wx.request({
            url: '',
            method: 'POST',
            data: reqData,
            header: {
                'content-type': 'application/json'
            },
            success(res) {
                if (res.code === 0) {
                    //this.getData = res.data;
                    globalData.useId=res.data.useId;
                    globalData.vip=res.data.vip;
                    globalData.grandId=res.data.grandId;
                    globalData.token=res.data.token;
                    globalData.grandInfo.dapengId=res.data.grandInfo.dapengId;
                    globalData.grandInfo.grandId=res.data.grandInfo.grandId;
                    globalData.grandInfo.name=res.data.grandInfo.name;
                    globalData.grandInfo.water=res.data.grandInfo.water;
                    globalData.grandInfo.weed=res.data.grandInfo.weed;
                    globalData.grandInfo.insect=res.data.grandInfo.insect;
                    globalData.grandInfo.fertilizer=res.data.grandInfo.fertilizer;
                    globalData.grandInfo.others={};
                    globalData.grandInfo.items=res.data.grandInfo.items;
                }
            }
        })
    }



    showInfo(title, icon) {
        wx.showToast({
            title: title,
            icon: icon,
            duration: 1500,
            mask: true
        });

    };
    /*
    onLoad() {
        this.checkLoginStatus();
    }
    
    checkLoginStatus() {
        Log.debug("检查是否有登陆标识")
        let loginFlag = wx.getStorageSync("loginFlag");
        if (loginFlag) {
            //检查是否过期
            wx.checkSession({
                success: function () {
                    let userStorageInfo = wx.getStorage("userInfo"); //从本地缓存中异步获取key对应的value值
                    if (userStorageInfo) {
                        this.globalData.userInfo = JSON.parse(userStorageInfo); //把获取到的值传给全局变量中的userinfo
                    } else {
                        this.showInfo("缓存信息缺失");
                        Log.debug("缓存信息缺失")
                    }
                },
                fail: function () {
                    this.checkUserInfoPermission();
                }
            });
        } else {
            Log.debug("没有登录态")
            this.checkUserInfoPermission();
        }
    }
    */
    /*
         request(){
             this.uuid = UUID.Utils.creatUUID();
             let reqData = {
                 code: this._code,
                 uuid: this.uuid,
                 encryptedData:this._encryptedData,
                 iv:this._iv,
               //  unionId: this._unionId,
                 nickName: this._nickName,
                 imageUrl: this._imageUrl,
             }
             
             GS.Http.httpPost("http://47.111.22.119:80/greenhouse/game/purchaseTools", reqData, function (responseJson) {
                 if (responseJson.code === 0) {
                     //return responseJson.data
                     this._openId = responseJson.openid; 
                     this._session_key = responseJson.session_key 
                     wx.setStorageSync({
                         'userInfo': JSON.stringify(responseJson.userInfo),
                         'loginFlag': JSON.stringify(responseJson.loginFlag)
                     }); 
                     this.getData=responseJson.data
                 } else {}
             })
         }
     */


}
let login = new Login();
let getData=login.globalData
module.exports= {
    login,
    getData
}
