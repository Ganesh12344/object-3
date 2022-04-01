img="";
objects=[];
status="";
function preload(){
    img=loadImage('park.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.position(250,250);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status-detecting objects";
}
function modelLoaded()
{
    console.log("model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(img,0,0,640,420);
    if(status !=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status-object detected";
            fill("#03c8ff");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#03c8ff");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }
    }
  


}
