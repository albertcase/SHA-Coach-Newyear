

/* 微信分享 */

// ready setting
wx.ready(function() {
        var _unescape = function(str) {
            return str.replace(/&amp;/g, "&")
                      .replace(/&gt;/g, ">")
                      .replace(/&lt;/g, "<")
                      .replace(/&quot;/g, '"')
                      .replace(/&#39;/g, "'");
        };

        wx.hideMenuItems({menuList:["menuItem:setFont","menuItem:favorite","menuItem:delete","menuItem:openWithQQBrowser","menuItem:share:QZone","menuItem:copyUrl","menuItem:dayMode","menuItem:nightMode","menuItem:share:qq","menuItem:jsDebug","menuItem:originPage","menuItem:openWithSafari","menuItem:share:facebook","menuItem:refresh","menuItem:share:weiboApp","menuItem:editTag","menuItem:readMode","menuItem:share:email"] });
        
        //
        window.wechat_setting.friend  = {
                title: _unescape('COACH顽猴大闹照片，新年“猴猴”玩'),
                desc: _unescape('有只调皮的猴子跑进我的照片里，太“猴”玩了！快看它有没有溜进你的照片里玩闹一番！'),
                link: window.location.href,
                imgUrl: 'http://7vzs67.com1.z0.glb.clouddn.com/51150705-66a1-42b6-9528-7eae06bea1ca?imageView2/1/w/200/h/200/format/jpg/q80/interlace/1'
        };
        wx.onMenuShareAppMessage({
            title: _unescape('COACH顽猴大闹照片，新年“猴猴”玩'),
            desc: _unescape('有只调皮的猴子跑进我的照片里，太“猴”玩了！快看它有没有溜进你的照片里玩闹一番！'),
            link: window.location.href,
            imgUrl: 'http://7vzs67.com1.z0.glb.clouddn.com/51150705-66a1-42b6-9528-7eae06bea1ca?imageView2/1/w/200/h/200/format/jpg/q80/interlace/1',
            type: '',
            dataUrl: '',
            success: function () {
                alert(window.location.href);
                _hmt.push(['_trackEvent', 'share', 'ShareAppMessage']);
            },
            cancel: function () {
            }
        });
        

        
            window.wechat_setting.timeline = {
                    title: 'COACH顽猴大闹照片，新年“猴猴”玩',
                    link: window.location.href,
                    imgUrl: 'http://7vzs67.com1.z0.glb.clouddn.com/fe106d3c-9b97-435d-8f7c-67dd99ea3f33?imageView2/1/w/200/h/200/format/jpg/q80/interlace/1'
            };
            wx.onMenuShareTimeline({
                title: 'COACH顽猴大闹照片，新年“猴猴”玩',
                link: window.location.href,
                imgUrl: 'http://7vzs67.com1.z0.glb.clouddn.com/fe106d3c-9b97-435d-8f7c-67dd99ea3f33?imageView2/1/w/200/h/200/format/jpg/q80/interlace/1',
                success: function () {
                    _hmt.push(['_trackEvent', 'share', 'ShareTimeline']);
                },
                cancel: function () {
                }
            });
        
});


