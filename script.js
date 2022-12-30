let page=2;// we can change the page number and page size
let pageSize=5;

let form=document.getElementById('form');
let input=document.getElementById('input');
let result=document.getElementById('result');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    alertMessage();
    let value=input.value;
    // console.log('value:', value);
    input.value='';
    functn (value);
});

let alertMessage = ()=>{
    if(input.value === ''){
        alert('Please make sure to enter the text on "books"');
    };
};

let functn = async (value) => {
    try{
        let url= await fetch(`https://www.anapioficeandfire.com/api/${value}?page=${page}&pageSize=${pageSize}`);
        let data= await url.json();
        // console.log('data:', data);
        for(let i=0;i<data.length;i++){
    
            let ol = document.createElement('ol');
            ol.setAttribute('id','serial number'); 
            // console.log('order list:', ol);

            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3= document.createElement('li');
            let li4= document.createElement('li');
            let li5= document.createElement('li');
            let li6= document.createElement('li');
            let li7= document.createElement('li');
            let li8= document.createElement('hr');
            let li9= document.createElement('br');
            
            li1.innerText = (`name = ${data[i].name}`);
            li2.innerText = (`authors = ${data[i].authors}`);
            li3.innerText = (`publisher = ${data[i].publisher}`);
            li4.innerText = (`numberOfPages = ${data[i].numberOfPages}`);
            li5.innerText = (`released = ${data[i].released}`);
            li6.innerText = (`isbn = ${data[i].isbn}`);
            li7.innerText = (`characters = ${data[i].characters[i]}`);
            ol.append(li1,li2,li3,li4,li5,li6,li7,li8,li9);
            result.append(ol);
        };
    }catch(err){
        console.log('Error:', err);
    };
};