$.ajax({
    url:`https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=4ba4dbcdc43341919c99b02be806ba04`,
    success: function(data){
        document.querySelector(".n1").innerHTML = data.articles[0].title;
        document.querySelector(".latest-n1").style.backgroundImage = `url(${data.articles[0].urlToImage})`;
        document.querySelector(".n2").innerHTML = data.articles[1].title;
        document.querySelector(".latest-n2").style.backgroundImage = `url(${data.articles[1].urlToImage})`;
        document.querySelector(".n3").innerHTML = data.articles[2].title;
        document.querySelector(".latest-n3").style.backgroundImage = `url(${data.articles[2].urlToImage})`;
        document.querySelector(".n4").innerHTML = data.articles[3].title;
        document.querySelector(".latest-n4").style.backgroundImage = `url(${data.articles[3].urlToImage})`;
        document.querySelector(".n5").innerHTML = data.articles[4].title;
        document.querySelector(".latest-n5").style.backgroundImage = `url(${data.articles[4].urlToImage})`;
    }

})
$.ajax({
    url:`https://newsapi.org/v2/everything?sources=polygon&apiKey=4ba4dbcdc43341919c99b02be806ba04`,
    success: function(data){
        document.querySelector(".p-name1").innerHTML = data.articles[10].title;
        document.querySelector(".news1").style.backgroundImage = `url(${data.articles[10].urlToImage})`;
        document.querySelector(".p-name2").innerHTML = data.articles[11].title;
        document.querySelector(".news2").style.backgroundImage = `url(${data.articles[11].urlToImage})`;
        document.querySelector(".p-name3").innerHTML = data.articles[12].title;
        document.querySelector(".news3").style.backgroundImage = `url(${data.articles[12].urlToImage})`;
        document.querySelector(".p-name4").innerHTML = data.articles[13].title;
        document.querySelector(".news4").style.backgroundImage = `url(${data.articles[13].urlToImage})`;
        document.querySelector(".p-name5").innerHTML = data.articles[14].title;
        document.querySelector(".news5").style.backgroundImage = `url(${data.articles[14].urlToImage})`;
        document.querySelector(".p-name6").innerHTML = data.articles[15].title;
        document.querySelector(".news6").style.backgroundImage = `url(${data.articles[15].urlToImage})`;
        document.querySelector(".p-name7").innerHTML = data.articles[16].title;
        document.querySelector(".news7").style.backgroundImage = `url(${data.articles[16].urlToImage})`;
        document.querySelector(".p-name8").innerHTML = data.articles[17].title;
        document.querySelector(".news8").style.backgroundImage = `url(${data.articles[17].urlToImage})`;
    }

})
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

