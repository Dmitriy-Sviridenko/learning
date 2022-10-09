function descendingOrder(n){
	return Number(sort(String(n).split("")).join(""));
}

function sort(n){
	for (j = n.length - 1; j > 0; j--){
		for ( i = 0; i < j; i++){
			if (n[i] < n[i+1]){
				let temp = n[i];
				n[i] = n[i+1];
				n[i+1] = temp;
			}
		}
	}
	return 	n
}


console.log(descendingOrder(111))


