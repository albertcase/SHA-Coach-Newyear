 <script type="text/javascript" src="http://wechatjs.curio.im/api/v1/js/9cd0fdb4-38a3-4f30-8bba-d685d556c213/wechat.js"></script>



/* 微信分享 */



wx.ready(function(){

    window.wechat_setting.friend  = {
        title: 'COACH顽猴大闹照片，新年“猴猴”玩',
        desc: '有只调皮的猴子跑进我的照片里，太“猴”玩了！快看它有没有溜进你的照片里玩闹一番！',
        link: window.location.href,
        imgUrl: window.location.host + '/img/share.jpg', 
    };

    wx.onMenuShareAppMessage({
    title: 'COACH顽猴大闹照片，新年“猴猴”玩',
    desc: '有只调皮的猴子跑进我的照片里，太“猴”玩了！快看它有没有溜进你的照片里玩闹一番！',
    link: window.location.href,
    imgUrl: window.location.host + '/img/share.jpg', 
    type: '', 
    dataUrl: '', 
    success: function () { 
        _hmt.push(['_trackEvent', 'share', 'ShareAppMessage']);
    },
    cancel: function () { 
    }
    });



    window.wechat_setting.timeline = {
            title: 'COACH顽猴大闹照片，新年“猴猴”玩',
            llink: window.location.href,
            imgUrl: window.location.host + '/img/share.jpg', 
    };
    wx.onMenuShareTimeline({
        title: 'COACH顽猴大闹照片，新年“猴猴”玩',
        link: window.location.href,
        imgUrl: window.location.host + '/img/share.jpg', 
        success: function () { 
            _hmt.push(['_trackEvent', 'share', 'ShareTimeline']);
        },
        cancel: function () { 
        }
    });


})