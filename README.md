# Text-PopUp-Messages
# The Main goal is to Understand The Logic How it is working.
# Open project code one side and this readme another side to better understand what I'm trying to say.
Check out Demo: https://simplifiedweb.github.io/Text-PopUp-Messages/

I made a simple example how we do the popup messages. Read the Readme file you can understand better.

So in these simple project,

let me explain you the working and the logic here than you can make it on your own by taking reference what i provide in this Readme file,

	so we first setup the container, inside the container we have
	4 div element. So When we Click Each div element, we See Some text messages.
	So I told you Click, yep we use onclick event on each of them.

So this are the div's which we use to click and see some text messages.

	so now we build the text message container, that gonna show up when we click.
	

so we have 4 div element that show 4 different text messages. 
so we make 4 div's for text that gonna show up when we click on that div elements.


We create 4 text div's. Each of them have the same class name and different id.
why,
Bcz we have to hide each text-message container by same classname and show when the user click on it, means one time click only the one text container show up.
var x;
   x = document.getElementsByClassName("containerbox");
    for(var i = 0; i<x.length;i++){
        x[i].style.display = "none";
    }
    //in this containerbox is a text-msg container we are gonna hide.
we use getElementsByClassName property to iterate over it, every div elements and make it hidden by display:none;
This property gives htmlCollection like a array. so we can access it through index.
	- so we iterate all over element and remove it,
	- then after removing, the next line we add the only click one. means we use display:"block" for each specific element whatever the use clicked.
	so you can understand like first iterate all over it and remove all means add display:none, 
then add the click one.
that's how we are doin these.
	So the reason of taking same class name is for iteration and adding display: none; to hide them.bcz
we want to show one text msg at a time.  
How we are gonna show one msg at a time, so bascially the onclick event we use on div elements, we pass the id, i told
you befor that class name are same but id for every text msg div element are different.
so we pass the id to the function of boxcontainer that id we use inside the javascript function and 
document.getElementById(id).style.display = "block" this line in javascript file means that find the id of the div,
and make it block.
	-onclick="boxcontainer('box1') --> this boxcontainer is a function that we create on a javascript file. and
					we're passing the id and grabbing it on the function and using it to make
				that text msg div display: block
	
  
  HOPE THIS EXPLANATION HELPS YOU.
