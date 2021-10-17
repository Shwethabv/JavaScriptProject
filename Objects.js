const salaries = [
                    {firstName : "Shwetha", lastName : "BV", Salary: 100},
                    {firstName : "Santhosh", lastName : "HS", Salary : 200},
                    {firstName : "Smriti", lastName : "SS", Salary : 300}
                 ]
                 console.log(salaries.length);
                 for(let x=0; x<=salaries.length; x++){

                    let i = salaries[x].Salary;
                    let k = salaries[x+1].Salary;
                    let j = salaries[x+2].Salary;

                    let z= i+j+k;
                    console.log(z)
                    break;   
              }
 
          let a = "str";
          let b = "str1";
          
          let ab = [1, 2, 3, 4];
          console.log(ab[0]);
        ab.push(5);
        console.log(ab.reverse());
        console.log(ab.sort());
      //  console.log(ab.splice(0,2));
      //  console.log(ab.toString());
      // console.log(ab[ab.length-1]);
       console.log(Math.min.apply(null,ab));

       let bc = [1234,4321,2345,3456];
    //   console.log(bc.sort());
   bc.splice(1,1);
       console.log(bc)
                 
            
            
            