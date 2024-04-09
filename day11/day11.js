//ES-6
//template literals
let series = {
    title: "leo",
    genre: "action/crime",
    released: "2023",
    language: "tamil",
    rating: 8.7,
    streaming: "amazon prime"
}
//error
// console.log("the series name is" + title + "which is of genre" + genre + 'which was released in the year' + released + 'and is streaming on' + language + 'in' + streaming + 'which has a rating of' + rating);

console.log('the series name is', series.title, 'which is of genre', series.genre, 'which was released in the year', series.released, 'and is streaming on', series.language, 'and is streaming on', series.streaming, 'in', series.language, 'which has a rating of', series.rating);

console.log(`the series name is ${series.title} which is of genre ${series.genre} which was released in the year ${series.released} and is streaming on ${series.language} and is streaming on ${series.streaming} in ${series.language} which has a rating of ${series.rating} `);


