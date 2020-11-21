function clock() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // 格式规整
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min <10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    } 
    document.getElementById('date').innerHTML = `${month}月${day}日`;
    document.getElementById('time').innerHTML = `${hour}:${min}:${sec}`;

}

clock();
setInterval("clock()", 1000);

