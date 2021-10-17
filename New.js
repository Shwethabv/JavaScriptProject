
function myfunction(){
    let date = new Date();
    let day = date.getDay();
    let year = date.getFullYear();
    console.log(year);


    let str ="welcome to new class"
    console.log(str.length);

    console.log(str.slice(4,9));
    console.log(str.slice(4));

    console.log(str.substr(4,3));

    let str1 ="Home";
    console.log(str1[0]);
    console.log(str1.charAt(3))

    console.log(str1.trim());

    let str2 = "Home,|new | new1";
    console.log(str2.padStart(4,0));

    console.log("HOME".split(""));
    console.log("HOME".split(""));
}

myfunction();
