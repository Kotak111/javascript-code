let SubmitData = document.getElementById('SubmitData')

function SetLocalStorage(){
    if(localStorage.getItem("USerData"))
    {
        let showdiv = document.querySelector('#show')
        showdiv.innerHTML=""
        let arr = JSON.parse(localStorage.getItem("USerData"))
        
        arr.forEach((user,id) => {
            // console.log(user.name);
            let newdiv = document.createElement('table')
            
            let HTMLDATA=`
            <tr>
                <td width="100">${id}</td>
                <td width="100">${user.name}</td>
                <td width="100">${user.password}</td>
                <td><button class="btn btn-success" onclick="DleteData(${id})">delete</button></td>
                <td><button class="btn btn-primary" onclick="OnEdit(${id})">update</button></td>
            </tr>`
            newdiv.insertAdjacentHTML('afterbegin',HTMLDATA);
            showdiv.insertAdjacentElement('afterbegin',newdiv);
        });

    }
    else{
        let arr=[];
        let ArrData = {
            name:"",
            password:""}
            arr.push(ArrData)
            localStorage.setItem("USerData",JSON.stringify(arr))
    }
}
//submit data
SubmitData.addEventListener('click',function(){
  
    
    let arr  =   JSON.parse(localStorage.getItem('USerData'))
        console.log("btn clicked");
        let name = document.getElementById('name').value;
        let password = document.getElementById('password').value;
    
        // let arr =    []
    
        let  ArrData= {
            name:name,
            password:password
        }
        arr.push(ArrData);
        localStorage.setItem("USerData",JSON.stringify(arr));
        alert("Data added Successfully");
        SetLocalStorage()
 
    })

    ///delete data
    function DleteData(id){
        let arr=JSON.parse(localStorage.getItem("USerData"));
        let deletedata = [...arr];
        deletedata.splice(id,1);
        arr=[...deletedata]
        alert("data deleted");
        localStorage.setItem("USerData",JSON.stringify(arr))
        SetLocalStorage()
    }

    //update and edit

    function OnEdit(id){
        console.log(id);
        let arr=JSON.parse(localStorage.getItem("USerData"));
        console.log(arr);
        let name = document.querySelector("#name").value=arr[id].name;
        let password = document.querySelector("#password").value=arr[id].password;

        SubmitData.setAttribute('disabled',true)

        let editbtn=document.createElement('button');
        console.log(editbtn);
        // let form =document.querySelector('#form');
        let btnedit=document.querySelectorAll("#btnedit");

        editbtn.innerHTML="update-edit"
        btnedit.forEach((ele)=>{
            ele.setAttribute('disabled',true)

        })
        // form.insertAdjacentElement("beforeend",editbtn)
        document.querySelector('#form').insertAdjacentElement('beforeend',editbtn)

        editbtn.addEventListener('click',function(e){
            e.preventDefault();
            let newname=document.querySelector("#name");
            let newpass=document.querySelector("#password");

            arr.splice(id,1,{name:newname.value,
                             password:newpass.value
            })
            localStorage.setItem("USerData",JSON.stringify(arr))
            SetLocalStorage();
            newname.value=""
            newpass.value=""
            form.removeChild(form.lastChild)
            SubmitData.removeAttribute("disabled");
        })
    }