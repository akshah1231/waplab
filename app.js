function max(x,y){
    if(x>y){
        return x;
    }
    else return y;
}
console.log(max(3,4));
function maxOfThree(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>c && b>a){
        return b;
    }
    else if(c>a && c>b){
        return c;
    }
}
console.log(maxOfThree(39,9,12));

function isVowel(ch){
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
        return true;
    }
    else{
        return false;
    }
}
console.log(isVowel('A'));




function sum(numbers) {
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total+=numbers[i];
    }
    return total;
}
function multiply(numbers) {
    let total=1;
    for (let i = 0; i < numbers.length; i++) {
        total*=numbers[i];
    }
    return total;
}
console.log("The sum of the given array is: "+sum([1,2,3,4]));
console.log("The multiply of the given array is: "+multiply([1,2,3,4]));


function reverse(name) {
    let reversed=" ";
    for (let i = name.length; i >=0; i--) {
        reversed+=name.charAt(i);
    }
    return reversed;
}
console.log("The reversed String is: "+reverse("jag testar"));


function findLongestWord(words) {
    let longestLength=-1;
    for (let i = 0; i < words.length; i++) {
        if(words[i].length>longestLength){
            longestLength=words[i].length;
        }
    }
    return longestLength;
}
console.log("The longest Length of word is: "+findLongestWord(["Bipin","Shree Krishna","Abhishek","Kamal"]));

