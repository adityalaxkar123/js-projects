const searchform = document.querySelector('form');
const searchbox = document.querySelector('#search');
const Searchresult = document.querySelector('#search-result');
const showBtn1 = document.querySelector('#show-more-btn1');
const showBtn2 = document.querySelector('#show-more-btn2');
const searchBtn = document.querySelector('#btn');

const accesskey='you can reach your access key at unsplash.com';

let keyword="";
let page = 1;

async function searchImage(){
keyword = searchbox.value;
/*console.log(keyword)*/
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
const response = await fetch(url);
const data = await response.json();
const results = data.results;
console.log(results)

if (page === 1) {
    Searchresult.innerHTML="";
}

results.map((result)=>{
    const image = document.createElement("img");
    image.src=result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href=result.links.html;
    imagelink.target='_blank';
    imagelink.appendChild(image);
    Searchresult.appendChild(imagelink);
})
showBtn1.style.display='block';
if (page >2)showBtn2.style.display='block'


}

searchform.addEventListener('submit',function(e){
e.preventDefault();
page = 1;
searchImage();
})
showBtn1.addEventListener('click',()=>{
    page++;
    searchImage();
})
showBtn2.addEventListener('click',()=>{
   page=1;
    searchImage();
})