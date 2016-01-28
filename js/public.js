
if(self == top){
    document.documentElement.style.display = 'block';
}else{
    top.location = self.location;
}

function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return unescape(r[2]); return null;
}


function ajaxfun(ajaxType, ajaxUrl, ajaxData, ajaxDataType, ajaxCallback){
    $.ajax({
        type: ajaxType,
        url: ajaxUrl,
        data: ajaxData,
        dataType: ajaxDataType
    }).done(function(data){
        ajaxCallback(data)
    })
}

































