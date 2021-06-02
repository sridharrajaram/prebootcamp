let name = ["sridhar","anusha","balendra"];
let number = [9001,9002,9003];
console.log(number[name.indexOf("sridhar")]);

let details = {"sridhar":9001,"anusha":9002,"balendra":9003};
console.log(details["sridhar"]);

let details = {"sridhar":9001,"anusha":9002,"balendra":9003};
details["selva"] = 9004;
details["dhanya"] = 9005;
details["sabitha"] = 9006;
details["ilango"] = 9007;
details["madhu"] = 9008;
details["hari"] = 9009;
console.log(details);
console.log(details["dhanya"]);
console.log(details["madhu"]);


let car = {"make":"maruthi","model":"swift","engine":"turbo","wheels":"alloy wheels","brake":"ABS","color":"red","year":2021};
console.log(car);
console.log(car["year"]);


let cars = [
{"make":"maruthi","model":"swift","engine":"turbo","wheels":"alloy wheels","brake":"ABS","color":"red","year":2021},
{"make":"toyota","model":"Innova","engine":"turbo","wheels":"alloy wheels","brake":"ABS","color":"white","year":2020},
{"make":"rollsroyce","model":"tang","engine":"turbo","wheels":"alloy wheels","brake":"ABS","color":"yellow","year":2019},
{"make":{"brand1": "chevrolet","brand2":"tata","brand3":"bmw"},"model":"tang","engine":"turbo","wheels":"alloy wheels","brake":"ABS","color":"yellow","year":2019}
];
console.log(cars);
console.log(cars[2]["year"]);
console.log(cars[0]["make"]);
console.log(cars[0].make);
console.log(cars[3]["make"]["brand2"]);
console.log(cars[3].make.brand2);

let database = {"sridhar":12345,"anusha":[121,122.5, true, "hosur",{"s1":"phy","s2":"che","s3":"mat","s4":"bio"}]};
console.log(database);
console.log(database["sridhar"]);
console.log(database["anusha"][3]);
console.log(database["anusha"][4]["s3"]);
console.log(database["anusha"][4].s3);


let elem = [12,12,12,12,34,34,34,34,34,34,45,45,56,56,56,78,78,78,78,78,89,89,89,89,89,89,89,90];
let count ={};
for(i=0;i<elem.length;i++)
{
	if (count[elem[i]] === undefined)
	{
	    count[elem[i]] = 1;
	}
	else
	{
	    count[elem[i]] += 1;
	}
}
console.log(count);

























