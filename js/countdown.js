    function show_date_time() {
        window.setTimeout("show_date_time()", 1000);
        today = new Date();
        nowyear = today.getFullYear();
        gaokaoDay = new Date(nowyear, 5, 7, 9, 0, 0);//这个日期是高考时间(当前年份,6月,7日,9点,0分,0秒)
        zhongkaoDay = new Date(nowyear, 5, 14, 9, 0, 0);//这个日期是中考时间(当前年份,6月,14日,9点,0分,0秒)
        gaokaotimeold = (gaokaoDay.getTime() - today.getTime());
        zhongkaotimeold = (zhongkaoDay.getTime() - today.getTime());
        gaokaosectimeold = gaokaotimeold / 1000;
        zhongkaosectimeold = zhongkaotimeold / 1000;
        gaokaosecondsold = Math.floor(gaokaosectimeold);
        zhongkaosecondsold = Math.floor(zhongkaosectimeold);
        msPerDay = 24 * 60 * 60 * 1000;
        e_gaokaodaysold = gaokaotimeold / msPerDay;
        e_zhongkaodaysold = zhongkaotimeold / msPerDay;
        gaokaodaysold = Math.floor(e_gaokaodaysold);
        zhongkaodaysold = Math.floor(e_zhongkaodaysold);
        e_gaokaohrsold = (e_gaokaodaysold - gaokaodaysold) * 24;
        e_zhongkaohrsold = (e_zhongkaodaysold - zhongkaodaysold) * 24;
        gaokaohrsold = Math.floor(e_gaokaohrsold);
        zhongkaohrsold = Math.floor(e_zhongkaohrsold);
        e_gaokaominsold = (e_gaokaohrsold - gaokaohrsold) * 60;
        e_zhongkaominsold = (e_zhongkaohrsold - zhongkaohrsold) * 60;
        gaokaominsold = Math.floor((e_gaokaohrsold - gaokaohrsold) * 60);
        zhongkaominsold = Math.floor((e_zhongkaohrsold - zhongkaohrsold) * 60);
        gaokaoseconds = Math.floor((e_gaokaominsold - gaokaominsold) * 60);
        zhongkaoseconds = Math.floor((e_zhongkaominsold - zhongkaominsold) * 60);
        if (zhongkaosectimeold <= -374400)//中考结束后三天取消所有显示
        {
            gkcountdown.innerHTML = "";
        } else if (gaokaosectimeold <= -374400)//高结束后三天恢复取消高考显示
        {
            gkcountdown.innerHTML = "<div class=gkdjs1></div>";
        } else if (gaokaosectimeold <= -115200) {
            gkcountdown.innerHTML = "<div class=gkdjs><font color=#f8c8a4>高考已结束</font><br/>预祝同学们金榜题名！</div>";
        } else if (gaokaosectimeold <= 0) {
            gkcountdown.innerHTML = "<div class=gkdjs><font color=#f8c8a4>高考进行中</font><br/>各位同学加油！</div>";
        } else if (gaokaosectimeold <= 8640000)//距离高考100天开始显示倒计时
        {
            gkcountdown.innerHTML = "<div class=gkdjs><font>距离高考</font><font class=sz>" + gaokaodaysold + "</font><font>天</font><br/>" + gaokaohrsold + "小时" + gaokaominsold + "分" + gaokaoseconds + "秒" + "</div>";
        } else if (gaokaosectimeold >= 8640000)//距离高考大于100天取消显示
        {
            gkcountdown.innerHTML = "";
        }
        if (zhongkaosectimeold <= -374400)//中考结束后三天恢复空白显示
        {
            zkcountdown.innerHTML = "";
        } else if (zhongkaosectimeold <= -115200) {
            zkcountdown.innerHTML = "<div class=zkdjs><font color=#f8c8a4>中考已结束</font><br/>预祝同学们金榜题名！</div>";
        } else if (zhongkaosectimeold <= 0) {
            zkcountdown.innerHTML = "<div class=zkdjs><font color=#f8c8a4>中考进行中</font><br/>各位同学加油！</div>";
        } else if (gaokaosectimeold <= 8640000)//距离高考100天开始显示倒计时
        {
            zkcountdown.innerHTML = "<div class=zkdjs><font>距离中考</font><font class=sz>" + zhongkaodaysold + "</font><font>天</font><br/>" + zhongkaohrsold + "小时" + zhongkaominsold + "分" + zhongkaoseconds + "秒" + "</div>";
        } else if (gaokaosectimeold >= 8640000)//距离高考大于100天取消显示
        {
            zkcountdown.innerHTML = "";
        }
    }
    show_date_time();