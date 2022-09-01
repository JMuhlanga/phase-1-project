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
