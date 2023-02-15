// nb info about how to create a save file etc is here: https://kastark.co.uk/articles/incrementals-part-2.html 


var ideas = 0;
var faculties = 0;
var badPoems = 0;
var okayPoems = 0;
var goodPoems = 0;

function haveIdea(num){
	ideas = ideas + num;	
	document.getElementById("ideas").innerHTML = prettify(ideas);
}


function developNoticing(num){
    var facultiesCost = Math.floor(1 * Math.pow(2,faculties));     //works out the cost of this cursor
    if(ideas >= facultiesCost){                                   //checks that the player can afford the cursor
        faculties = faculties + 1;                                   //increases number of cursors
    	ideas = ideas - facultiesCost;                          //removes the cookies spent
        document.getElementById('faculties').innerHTML = prettify(faculties);  //updates the number of cursors for the user
        document.getElementById('ideas').innerHTML = prettify(ideas);  //updates the number of cookies for the user
    };
    var nextCost = (1 * Math.pow(2,faculties));       //works out the cost of the next cursor
    document.getElementById('facultiesCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
};

function writeBadPoem(num){
	
	if(ideas >= 1){                                   //checks that the player can afford the cursor
        badPoems = badPoems + 1;                                   //increases number of cursors
    	ideas = ideas - 1;                          //removes the cookies spent
        document.getElementById('badPoems').innerHTML = prettify(badPoems);  //updates the number of cursors for the user
    
    };
};

function writeOkayPoem(num){
	
	if(ideas >= 3){                                   //checks that the player can afford the cursor
        okayPoems = okayPoems + 1;                                   //increases number of cursors
    	ideas = ideas - 3;                          //removes the cookies spent
        document.getElementById('okayPoems').innerHTML = prettify(okayPoems);  //updates the number of cursors for the user
    
    };
};

function writeGoodPoem(num){
	
	if(ideas >= 10){                                   //checks that the player can afford the cursor
        goodPoems = goodPoems + 1;                                   //increases number of cursors
    	ideas = ideas - 10;                          //removes the cookies spent
        document.getElementById('goodPoems').innerHTML = prettify(goodPoems);  //updates the number of cursors for the user
    
    };
};

function submitPoem(){
	var subPoemLevel = document.getElementById('subPoemLevel');
	var subMagazine = document.getElementById('subMagazine');
	var result = ""
	
	
	if(subPoemLevel.value == "badPoem"){
		
		if(badPoems < 1) {
			result = "You don't have any bad poems!"
			document.getElementById('subResult').innerHTML = result;	
			return;
			
		} else {
			
			badPoems = badPoems - 1;
			document.getElementById('badPoems').innerHTML = prettify(badPoems);
		
		}

		
		if(subMagazine.value == "brittleStar") {
			
			result = "Your poem was accepted!"
			
		} else {
			
			result = "Your poem was rejected!"
			
		}
	}

	else if(subPoemLevel.value == "okayPoem"){
		
		if(okayPoems < 1) {
			result = "You don't have any okay poems!"
			document.getElementById('subResult').innerHTML = result;	
			return;
		} else {
			
			okayPoems = okayPoems - 1;
			document.getElementById('okayPoems').innerHTML = prettify(okayPoems);
		
		}
		
		
		if(subMagazine.value == "poetryReview"){
		
			result = "Your poem was rejected!"

		} else {

			result = "Your poem was accepted!"

		}
		
	}

	else {
		
		if(goodPoems < 1) {
			result = "You don't have any good poems!"
			document.getElementById('subResult').innerHTML = result;	
			return;
		} else {
			
			goodPoems = goodPoems - 1;
			document.getElementById('goodPoems').innerHTML = prettify(goodPoems);
		
		}

		result = "Your poem was accepted!"
		
	};

	document.getElementById('subResult').innerHTML = result;	
		
} 
	

	
	



function logger(toLog){
	
	document.getElementById('logger').innerHTML = toLog;
	
}

// INTERVAL HAPPENER THING

window.setInterval(function(){

var ideaGen = faculties/10
haveIdea(ideaGen);

}, 1000);


function prettify(input){
    var output = Math.round(input * 1000000000)/1000000000;
	return output;
}
