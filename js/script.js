"use strict";

// alert('bvdfsj');
// const result = confirm('we use coockies at site');

// console.log(result);

// const answers = [];
// answers[0] = prompt('Имя', ''); 
// answers[1] = prompt('Фамилия', '');
// answers[2] = +prompt('Возраст', '');

// document.write(answers);

// let mcategory = prompt('category_name', '');
// let prodduct = prompt('product_name', '');

// alert(`${mcategory }/${prodduct}`);

// document.write(`https://myshop/${mcategory }/${prodduct}`);

// ----------------------------------------


// let incr = 10,
//     decr = 6;

//     console.log(++incr , --decr);

 const numberOfFilms = +prompt('how much films did you see?', '');


const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const ask = prompt('Один из последних просмотренных фильмов?', '');
const reit = +prompt('На сколько оцените его?', '');
const ask2 = prompt('Один из последних просмотренных фильмов?', '');
const reit2 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[ask]=[reit]; 
personalMovieDB.movies[ask2]=[reit2];

 console.log(personalMovieDB);
 
 /* Обращаемся к обекту personalMovieDB , в нем - к ключю своства - movies (мы оставили пустым)
    далее мы помещаем свойства: в квадратные скобки ( через точку не сработает), помещаем 
    ответ на первый вопрос и потом к нему присваеваем ( через "=") ответ на вторй вопрос ( оценка фильма)
    в КОНСОЛЕ ВЫВЕДИТСЯ Обект с кол-вом фильмов, фильмами которые посмотрели и их оценкой
    */