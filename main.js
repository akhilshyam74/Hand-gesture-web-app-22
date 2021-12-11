console.log("Opening emotion to emoji app");
console.log("Are you happy");
console.log("Are you sad");
console.log("Are you angry");
prediction_1="";
prediction_2="";
accuracy_1="";
accuracy_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
console.log("Camera is set")
camera = document.getElementById("camera");
Webcam.attach("#camera")

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
    console.log("Snapshot taken")
}
console.log('ml5 version:',ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/t34Dgwp7s/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!')
}
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult)
    console.log("Predicting emotion")
}