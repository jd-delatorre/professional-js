//Professional JS for Developers
//Code samples by JD De La Torre

//function for typeOf Example
function getTypeOf(){
	var typeOfExample = "This is an example!";
	alert( typeof(typeOfExample) );
}

//function for toString example
function getToString(){
	var number = 10;
	alert( number.toString() );
}

//function for Object Example
function newObjects(){
	var person = new Object();
	person.name = "Ben";
	person.age = 30;

	alert( person.name + ' ' + person.age );
}

//function for new object with object literal notation
function newObjectsLiteral(){
	var person = {
		name: "Dean",
		age: 45
	}

	alert( person["name"]+ ' ' + person["age"] );
}

//function for array example
function newArrayExample(){
	var colors = [ "red", "green", "yellow" ];
	alert( colors );
	alert( colors[1] );
}

//function for join array example
function joinArrayExample(){
	var joinColors = [ "yellow", "black", "brown" ];
	alert( joinColors.join(' || ') );
	alert( joinColors.join(', ') );
}

//function for Stack Array Example
function pushPopArrayExample(){
	var colors = new Array();
	var count = colors.push( "red", "yellow" );
	alert( count + ' ' + colors );

	var single = colors.pop();
	alert( single + ' Removed, Leaving ' + colors );
}

//function for Queue Array Example
function queueArrayExample(){
	var colors = new Array();
	var count = colors.push( "green", "black", "pink" );
	var item = colors.shift();

	alert( item );
}

//function for reverse array order
function reverseArrayExample(){
	var values = [ 1, 2, 3, 4, 5 ];
	values.reverse();
	alert( values );
}

//function for sorting and comparing array
function sortCompareArrayExample(){
	var values = [ 0, 1, 5, 10, 15 ];
	values.sort();
	alert( values );

	function compare(value1, value2){
		if( value1 < value2 ){
			return -1;
		}else if( value1 > value2){
			return 1;
		}else{
			return 0;
		}
	}

	values.sort(compare);
	alert( values );
}

//function for concat array example
function concatArrayExample(){
	var colors = [ "lime", "aqua", "cypress" ];
	var colors2 = colors.concat( "blue", "marine" );
	alert( colors2 );
}

//function for slice array example
function sliceArrayExample(){
	var colors = [ "red", "blue", "green", "black", "brown" ];
	var colors2 = colors.slice(1);
	var colors3 = colors.slice(0, 2);
	alert( colors2 );
	alert( colors3 );
}

































