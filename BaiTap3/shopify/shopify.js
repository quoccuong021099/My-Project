function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display="none";
}

// learn
function openLearn(){
  document.getElementById("up").style.display="block";
  document.getElementById("listLearn").style.display="block";
  document.getElementById("down").style.display="none";
}
function closeLearn(){
  document.getElementById("up").style.display="none";
  document.getElementById("listLearn").style.display="none";
  document.getElementById("down").style.display="block";
}

var createSlides =1; // khai báo biến slideIndex đại diện cho slide hiện tại 
showSlides(createSlides); // mặt định hiển thị slide đầu tiên " ảnh thứ nhất"

function plusSlides(n) {
  createSlides += n //n là tham số truyền vào
  showSlides(createSlides); //cộng thêm 1 đơn vị rồi gán cho slideIndex
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
//trả về danh sách các thẻ có class Slides
  if (n > slides.length-1)
  {
    createSlides= slides.length
  document.getElementsByClassName("buttonright")[0].style.display="none"
  }  
  else if (n < 2)
   {
    createSlides= 1
   document.getElementsByClassName("buttonright")[0].style.display="block"
   document.getElementsByClassName("buttonleft")[0].style.display="none"
    }
    else{  
      document.getElementsByClassName("buttonright")[0].style.display="block"
      document.getElementsByClassName("buttonleft")[0].style.display="block"
    }
 //ẩn hết các slides
  for (i = 0; i < slides.length; i++)
  {
      slides[i].style.display = "none";
  } 
  slides[createSlides-1].style.display = "block";  
  
}
 

