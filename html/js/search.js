const sInfor = document.getElementById("search");
const sBaidu = document.getElementById("baidu");
const sGoogle = document.getElementById("google");
const sBing = document.getElementById("bing");
const sZhihu = document.getElementById('zhihu');
const sFanyi = document.getElementById("fanyi");
const sGitHub = document.getElementById("github");
const sBilibili = document.getElementById("bilibili");
const sYouTube = document.getElementById('youtube')
//isEmpty;
let isEmpty =function (obj)  {
    if (obj === null) return true;
    if (typeof obj === 'undefined') {
      return true;
    }
    if (typeof obj === 'string') {
        let reg = new RegExp("^([ ]+)|([　]+)$");
        //判断有空格，如果有空格，删除左边空格；
        if( reg.test(obj)){
            obj=obj.replace(/(^\s*)/g,"");
        }
      if (obj === "") {
        return true;
      }
    }
    return false;
}
//doAction 搜索跳转方法
/*  
p：搜索网址前段 
n: 搜到网址后段
h: 搜索首页
*/
let doAction=function(p,n,s){
    if(isEmpty(sInfor.value)){
        // window.open(s);
        window.location.href=s;
    }else{
        window.location.href=p+sInfor.value+n
        // window.open(p+sInfor.value+n);
    }
}
//拼接网址
let p='';
let n='';
let s=''
//BaiDu
sBaidu.onclick= function()  {
    p="https://www.baidu.com/s?wd=";
    doAction(p,'',p);
};
document.onkeydown = function (e) { // 回车提交表单
    // 兼容FF和IE和Opera
        var theEvent = window.event || e;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {   
              p="https://www.baidu.com/s?wd=";
              doAction(p,'',p);
              }
}
//Google
sGoogle.onclick=function(){
      p="https://www.google.com/search?q=";

    n="&gws_rd=cr&nfpr=1&newwindow=1&num=30";

    s='https://www.google.com/webhp?gws_rd=cr&nfpr=1&newwindow=1&num=30';
   doAction(p,n,s);
}
//Bing
sBing.onclick=function () {
    p='https://cn.bing.com/search?q=';
    n='&ensearch=1&FORM=BESBTB'
    s='https://www4.bing.com/?scope=web&FORM=BESBTB';
    doAction(p,n,s);
}
//Zhihu
sZhihu.onclick= function () {
    p='https://www.zhihu.com/search?q=';
    n='&type=content&utm_content=search_hot';
    s='https://www.zhihu.com/'
    doAction(p,n,s);
}
//翻译
sFanyi.onclick = function (){
    p='https://fanyi.baidu.com/#auto/zh/';
    n='';
    s='https://fanyi.baidu.com/';
    doAction(p,n,s);
}
//GitHub
sGitHub.onclick= function () {
    p='https://github.com/search?q=';
    n='';
    s='https://github.com'
    doAction(p,n,s);
}
//Bilibili
sBilibili.onclick =function () {
    p='https://search.bilibili.com/all?keyword=';
    n='';
    s='https://search.bilibili.com'
    doAction(p,n,s);
}
//YouTube
sYouTube.onclick =function () {
    p='https://www.youtube.com/results?search_query=';
    doAction(p,n,p);
}