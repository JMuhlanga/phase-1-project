document.addEventListener("DOMContentLoaded",()=>{
    console.log("The DOM has Loaded");
    fetchEvents();
})

//function to fetch Events for the Events Section
function fetchEvents(){
    fetch(`http://localhost:3000/events`)
    .then((response)=> response.json())
    .then((data) => renderEvents(data))
}

//function for rendering Events
function renderEvents (data){
    const eventSection = document.querySelector(`#eventList`);
    data.forEach(someEvent => {
        const li =document.createElement(`li`);
        li.innerHTML = `${someEvent.eventName},on ${someEvent.date} at ${someEvent.venue} game: ${someEvent.game} hosted by :${someEvent.host}`;
        eventSection.appendChild(li);
    });
}

//declaration of the form Section 'div' in html file
const formSection = document.getElementById('forms');

// Event listener for the Team Registration Button which then avails the respective  form
document.getElementById('teamReg').addEventListener("click",function(){
    this.disabled = true;
    const formElement = document.createElement(`form`);
    formElement.setAttribute('id','teamRegForm');
    formElement.setAttribute('action','POST')
    formElement.innerHTML = `<input type="text" id="teamName" name= "teamName" placeholder="Enter Team Name"><br><br>
        <input type="text" id="teamLocation" name="teamLocation" placeholder="Enter Team Location"><br><br>
        <input type="text" id="teamLeader" name="teamLeader" placeholder="Enter Team Leader Name"><br><br>
        <input type="text" id="teamEmail" name="teamEmail" placeholder="Enter Team Email"><br><br>
        <input type="text" id="game" name="game" placeholder="Enter Team Email"><br><br>
        <input type="submit" value="submit">
    `;

    //Appending Child Elements
    formSection.appendChild(formElement);

    // function for Team registration submit
    getTeamRegInfo(formSection);

})

// Event Listener for the Player Registration Button which then avails the respective form
document.getElementById('playerReg').addEventListener("click",function(){
    this.disabled = true;
    const formElement = document.createElement(`form`);
    formElement.setAttribute('id','playerRegForm');
    formElement.setAttribute('action','POST')
    formElement.innerHTML = `<input type="text" id= "firstName" name= "firstName" placeholder="Enter First Name"><br><br>
        <input type="text" id= "lastName" name= "lastName" placeholder="Enter Last Name"><br><br>
        <input type="number" id="age" name="age" placeholder="Enter Your Age"><br><br>
        <input type="text" id="email" name="email" placeholder="Enter Your E-mail"><br><br>
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter Your number"><br><br>
        <input type="text" id="location" name="location" placeholder="Enter Your location"><br><br>
        <input type="submit" value="submit">
    `;

    // Appending Child Elements
    formSection.appendChild(formElement);

    // Player Reg info Submit function
    getPlayerRegInfo(formSection);

})

//Event listener for Event Registration Button which then avails the respective form
document.getElementById('eventReg').addEventListener("click",function(){
    this.disabled = true;
    const formElement = document.createElement(`form`);
    formElement.setAttribute('id','eventRegForm');
    formElement.setAttribute('action','POST')
    formElement.innerHTML = `<input type="text" id="eventName" name="eventName" placeholder="Enter Event Name"><br><br>
        <input type="text" id="date" name="date" placeholder="Enter Event Date"><br><br>
        <input type="text" id="venue" name="venue" placeholder="Enter Event Venue"><br><br>
        <input type="text" id="description" name="description" placeholder="Enter Event Description"><br><br>
        <input type="text" id= "game" name="game" placeholder="Enter the Game you wish to Participate in"><br><br>
        <input type="text" id="host" name="host" placeholder="Enter Event Host"><br><br>
        <input type="submit" value="submit">
    `;

    //Appending Child Elements
    formSection.appendChild(formElement);

    //function for listening to submit
    getEventRegInfo(formSection);

})

// function for Event listener for the submit of the Team registration form
function getTeamRegInfo(form){
    document.getElementById('teamRegForm').addEventListener('submit', (someEvent)=>{
        someEvent.preventDefault();
        const data = new FormData(someEvent.target)
        const value = object.fromEntries(data.entries());

        const postData = (url = 'http://localhost:3000/teamsRegistration',data={}){
            const response = await fetch(url,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            return response.json()
        }
                
    })
}

// function for Event listener for the submit of the player registration form
function getPlayerRegInfo(form){
    document.getElementById('playerRegForm').addEventListener('submit', (someEvent)=>{
        someEvent.preventDefault();
        someEvent.preventDefault();
        const data = new FormData(someEvent.target)
        const value = object.fromEntries(data.entries());

        const postData = (url = 'http://localhost:3000/players',data={}){
            const response = await fetch(url,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            return response.json()
        }
        
    })
}


// function for Event listener for the submit of the Team registration form
function getEventRegInfo(form){
    document.getElementById('eventRegForm').addEventListener('submit', (someEvent)=>{
        someEvent.preventDefault();
        someEvent.preventDefault();
        const data = new FormData(someEvent.target)
        const value = object.fromEntries(data.entries());

        const postData = (url = 'http://localhost:3000/events',data={}){
            const response = await fetch(url,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            return response.json()
        }  
        
    })
}

