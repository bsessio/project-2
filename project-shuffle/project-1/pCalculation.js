// https://i.kym-cdn.com/photos/images/original/001/264/842/220.png
// let students = require("./pGroups");
let classList = ["Zandi Wagner","Anthony Dominguez","Ben Escorcia","Brandon Stark","Brian Samuels","Bryan O'Brien","Clifton Nwokeuku","Calah Hansen","Cameron Lattz","Christian Breyer","Chris Krinkie","Colin Kramer","Daniel Merkl","Daniel Thao","Elia Gorniak","Isaac Johnson","Jack Meuwissen","Jackson Oppenheim","Jason Ostergren","Jon Alden","Kong Yang","Nermin Ceric","Nick Wilson","Nolan Hewitt","Sean D'Amico","Seifu Dagnachew","Shane Nelson","Shawn Wallin","Syed Akbar","Tori Johnston","Zeph Tambornino",];
// let number_of_people_in_group = 4;
// let overflowStudents = [];

//randomize
let shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

//variables
let chunk;
let finalGroupsArray = [];

//DOM variables
const arraySize = document.getElementById("size");
const buttonClick = document.getElementById("shuffleButton");
const groupInfoText = document.getElementById("info");

//group splicer
let makeGroups = (array, size) => {
    finalGroupsArray = [];
    while (array.length > 0) {
		chunk = array.splice(0, size);
		console.log(chunk);
		
        finalGroupsArray.push(chunk)
    }
}

buttonClick.addEventListener("click", function() {
    
    //make a copy of our classlist
    let workingList = classList.slice(0);

    //if the class size input is a pos int
    if (arraySize.value > 0) {

        //shuffle our classlist
        let shuffledList = shuffle(workingList);

        //make our groups
        makeGroups(shuffledList, arraySize.value);

        //add our groups to the DOM

        let containerDiv = document.createElement("div");
        for (let i = 0; i < finalGroupsArray.length; i++) {
            let newList = document.createElement("ul");
            for (let j = 0; j < finalGroupsArray[i].length; j++) {
                let newListItem = document.createElement("li");
                newListItem.textContent = finalGroupsArray[i][j];
                console.log(finalGroupsArray[i][j])
                newList.appendChild(newListItem)
            }
            containerDiv.appendChild(newList);
        }
        groupInfoText.innerHTML = containerDiv.outerHTML;
        

    } else {
        alert("Please enter a number great than 0");
    }
});

// function makeGroups() {
// 	function shuffle(array) {
// 		let counter = array.length;

// 		// While there are elements in the array
// 		while (counter > 0) {
// 			// Pick a random index
// 			let index = Math.floor(Math.random() * counter);

// 			// Decrease counter by 1
// 			counter--;

// 			// And swap the last element with it
// 			let temp = array[counter];
// 			array[counter] = array[index];
// 			array[index] = temp;
// 		}

// 		return array;
// 	}
// 	var number_of_groups = Math.floor(studentsArray.length / number_of_people_in_group);
// 	var groups = [];
// 	var shuffled_students = shuffle(studentsArray);
// 	let remainder = (shuffled_students.length) - ((number_of_groups)*(number_of_people_in_group))
// 	console.log(shuffled_students[shuffled_students.length-1]);


// 	for (var g = 0; g < number_of_groups; g++) {
// 		groups.push([]);		
// 	}

// 	for (var p = 0; p < studentsArray.length; p++) {
// 		var group_num = p % number_of_groups;
// 		groups[group_num].push(shuffled_students[p]);
// 	}
// 	return groups;
// }

// makeGroups();
// // console.log("test", everyoneinGroupHasTop4(

// // 	))

// // --TOO TIRED TO DO THIS RIGHT NOW, BUT...
// // --NEED TO SIMPLIFY THIS SINCE YOU CAN JUST REFER TO THE OBJECT ITSELF NOW
// // --AND NOT HAVE TO RUN SECONDARY LOOPS

// let picks = studentsBetter.map(student => [student.name, ...student.yes]);
// console.log(picks);


// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //
// //
// //         START!
// //
// //
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const TIMER_LABEL = "CALCULATION TIME ELAPSED";
// console.time(TIMER_LABEL);

// while (!found) {
// 	iterations++;
// 	let currentGroups = makeGroups();

// 	let valid_groups = currentGroups.reduce((valid_groups, group) =>everyoneinGroupHasTop4(group) ? [...valid_groups, group] : valid_groups,[]);
// 	let freshness = 0;

// 	// Check for freshness of a group
// 	// Run a for loop looking at each group in the valid_groups array
// 	for (var i = 0; i < valid_groups.length; i++) {
// 		// define groupFreshness to restart
// 		var groupFreshness = 0;
// 		var aNewGroup = valid_groups[i];
// 		// Run a for loop looking at each person in the group we found in the valid_groups array
		
// 		for (var j = 0; j < aNewGroup.length; j++) {
// 			var person = aNewGroup[j];
			
// 			// isolate the prior group person was a member of
// 			let priorGroup = priorGroups.filter(lastGroup => lastGroup.some(name => name === person))[0];
// 			// increase groupFreshness by comparing that group to the new group, counting repeats
// 			groupFreshness += aNewGroup.filter(name => priorGroup.includes(name)).length;
// 			// console.log(groupFreshness);
// 		}

// 		groupFreshness = groupFreshness / aNewGroup.length; // establishes new group freshness

// 		if (groupFreshness > freshness) { // Overwrites freshness with the least fresh result found
// 			freshness = groupFreshness;
// 		}
// 	}

// 	let validGroup = valid_groups.length === currentGroups.length;

// 	if (valid_groups.length > best_grouping_count && freshness <= 1.5) {
// 		best_grouping_count = valid_groups.length;
// 		console.log("====!!!!!!!!!!!========!!!!!!!!!!!===========");
// 		console.log("NEW BEST: ", best_grouping_count);
// 		console.log(valid_groups, 
// 			"Freshness: ", freshness);
// 	}

// 	if (validGroup && freshness <= 1.5) {
// 		console.log("Found on iteration: ", iterations);
// 		console.log("====!!!!!!!!!!!========!!!!!!!!!!!===========");
// 		console.log("====!!!!!!!!!!!========!!!!!!!!!!!===========");
// 		console.log(currentGroups, 
// 			"Freshness: ", freshness);
// 		found = true;
// 	} else if (iterations % 100000 === 0) {
// 		// found=true
// 		console.log(
// 		"Iterations: ",
// 		iterations,
// 		" Best: ",
// 		best_grouping_count,
// 		"Freshness: ", freshness
// 		);
// 	}
// }

// console.timeEnd(TIMER_LABEL);