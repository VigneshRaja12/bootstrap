fetch("https://www.balldontlie.io/api/v1/players").then((data)=>{
             //  console.log(data)
        return data.json();
    }).then((objectdata)=>{
         console.log(objectdata.data[0].id);
        let tabledata="";
        let selectionboxdata="";
        objectdata.data.map((values)=>{tabledata+= `<tr>
            <td>${values.id}</td>
            <td>${values.first_name}</td>
            <td>${values.team['division']}</td>
            <td>${values.team['name']}</td>
          </tr>`})
        document.getElementById("tablebody").innerHTML=tabledata;

        objectdata.data.map((values)=>{selectionboxdata+= `<option value="${values.team['name']}">${values.team['name']}</option>`
        })
        
        document.getElementById("select").innerHTML=selectionboxdata;
    

        }).catch((err)=>{
        console.log(err)})
        
        