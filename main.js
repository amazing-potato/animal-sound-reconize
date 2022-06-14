
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uI1ChgB71/model.json',modelReady)
}
function modelReady(){
classifier.classify(gotResults);
}
var dog=0;
var cat=0;
var bird=0;
var frog=0;
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{console.log(results);
    random_number_r=Math.floor(Math.random()*255+1);
    random_number_g=Math.floor(Math.random()*255+1);
    random_number_b=Math.floor(Math.random()*255+1);
    document.getElementById("result_label").innerHTML="i can hear-"+results[0].label;
    document.getElementById("result_confidence").innerHTML="detected dog"+dog+"detected cat"+cat+"detected bird"+bird+"detected frog"+frog;
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
img1=document.getElementById('ear')

if(results[0].label=="dog"){
    img1.src='dog.gif';
    dog=dog+1;
}
else if(results[0].label=="cat"){
    img1.src='cat.gif';
    cat=cat+1;
}
else if(results[0].label=="bird"){
    img1.src='bird.gif';
    bird=bird+1;
}
else if(results[0].label=="frog"){
    img1.src='frog.gif';
    frog=frog+1
}
else{
    img1.scr="an uncany ear.jpg"
}
}
}