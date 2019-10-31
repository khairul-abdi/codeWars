var rooms = {
    firstRoom: {
        name: 'Saw I',
        description: 'Easy level',
        completed: true,
    },
    secondRoom: {
        name: 'Saw II',
        description: 'Medium level',
        completed: false,
    },
    thirdRoom: {
        name: 'Saw III',
        description: 'Hardcore level',
        completed: false,
    },
}

/*
=====SOAL======
Escape the room
You are creating an escape the room game. The first step is 
create an object called rooms that contains all of the rooms 
of the game. The room object should have at least 3 rooms as 
properties, and each individial room should have at least three 
properties (example: name, description, completed).
*/
/*
CARA ORANG LAIN
1. ======>

var rooms = {}
for (var i = 0; i < 3; i++) {
    rooms[`room${i}`] = {'a': 1, 'b': 2, 'c': 3}
}

2. ======>

a=[[],[],[]];rooms={a,b:a,c:a}

3. ======>

var rooms = {
  a: a,
  b: a,
  c: a,
}
*/