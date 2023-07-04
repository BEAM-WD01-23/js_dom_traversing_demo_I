//I
    let showAll = document.querySelector('.main');
    //console.log(showAll);
    let h2 = document.querySelector('.h2');
    let ul = document.querySelector('.ul');
    let li_1 = document.querySelector('#one');
    //let see_all_lists = showAll.children;//shows only tags 
    //let see_all_lists = showAll.childNodes;//shows everything that are inside the parent
    //console.log(see_all_lists);
    //
//II
    let see_all_lists = showAll.children[0];
    let show_2 = showAll.firstElementChild;
    let show_3 = showAll.lastElementChild;
    let show_4 = h2.nextElementSibling;
    let show_5 = ul.previousElementSibling;
    let show_6 = showAll.parentNode;
    let show_7 = ul.parentNode;
    //console.log(show_7);

    let allMyList = showAll.children[1];//ul
    let allMyUl = allMyList.children;
    //console.log(allMyUl);//do the same with the below loop ...

    //or use loop
    for(let a=0; a<allMyUl.length; a++){
        //console.log(allMyUl[a]);
    }
    //manipulate elements ...
    let eachLi = allMyList.children[0].textContent;//innerHTML;
    //console.log(eachLi);//the first li
    //
//III
    //remove content: two possibilities:-
    //remove() we can target the element itself and delete it
    //removeChild() we target the parent-element and delte the child from it ...
    //
    //target the child and delete it ...
    let li_3 = document.getElementById('three');
    //li_3.remove();
    //delete from the parent
    const deleteLi = document.getElementById('myUl');
    let liThree = document.getElementById('three');
    //deleteLi.removeChild(liThree);
    

    

   