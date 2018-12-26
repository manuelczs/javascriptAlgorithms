var isAnagram = (str, rts) => {

	let obj1 = {};
	let counter = 0;

	str = str.toLowerCase().replace(/\s/g, "");
	rts = rts.toLowerCase().replace(/\s/g, "");

	if(str.length != rts.length) {
		return false;
	}

	for(let i = 0; i<str.length; i++) {
		if(obj1[str[i]] == null) {
			obj1[str[i]] = 1;
		} else {
			obj1[str[i]] += 1;
		}
	}

	for(let i = 0; i<rts.length; i++) {
		if(obj1[rts[i]] != null) {
			obj1[rts[i]] -= 1
		}
	}

	for(let i = 0; i<Object.values(obj1).length; i++) {
		counter += Object.values(obj1)[i];
	}

	return counter == 0;
}
console.log(isAnagram('clint eastwood', 'old west action'));