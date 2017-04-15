

function BasicCard (front, back){
	this.front = front;
	this.back = back;
};

function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.partial = function (){
		var par = text.split(cloze);
		console.log(par);
	};
	this.fullText = function (){
		console.log(text);
	};



	};


var firstPresident = new BasicCard(
	"Who was the first president of the USA?", 
	" George Washington");
	//console.log(firstPresident.front);

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", 
    "George Washington");

firstPresidentCloze.fullText();