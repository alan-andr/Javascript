const coursers = [
    { id: 1, title: 'JavaScript', category: 'Programming', price: 0 },
    { id: 2, title: 'Advanced SQL', category: 'Database', price: 50 },
    { id: 3, title: 'React For Beginners', category: 'Programming', price: 0 },
    { id: 4, title: 'Protheus Advanced', category: 'ERP', price: 100 }
];

let freeCourses = coursers.filter((item) => item.price === 0);
console.log('Available free courses: ' , freeCourses);

let selectedCourse = coursers.find((item) => item.title.toUpperCase() === 'Advanced SQL'.toUpperCase());
console.log('Selected course: ' , selectedCourse)