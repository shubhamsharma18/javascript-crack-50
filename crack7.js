// In an array of objects filter out hose objects which have gender value name

let arr=[
    {
        name:"shubham",
        gender:"male"
    },
     {
        name:"disha",
        gender:"female"
    },
     {
        name:"tushar",
        gender:"male"

    },
     {
        name:"sakshi",
        gender:"female"
    }
]

let result=arr.filter((obj)=>{
       return (obj.gender=="male")
})
console.log(result);

