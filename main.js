const searchForm = document.querySelector('#searchForm');
const itemList = document.querySelectorAll('.item');
const lists = document.querySelector('#lists');
searchForm.addEventListener('keyup', () => {
  const keyWord = searchForm.value;
  itemList.forEach((elm) => {
    if (!keyWord || keyWord === "") {
      elm.classList.remove('hide');
      return;
    }
    const val = elm.dataset.set;
    if (val.includes(keyWord)) {
      elm.classList.remove('hide');
    } else {
      elm.classList.add('hide');
    }
  });
});

var items = document.querySelectorAll('.item');
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click',(e)=>{
        searchForm.value = e.target.dataset.set;
        lists.style.display = 'none'
    })
}

searchForm.addEventListener('focus',()=>{
    lists.style.display = 'block'

})


searchForm.addEventListener('blur',(e)=>{
    if(e.relatedTarget === null){
    lists.style.display = ''
    }
    else if(e.relatedTarget){
        console.log(e.relatedTarget.dataset.set)
        lists.style.display = 'display';


    }

})



