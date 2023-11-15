// index.html

window.onload = function(){
  // 이미지 슬라이드
  // 경로로 적어주어야 함
  let pic = ["images/bg0.jpg", "images/bg1.jpg", "images/bg5.jpg"];
  
  let picInx = 0;

  myPicture();

  function myPicture(){
    document.getElementById("pic").src = pic[picInx];
    picInx++;

    if(picInx == pic.length){
      picInx = 0;
    }
    setTimeout(myPicture, 2000);
  }

  // 디지털 시계
  setInterval(myWatch, 1000);

  function myWatch(){
    const NOW = new Date();
    let time = NOW.toLocaleTimeString();

    let watch = document.getElementById("show")
    watch.innerHTML = time;
    watch.style.color = "brown";
  }
}

