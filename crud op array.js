let create_btn=document.getElementById('create')
// console.log(create_btn);
let read_btn=document.getElementById('read')
// console.log(read_btn);
let update_btn=document.getElementById('update')
// console.log(update_btn);
let delete_btn=document.getElementById('delete')
// console.log(delete_btn);
let create_form=document.getElementById('inner1')
// console.log(create_form);

let arr=[];
const handleadd=()=>{
    let x=document.getElementById('insert_array').value;
    console.log(x);
    arr.push(x);
      Object.assign(create_form.style,{
      left:'-100%',
      top:'30vh'
    })
    
}
create_btn.addEventListener('click',function(){
      Object.assign(create_form.style,{
      left:'0%',
      top:'30vh'
    })
    
})

read_btn.addEventListener('click',function(){
    let data=document.getElementById('inner2')
    let data1=arr.map((e)=>{
        return e;
    })
    if(data.length==0){
        data.innerHTML=<h1>No element in array</h1>
    }
    else{
        data.innerHTML=data1;
    }
})
const handleupdate=()=>{
    let data=document.getElementById('findupdate').value;
    let ind=arr.findIndex((e)=>e===data);
    let data2=document.getElementById('update').value;
     console.log(ind);
     if(ind==-1){
        console.log("not found");
        
     }
     else{
        arr[ind]=data2;
     }
     
    
}
update_btn.addEventListener('click',function(){
    alert('update')
})

delete_btn.addEventListener('click',function(){
    alert('delete')
})