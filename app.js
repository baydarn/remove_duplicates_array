//1.yöntem set objesini kullanmak
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
let unique = [...new Set(names)];
console.log(unique);

//2.yöntem filter() kullanmak
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
let x = (names) => names.filter((v,i) => names.indexOf(v) ===i)
x(names);

//3.yöntem forEach()
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
function removeDup(names){
  let unique = {};
  names.forEach(function(i){
    if(!unique[i]){
      unique[i] = true;
    }
});
return Object.keys(unique);
}