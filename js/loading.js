var LoadingImg = [
    "../img/backBtn.png",
    "../img/info_1.png",
    "../img/info_2.png",
    "../img/kv_1.jpg",
    "../img/kv_2.jpg",
    "../img/loading.png",
    "../img/makeBtn.png",
    "../img/nextBtn.png",
    "../img/prompt_ca.png",
    "../img/qrcode.png",
    "../img/shareBtn.png",
    "../img/shareTips.png",
    "../img/slogan.png",
    "../img/startBtn.png",
    "../img/uploadBg.jpg",

    "../img/monkey/monkey_b_1.png",
    "../img/monkey/monkey_b_2.png",
    "../img/monkey/monkey_b_3.png",
    "../img/monkey/monkey_b_4.png",
    "../img/monkey/monkey_s_1.png",
    "../img/monkey/monkey_s_2.png",
    "../img/monkey/monkey_s_3.png",
    "../img/monkey/monkey_s_4.png",
    
];


/* 图片加载 */
function LoadFn ( arr , fn , fn2){
        var loader = new PxLoader();
        for( var i = 0 ; i < arr.length; i ++)
        {
            loader.addImage(arr[i]);
        };
        
        loader.addProgressListener(function(e) {
                var percent = Math.round( e.completedCount / e.totalCount * 100 );
                if(fn2) fn2(percent)
        }); 
        
        
        loader.addCompletionListener( function(){
            if(fn) fn();    
        });
        loader.start(); 
}


function loading(allAmg){
    LoadFn(allAmg , function (){

        $("img").each(function(){ 
            $(this).attr("src",$(this).attr("sourcesrc"));
        })

        $(".loading").addClass("hide");
        
    } , function (p){
        //console.log(p);
    });
}



loading(LoadingImg);

