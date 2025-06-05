let count = 1 
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},4000)

function nextImage(){
    count++;
    if(count > 3){
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

const btnTopo = document.getElementById("btnTopo");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }               
};

function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

