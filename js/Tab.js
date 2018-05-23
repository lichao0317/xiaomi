window.onload = function () {
    /*
    * 1.抓取元素
    */
    var home_title = document.getElementById('title')//抓取家电右边title
    var home_lis = document.getElementsByClassName('jiadian ')//抓取家电右边title里的文字
    var zhineng_title = document.getElementById('title1')//抓取智能右边的title
    var zhineng_lis = document.getElementsByClassName('zhineng ')//抓取家电右边title里的文字
    var home_right = document.getElementsByClassName('right_shop')//抓取右边的商品
/*
 * 家电部分
 */
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
                console.log(j)
                home_lis[j].setAttribute('class',"jiadian");
            }
            var cc = this.getAttribute('class');
            console.log(cc);
            //home_right当前元素显示
            home_right[num].style.display = "block";
            //home_lis 颜色#000000，border：none
            this.setAttribute('class',cc+' action');
        }
    }


}