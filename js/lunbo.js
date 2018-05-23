window.onload = function () {
    //1、抓取元素
    var box = document.getElementById('bannerBox');
    var ul = document.getElementById("ul")
    //2、抓取集合
    var imgs = document.getElementsByClassName('img');
    var lis = document.getElementsByClassName('ul_li');
    //3.设置初始值
    var num = 0;
    
    
//自动轮播
    //4.设置定时器
    function run() {
        //下标自加
        num++;
        //回流判断
        if(num == 6){
            num = 0;
        }
        //遍历数组
        //img隐藏，lis背景#ccc;
        for (var i = 0;i<imgs.length;i++ ){
            // imgs[i].style.display = 'none';
            imgs[i].style.display="none";
            lis[i].style.background = 'grey';
        }
        //显示img当前元素
        imgs[num].style.display = 'block';
        //lis显示，背景色white
        lis[num].style.display = 'block';
        lis[num].style.background = '#FFFFFf';
    }
    //执行函数
    var timer = setInterval(run,1000);
    // 鼠标移入清除定时器
    box.onmouseover = function(){
        clearInterval(timer);
    }
    // 鼠标移出开启定时器
    box.onmouseout = function(){
        timer = setInterval(run,1000);
    }

//手动轮播
    // 遍历lis
    for (var i = 0; i < lis.length; i++) {
        // 给当前元素创建一个属性叫序号让序号的值等于当前元素的下标
        lis[i].xuhao = i;
        //绑定事件
        lis[i].onmouseover = function(){
            num = this.xuhao;
            // 遍历数组，img隐藏，li背景#ccc
            for (var i = 0; i < lis.length; i++) {
                // 当前img隐藏
                imgs[i].style.display="none";
                // lis背景#ccc
                lis[i].style.background='#ccc';
            }
            //显示img当前元素
            imgs[num].style.display='block';
            //lis显示，li背景white
            lis[num].style.display='block';
            lis[num].style.background='white';
        }
    }

// 左右点击
    var left = document.getElementById("click_left");
    var right = document.getElementById("click_right");
    // 左点击
    left.onclick = function(){
        if(num==0){
            num=6;
        }
        num--;

        for (var i = 0; i < imgs.length; i++) {
            // 当前img隐藏
            imgs[i].style.display="none";
            // lis背景#ccc
            lis[i].style.background='#ccc';
        }
        //显示img当前元素
        imgs[num].style.display = "block";
        //lis显示，li背景white
        lis[num].style.display='block';
        lis[num].style.background='white';
    }
    // 右点击
    right.onclick = function(){
        /*
         *右点击时，num++应写在判断之上
         */
        num++;
        if(num==6){
            num=0;
        }
        for (var i = 0; i < imgs.length; i++) {
            // 当前img隐藏
            imgs[i].style.display="none";
            // lis背景#ccc
            lis[i].style.background='#ccc';
        }
        //显示img当前元素
        imgs[num].style.display = "block";
        //lis显示，li背景white
        lis[num].style.display='block';
        lis[num].style.background='white';
    }

//Tab切换
    /*
     * 1.抓取元素
     */
    var home_title = document.getElementById('title')//抓取家电右边title
    var home_lis = document.getElementsByClassName('jiadian ')//抓取家电右边title里的文字
    var home_right = document.getElementsByClassName('right_shop')//抓取家电右边的商品
    var zhineng_title = document.getElementById('title1');//抓取zhineng右边的title
    var zhineng_lis = document.getElementsByClassName('zhineng')//抓取zhineng右边title里的文字
//家电
    //循环home_lis
    for (var i = 0; i < home_lis.length; i++){
        //给当前元素创建一个属性叫序号让序号的值等于当前元素的下标
        home_lis[i].xuhao = i;
        var cc = home_lis[i].getAttribute('class')
        //鼠标移入事件
        home_lis[i].onmouseover = function () {
            //获取当前元素下标
            var num = this.xuhao;
            //循环home_right
            for (var j = 0; j < home_lis.length; j++){
                //home_right全部隐藏
                home_right[j].style.display = "none";
                //home_lis 颜色#000000，border：none
                home_lis[j].setAttribute('class',"jiadian");
            }
            //home_right当前元素显示
            home_right[num].style.display = "block";
            //home_lis 颜色#000000，border：none
            this.setAttribute('class',cc+' action');
        }
    }
}