/* 微信分享 */

wx.ready(function(){

    window.wechat_setting.friend  = {
        title: 'COACH顽猴大闹照片，新年“猴猴”玩',
        desc: '有只调皮的猴子跑进我的照片里，太“猴”玩了！快看它有没有溜进你的照片里玩闹一番！',
        link: window.location.host,
        imgUrl: window.location.host + '/img/share.jpg', 
    };
    wx.onMenuShareAppMessage({
    title: 'COACH顽猴大闹照片，新年“猴猴”玩',
    desc: '有只调皮的猴子跑进我的照片里，太“猴”玩了！快看它有没有溜进你的照片里玩闹一番！',
    link: window.location.host,
    imgUrl: window.location.host + '/img/share.jpg', 
    type: '', 
    dataUrl: '', 
    success: function () { 
        //_hmt.push(['_trackEvent', 'btn', 'share', 'ShareAppMessage']);

    },
    cancel: function () { 
    }
    });



    window.wechat_setting.timeline = {
            title: 'COACH顽猴大闹照片，新年“猴猴”玩',
            link: window.location.host,
            imgUrl: window.location.host + '/img/share.jpg', 
    };
    wx.onMenuShareTimeline({
        title: 'COACH顽猴大闹照片，新年“猴猴”玩',
        link: window.location.host,
        imgUrl: window.location.host + '/img/share.jpg', 
        success: function () { 
            //_hmt.push(['_trackEvent', 'btn', 'share', 'ShareTimeline']);
        },
        cancel: function () { 
        }
    });


})