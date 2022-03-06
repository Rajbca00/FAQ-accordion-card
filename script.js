
document.querySelectorAll('.accordion__question').forEach(question=>question.addEventListener('click',(el)=>{
    // console.log(el.target.parentElement.parentElement);
    var accordion_item = el.target.parentElement.parentElement;
    var accordion_collapse = accordion_item.querySelector('.accordion__collapse');
    var accordion_question = el.target;

    accordion_collapse.classList.toggle('show');
    accordion_question.classList.toggle('open');
    
}))