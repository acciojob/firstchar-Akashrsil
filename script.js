function firstChar(text) {
	let temp=text.trim();
	if(temp.length==0)
		return "";
	return temp[0];
  // your code here
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
