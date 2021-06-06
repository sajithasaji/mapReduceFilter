//1.create a XHR object
var req = new XMLHttpRequest();
//2.open a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);//GET - recieve information which is already there in server,true-if any part of data missing the other part need not affect the rest part of the execution of program
//3.send the connection or request
req.send();
//4.onload is an event,once the data recieved successfully from the server , we need to perform some task that operation is done using this function

req.onload=function(){
   var data=JSON.parse(this.response);//data recieving from server will be of string format to convert it into a json object , this.response-the response recieving from server
//user defined statements


// Get all the countries from Asia continent /region using Filter function
var res=data.filter(element=>{
    return element.region === 'Asia';

    
    
}).map((element => 
    element.name
    ));
console.log(res)  
// Get all the countries with population of less than 2 lacs using Filter function
var result=data.filter(element=>{
    return element.population <= '200000';

    
    
}).map((element => 
    element.name
    ));
console.log(result) 

// Print the following details name, capital, flag using forEach function
data.forEach(a=>{
    
    
    console.log(`${a.name} :${a.capital}:${a.flag}`)
   
})
// Print the total population of countries using reduce function
var rese=data.reduce((acc,ele)=>{
     var element=ele.population;
    
    return acc+element
},0); // initial values can we initialized like this
console.log("total population of countries "+rese)

// Print the country which use US Dollars as currency.
var result2=data.filter(element=>{
    for (i = 0; i < element.currencies.length; i++) {
        if(element.currencies[i].code === 'USD')
        return element.currencies[i].code === 'USD'
      }
       
    
}).map((element => 
    element.name
    ));
console.log(result2) 
}


