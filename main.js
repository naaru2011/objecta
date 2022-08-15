function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video.hide();
    video.size(600,500);
  
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: discovering objects";
    
}

function modelLoaded(){
    console.log("Model Loaded!");
}
function draw(){
    image(video, 0, 0, 600, 500);
    if(objects[i].label == object_name)
    {
      objectDetector.detect(canvas, gotResult);
      for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = object_name + "Found"
        document.getElementById("item").value
        SpeechSynthesisUtterance();
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }

    }

    
function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }