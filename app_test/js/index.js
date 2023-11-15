// index.html

// Ver.mobile
// header
let sw = true;

function showhide(){
    let x = document.getElementById("submenu");

    if(sw == true){
        x.style.display = "block";
        x.style.zIndex = "100";
        sw = false;
        document.getElementById("here").innerHTML = "CLOSE";
    } else{
        x.style.display = "none";
        sw = true;
        document.getElementById("here").innerHTML = "HERE";
    }   
}

// section (#top)
let topImg = document.querySelector("#top");
let topComent = document.querySelector(".wrap-topComent");

topImg.onmouseover = function(){
  topComent.style.display = "block";
  topComent.style.backgroundColor = "rgba(211, 211, 211, 0.723)";
}

topImg.onmouseout = function(){
  topComent.style.display = "none";
}

// section (#university)
let pic2 = ["images/graduation1.JPG", "images/graduation2.JPG", "images/graduation3.JPG"];
let picIdx2 = 0;

myPicture2();

function myPicture2(){
  document.getElementById("pic2").src = pic2[picIdx2];
   picIdx2++;

  if(picIdx2 == pic2.length){
    picIdx2 = 0;
  }
  setTimeout(myPicture2, 3000);
}

let img = document.querySelector("#pic2");
let coment = document.querySelector(".university-coment");

img.onmouseover = function(){
  coment.style.display = "block";
  coment.style.backgroundColor = "rgba(211, 211, 211, 0.723)";
}

img.onmouseout = function(){
  coment.style.display = "none";
}

// 시계
setInterval(myWatch, 1000);

function myWatch(){
  const NOW = new Date();
  let time = NOW.toLocaleTimeString();
  
  let watch = document.getElementById("show");
  
  if(time >= 12){
    watch.innerHTML = time.replace("오전", "AM");
  } else{
    watch.innerHTML = time.replace("오후", "PM");
  }
}

// Ver.tablet

let pic = ["images/bg1.JPG", "images/bg2.JPG", "images/bg3.JPG", "images/bg4.JPG", "images/bg5.JPG"];
let picIdx = 0;

myPicture();

function myPicture(){
  document.getElementById("pic").src = pic[picIdx];
   picIdx++;

  if(picIdx == pic.length){
    picIdx = 0;
  }
  setTimeout(myPicture, 3000);
}

// section (#top)
let tabletImg = document.querySelector("#pic");

tabletImg.onmouseover = function(){
  topComent.style.display = "block";
  topComent.style.backgroundColor = "rgba(211, 211, 211, 0.723)";
}

tabletImg.onmouseout = function(){
  topComent.style.display = "none";
}

// section(#record)
let img1 = document.querySelector(".yeeun-img");
let info = document.querySelector(".who-info");

img1.onmouseover = function(){
  info.style.display = "block";
}

img1.onmouseout = function(){
  info.style.display = "none";
}