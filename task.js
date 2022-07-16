let userData=[
    {"name":"raja","age":23,"game":"basketball"},
{"name":"ram","age":23,"game":"football"},
{"name":"vignesh","age":23,"game":"football"},
{"name":"football","age":23,"game":"basketball"},
{"name":"rose","age":23,"game":"basketball"},
]

let a=["football"];
var found = userData.filter(({game}) => a.includes(game));

var n=found.map(({name})=>(name));
var b=n.map(name => 
     name.charAt(0).toUpperCase()+name.substr(1) );

console.log(b);