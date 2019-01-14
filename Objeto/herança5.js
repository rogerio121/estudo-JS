console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);


// String
String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}

String.prototype.toString = function(){
    return 'Lascou tudo';
}

console.log('Rogério'.reverse());


//Array
Array.prototype.first = function(){
    return this[0];
}

console.log([ 1, 2, 3, 4, 5].first());


