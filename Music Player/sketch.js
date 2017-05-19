var mySound;
var slider1;//Rate slider
var slider2;//Pan slider
var slider3;//volume slider
var button1;
var button2;
var amp;
function setup()
{
	createCanvas(200,200);
	button1=createButton("Loading");
	button2=createButton("Stop");
	mySound=loadSound("1.mp3",loaded);
	amp=new p5.Amplitude();
	mySound.setVolume(0.5);
	slider1=createSlider(0,1.5,1,0.01);
  	slider2=createSlider(-1,1,0,0.01);
  	slider3=createSlider(0,1,0.5,0.01);
	button1.mousePressed(togglePlaying);
	button2.mousePressed(stopPlaying);
}
function draw()
{
	background(50);
	mySound.pan(slider2.value());//pan set
  	mySound.rate(slider1.value());//rate set
  	mySound.setVolume(slider3.value());//volume set
  	var vol=amp.getLevel();
  	fill(255,0,0);
  	ellipse(width/2,height/2,vol*200,vol*200);
}
function loaded()
{
	//mySound.play();
	button1.html("Play");
}
function togglePlaying()
{
	if(!mySound.isPlaying())
	{
		mySound.play();
		button1.html("Pause");
	}
	else
	{
		mySound.pause();
		button1.html("Play");
	}
	if(mySound.currentTime()==mySound.duration())
		button1.html("Play");
}

function stopPlaying()
{
	mySound.stop();
	button1.html("Play");
}