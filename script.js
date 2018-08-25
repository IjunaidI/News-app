$.ajax({
    url:`https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=4ba4dbcdc43341919c99b02be806ba04`,
    success: function(data){
       for(i=0;i<6;i++){
           console.log("lanat")
           document.querySelector(".gen1").innerHTML += `
           <div class="latest-n1" style="background-image: url(${data.articles[i].urlToImage})">
           <div class="bg-dark">
           <div class="name">IGN</div>
           <div class="title n1">${data.articles[i].title}</div>
           <button class="info1">More Info</button>
       </div>       
       </div>`
       }
    }

})
$.ajax({
    url:`https://newsapi.org/v2/everything?sources=polygon&apiKey=4ba4dbcdc43341919c99b02be806ba04`,
    success: function(data){
        for(i=7;i<17;i++){
           console.log("lanat")
           document.querySelector(".gen2").innerHTML += `
           <div class="latest-n1" style="background-image: url(${data.articles[i].urlToImage})">
           <div class="bg-dark">
           <div class="name">IGN</div>
           <div class="title n1">${data.articles[i].title}</div>
           <button class="info1">More Info</button>
       </div>       
       </div>`
    }
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

