'use strict';

let passStudent = [];
const allStudents = [
	'Иванов',
	'Петров',
	'Сидоров',
	'Кузнецов',
	'Смирнов',
	'Попов',
	'Соколов',
];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr1, arr2) => {
	for (let student of arr1) {
		if (!arr2.includes(student)) {
			passStudent.push(student);
		}
	}
	return passStudent;
};

console.log(filter(allStudents, failedStudents));
