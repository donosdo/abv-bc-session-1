/* program to return minimum and maximum number in an array*/
function findMinMax(arr){
  	typeof arr == typeof[]
  	let itemList=[];
	let minItem = arr[0];
	let maxItem = arr[1];
	let n = arr.length;
	let isSame = false;
	
	for (let i = 1; i < n   ; i++) {
	  if (minItem > arr[i]){
	      minItem = arr[i]
	    }
	 }
	
  	for (let i = 0; i < n ; i++) {
  	  if (maxItem < arr[i]) {
	    maxItem = arr[i];
      	}
     }
  
  	for (let i = 0; i < n -1 ; i++) {
    	if (arr[i] === arr[i+1]){
      	isSame = true;
      	itemList.push(arr[i]);
    return console.log(itemList);
    }
    } 

	itemList.push(minItem, maxItem);
	
	return console.log(itemList);
} 
