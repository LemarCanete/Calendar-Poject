const select = document.querySelector("#months-select");
const monthsText = document.querySelector("h2");
const list = document.querySelector("#null");

select.addEventListener("change", ()=>{
    choice = select.value;

    switch (choice){
        case 'Febuary':
            days = 28;
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            days = 30;
            break;
        default:
            days = 31;
            break;
    }
    createCalendar(days, choice)
})

createCalendar = (days, choice)=>{
    list.innerHTML = '';
    monthsText  .textContent = choice;
    for(i = 1; i <= days; i++){
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem)
    }
}

createCalendar(31, "January")