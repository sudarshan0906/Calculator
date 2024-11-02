var my_dog={
    "name":"Rocky",
    "legs":4,
    "ears":2,
    "friends":"chotu"
};
console.log(my_dog["name"]);
my_dog.bark="bowwwwwwww";
delete my_dog.ears;
console.log(my_dog);
function check(prop)
{
    if(my_dog.hasOwnProperty(prop)){
        return my_dog.prop;
    }
    else
        return "notfound";
}
console.log(check("name"));