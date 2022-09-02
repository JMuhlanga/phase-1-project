document.addEventListener("DOMContentLoaded",()=>{
    console.log("The DOM has Loaded");
    fetchEvents();
})

function fetchEvents(){
    fetch(`http://localhost:3000/events`)
    .then((response)=> response.json())
    .then((data) => renderEvents(data))
}

function renderEvents (data){
    const eventSection = document.querySelector(`#eventList`);
    data.forEach(someEvent => {
        const li =document.createElement(`li`);
        li.innerHTML = `${someEvent.eventName},on ${someEvent.date} at ${someEvent.venue} game: ${someEvent.game} hosted by :${someEvent.host}`;
        eventSection.appendChild(li);
    });
}

const formSection = document.getElementById('forms');

document.getElementById('teamReg').addEventListener("click",function(){
    const formElement = document.createElement(`form`);
    formElement.setAttribute('id','teamRegForm');
    formElement.setAttribute('action','POST')
    formElement.innerHTML = `<input type="text" id="tname" placeholder="Enter Team Name"><br><br>
        <input type="text" id="tlocation" placeholder="Enter Team Location"><br><br>
        <input type="text" id="tleader" placeholder="Enter Team Leader Name"><br><br>
        <input type="text" id="temail" placeholder="Enter Team Email"><br><br>
        <input type="text" id="tgame" placeholder="Enter Team Email"><br><br>
        <input type="submit" value="submit">
    `;
    formSection.appendChild(formElement);

})

document.getElementById('playerReg').addEventListener("click",function(){
    const formElement = document.createElement(`form`);
    formElement.setAttribute('id','playerRegForm');
    formElement.setAttribute('action','POST')
    formElement.innerHTML = `<input type="text" id="fname" placeholder="Enter First Name"><br><br>
        <input type="text" id="lname" placeholder="Enter Last Name"><br><br>
        <input type="number" id="page" placeholder="Enter Your Age"><br><br>
        <input type="text" id="pemail" placeholder="Enter Your E-mail"><br><br>
        <input type="text" id="pnumber" placeholder="Enter Your number"><br><br>
        <input type="text" id="plocation" placeholder="Enter Your location"><br><br>
        <input type="submit" value="submit">
    `;
    formSection.appendChild(formElement);

})

document.getElementById('eventReg').addEventListener("click",function(){
    const formElement = document.createElement(`form`);
    formElement.setAttribute('id','eventRegForm');
    formElement.setAttribute('action','POST')
    formElement.innerHTML = `<input type="text" id="ename" placeholder="Enter Event Name"><br><br>
        <input type="text" id="edate" placeholder="Enter Event Date"><br><br>
        <input type="text" id="evenue" placeholder="Enter Event Venue"><br><br>
        <input type="text" id="edescription" placeholder="Enter Event Description"><br><br>
        <input type="text" id="ehost" placeholder="Enter Event Host"><br><br>
        <input type="submit" value="submit">
    `;
    formSection.appendChild(formElement);

})
