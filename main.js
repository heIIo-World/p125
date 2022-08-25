leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
     canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
    video.size(400, 400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("posenet initialized");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
    
    }
}


function draw(){
     background('#b6c5ff');
    console.log(difference);
    textSize(difference);
    fill('#4a6fff')
    text('Can you read this fully?', 20, 200);
}
