/*
* 检验当前系统
* */
var typeOs = function () {
    var platform = navigator.platform;
    console.log(platform.indexOf("Linux"));
    if (platform.indexOf("Linux")>=0){
        return "linux";
    }
}

var spHolder= function(senentces,options) {
    superplaceholder({
        el: document.querySelector('#search'),
        sentences: senentces,
        options: options
    });
}
if (typeOs()==='linux'){
    var options={
        // delay between letters (in milliseconds)
        letterDelay: 0, // milliseconds
        // delay between sentences (in milliseconds)
        sentenceDelay: 0,
        // should start on input focus. Set false to autostart
        startOnFocus: false,
        loop: false,
        cursor: ''
    };
    var senentces =['点击下方按钮开始搜索，直接回车默认百度'];

    spHolder(senentces,options);

}else {
    var options={
        // delay between letters (in milliseconds)
        letterDelay: 100, // milliseconds
        // delay between sentences (in milliseconds)
        sentenceDelay: 4000,
        // should start on input focus. Set false to autostart
        startOnFocus: false,
        // loop through passed sentences
        loop: true,
        // Initially shuffle the passed sentences
        shuffle: false,
        // Show cursor or not. Shows by default
        showCursor: false,
        // String to show as cursor
        cursor: ''
    };
    var senentces =['点击下方按钮开始搜索，直接回车默认百度'];

    spHolder(senentces,options);

}

