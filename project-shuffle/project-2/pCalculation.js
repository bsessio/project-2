// https://i.kym-cdn.com/photos/images/original/001/264/842/220.png
let { 
	studentsBetter, 
	priorGroups
 } = require("./pGroups.js");
let unwanted = [];
let number_of_people_in_group = 4;
const TOP = 4;
let found = false;
let iterations = 0;
let best_grouping_count = 0;

let studentsNotAsGood = [];

// Searches through each student to make sure that enough students were chosen that our data is healthy
studentsBetter.forEach(function(student) {
	student.yes.forEach(function(faved) {
		for (let i = 0; i < studentsBetter.length; i++) {
			if (studentsBetter[i].name === faved) {
				studentsBetter[i].selected++;
			}
		}
	});
});

// Pushes students who weren't chosen at all...
studentsBetter.forEach(function(student) {
studentsNotAsGood.push(student.name);
	if (student.selected === 0) {
		unwanted.push(student.name);
	}
});

// And then if the number of unwanted students exceeds our people-in-group, stop this process and report who they were
if (unwanted.length > studentsBetter.length / number_of_people_in_group) {
	console.log(
	"=== There are too many students who were not chosen for this to be a valid dataset. === \n=== The following students were not chosen ===\n=== " +
	unwanted +
	" ==="
	);
	process.exit();
}

function makeGroups() {
	function shuffle(array) {
		let counter = array.length;

		// While there are elements in the array
		while (counter > 0) {
			// Pick a random index
			let index = Math.floor(Math.random() * counter);

			// Decrease counter by 1
			counter--;

			// And swap the last element with it
			let temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}

		return array;
	}

	var number_of_groups = Math.floor(studentsBetter.length / number_of_people_in_group);
	var groups = [];
	var shuffled_students = shuffle(studentsNotAsGood);

	for (var g = 0; g < number_of_groups; g++) {
		groups.push([]);
	}
	for (var p = 0; p < studentsBetter.length; p++) {
		var group_num = p % number_of_groups;
		groups[group_num].push(shuffled_students[p]);
	}
	return groups;
}

// console.log("test", everyoneinGroupHasTop4(

// 	))

// --TOO TIRED TO DO THIS RIGHT NOW, BUT...
// --NEED TO SIMPLIFY THIS SINCE YOU CAN JUST REFER TO THE OBJECT ITSELF NOW
// --AND NOT HAVE TO RUN SECONDARY LOOPS

let picks = studentsBetter.map(student => [student.name, ...student.yes]);
// console.log(picks);

function hasTop4(person, group) {
	const top8 = picks.find(p => p[0] === person);
	if (!top8) {
		//if the person does not have a top4
		// console.log("!top8:",person)
		return true;
	}

	const top4 = top8.slice(1, TOP + 1);
	//console.log(person, top4)
	if (top4.length !== TOP) {
		console.log("bad top4!", person);
		return true;
	}

	//console.log("person: ", person, group.map( member => top4.includes(member) ))

	return group.some(member => top4.includes(member));
}

function everyoneinGroupHasTop4(group) {
	return group.every(member => hasTop4(member, group));
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//
//         START!
//
//
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const TIMER_LABEL = "CALCULATION TIME ELAPSED";
console.time(TIMER_LABEL);

while (!found) {
	iterations++;
	let currentGroups = makeGroups();

	let valid_groups = currentGroups.reduce((valid_groups, group) =>everyoneinGroupHasTop4(group) ? [...valid_groups, group] : valid_groups,[]);
	let freshness = 0;

	// Check for freshness of a group
	// Run a for loop looking at each group in the valid_groups array
	for (var i = 0; i < valid_groups.length; i++) {
		// define groupFreshness to restart
		var groupFreshness = 0;
		var aNewGroup = valid_groups[i];
		// Run a for loop looking at each person in the group we found in the valid_groups array
		
		for (var j = 0; j < aNewGroup.length; j++) {
			var person = aNewGroup[j];
			
			// isolate the prior group person was a member of
			let priorGroup = priorGroups.filter(lastGroup => lastGroup.some(name => name === person))[0];
			// increase groupFreshness by comparing that group to the new group, counting repeats
			groupFreshness += aNewGroup.filter(name => priorGroup.includes(name)).length;
			// console.log(groupFreshness);
		}

		groupFreshness = groupFreshness / aNewGroup.length; // establishes new group freshness

		if (groupFreshness > freshness) { // Overwrites freshness with the least fresh result found
			freshness = groupFreshness;
		}
	}

	let validGroup = valid_groups.length === currentGroups.length;

	if (valid_groups.length > best_grouping_count && freshness <= 1.5) {
		best_grouping_count = valid_groups.length;
		console.log("====!!!!!!!!!!!========!!!!!!!!!!!===========");
		console.log("NEW BEST: ", best_grouping_count);
		console.log(valid_groups, 
			"Freshness: ", freshness);
	}

	if (validGroup && freshness <= 1.5) {
		console.log("Found on iteration: ", iterations);
		console.log("====!!!!!!!!!!!========!!!!!!!!!!!===========");
		console.log("====!!!!!!!!!!!========!!!!!!!!!!!===========");
		console.log(currentGroups, 
			"Freshness: ", freshness);
		found = true;
	} else if (iterations % 100000 === 0) {
		// found=true
		console.log(
		"Iterations: ",
		iterations,
		" Best: ",
		best_grouping_count,
		"Freshness: ", freshness
		);
	}
}

console.timeEnd(TIMER_LABEL);