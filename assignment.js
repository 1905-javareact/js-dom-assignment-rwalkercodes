// this is number 1
function getUSA(){
    let usa = document.getElementsByTagName("h1")[0].getElementsByTagName("span")[1].innerHTML
    return usa
}
console.log(getUSA())

// this is number 2
function getPeopleInSales(){
    let salesArray = []
    let tableRows = document.getElementsByTagName("tr")
    for(let i = 1; i < tableRows.length; i++){
        if(tableRows[i].getElementsByTagName("td")[1].innerHTML == "Sales"){
            salesArray.push(tableRows[i].getElementsByTagName("td")[0].innerHTML)
        }
    }
    return salesArray
}
console.log(getPeopleInSales())

// this is number 3
function getAnchorChildren(){
    let anchors = document.getElementsByTagName("a")
    let contents = []
    for(let i = 0; i < anchors.length; i ++){
        if(anchors[i].getElementsByTagName("span")){
            if(anchors[i].getElementsByTagName("span")[0] !== undefined){
                contents.push(anchors[i].getElementsByTagName("span")[0].innerHTML)
            }
        }
    }
    return contents
}
console.log(getAnchorChildren())

// This is number 4 & 7 | getHobbies & skillEvent
function getHobbies(){
    let value
    let skills = document.getElementsByTagName("select")[2].options
    for(let i = 0; i < skills.length; i++){
        if(i == skills.selectedIndex){
            value = skills[i].value
            console.log(value)
        }
    }
    alert("Are you sure " + value + " is one of your skills?" )
}

// this is number 5
function getCustomAttribute(){
    let wholeArray = []
    let first = {
        element: document.getElementsByTagName("h1")[0].getElementsByTagName("span")[0],
        attribute: document.getElementsByTagName("h1")[0].getElementsByTagName("span")[0].attributes[0].value
    }
    let second = {
        element: document.getElementsByTagName("td")[8],
        attribute: document.getElementsByTagName("td")[8].attributes[1].value
    }
    let third = {
        element: document.getElementsByTagName("input")[0],
        attribute: document.getElementsByTagName("input")[0].attributes[1].value
    }
    let fourth = {
        element: document.getElementsByTagName("input")[1],
        attribute: document.getElementsByTagName("input")[1].attributes[1].value
    }
    let fifth = {
        element: document.getElementsByTagName("a")[11].getElementsByTagName("span")[0],
        attribute: document.getElementsByTagName("a")[11].getElementsByTagName("span")[0].attributes[0].value
    }
    wholeArray.push(first, second, third, fourth, fifth)
    return wholeArray
}

// this is number 6
function sumEvent(){
    if(document.getElementById("num1").value == "" || document.getElementById("num2").value == ""){
        return alert("You have to enter values into the input fields")
    } else {
        let input1 = parseInt(document.getElementById("num1").value)
        let input2 = parseInt(document.getElementById("num2").value)
    
        if(input1 && input2){
            document.getElementById("sum").innerText = input1 + input2
        }
    }
}

// this is number 8
// One the initial page load oldRadio will be undefined so during the first time a radio button is selected
// the error message will say "so you like blah more than undefined now".
// I thought that was really funny so I left it how it was
// I know I'd have to right a if statement condition saying if oldRadio is undefined then to say something else
let newRadio, oldRadio
function getfavoriteColor(){
    let radios = document.getElementsByName("favoriteColor")
    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked == true){
            oldRadio = newRadio
            newRadio = radios[i].value
            radios[i].style.backgroundColor = newRadio
        }
    }
    if(!(oldRadio == newRadio)){
        alert(`So you like ${newRadio} more than ${oldRadio} now?!
        Fine. I'll changed the background color of your radios to ${newRadio}`)

    } else{
        alert(`You've selected ${newRadio}, changing the background color now`)
    }
    return
}

// this is number 9
function changeVisibility(){
    let names = document.getElementsByClassName("empName")
    for(let x of names){
        x.onmouseover = () =>{
            x.style.visibility = "hidden";
        }
        x.onmouseout = () =>{
            x.style.visibility = "visible";
        }
    }
}
changeVisibility()
// this is number 10
let theTime = document.getElementById("currentTime")
let interval = setInterval(()=>{
    let date = new Date()
    theTime.innerHTML = date.toLocaleTimeString()
})

// this is number 11
function changeColor(){
    let world = document.getElementById("helloWorld")
    let interval = setTimeout(() => {
        world = Math.floor(Math.random() * (5-2)*2)
        switch(world){
            case 2:
            world.style.color = "blue"
            break;

            case 3:
            world.style.color = "green"
            break;

            case 4:
            world.style.color = "yellow"
            break;

            case 5:
                world.style.color = "red"
                break;

                default:
                    world.style.color = "orange"
                    break;

        }
    }, 3000);
}
changeColor();