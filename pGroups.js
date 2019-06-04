const picks =  [
	["First Person","First Pick","Second Pick","Third Pick","Fourth Pick"],
    ["Second Person","First Pick","Second Pick","Third Pick","Fourth Pick"]
    // ,
    // ["Third Person","First Pick","Second Pick","Third Pick","Fourth Pick"],
    // ["Fourth Person","First Pick","Second Pick","Third Pick","Fourth Pick"]
];

var students = [
    'Adam',
    'Andrew',
    'Ash',
    'Brian',
    'Chris',
    'Deepa',
    'Ellen',
    'Esther',
    'Ivan',
    'Jeff',
    'John',
    'Kieran',
    'Laura',
    'Lorenzo',
    'Michael',
    'Nhu',
    'Sabrina',
    'Simon'];

    var studentsBetter = [
        {name: 'Adam', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 0},
        {name: 'Andrew', yes: ['Adam', 'Ash', 'Brian', 'Chris'], selected: 0},
        {name: 'Ash', yes:  ['Andrew', 'Adam', 'Brian', 'Chris'], selected: 0},
        {name: 'Brian', yes: ['Andrew', 'Ash', 'Adam', 'Chris'], selected: 0},
        {name: 'Chris', yes: ['Andrew', 'Ash', 'Brian', 'Adam'], selected: 0},
        {name: 'Deepa', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 1},
        {name: 'Ellen', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 1},
        {name: 'Esther', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 1},
        {name: 'Ivan', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 1},
        {name: 'Jeff', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 1},
        {name: 'John', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 1},
        {name: 'Kieran', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 1},
        {name: 'Laura', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 1},
        {name: 'Lorenzo', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 1},
        {name: 'Michael', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 0},
        {name: 'Nhu', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 0},
        {name: 'Sabrina', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 0},
        {name: 'Simon', yes: ['Andrew', 'Ash', 'Brian', 'Chris'], selected: 0}
    ];

module.exports = {students, picks, studentsBetter}