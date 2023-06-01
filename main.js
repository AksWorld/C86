var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
var images=["hOye.png",""];
var count=1;
var i=1;




function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({top:0,left:0});
    canvas.add(block_image_object);})
	
}

function cb(){
    if(i==1){
       document.body.style.backgroundImage="url('Confetti.gif')";
       count=0;
    }
    if(i==0){
       document.body.style.backgroundImage="url('hOye.gif')";
       i++;
       count=1;
    }
    if(count==0){
    i--};
    
    
   }
function playSound(){
	 x.play();
}

function pauseSound(){
    x.pause();
}


