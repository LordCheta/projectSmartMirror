document.addEventListener("DOMContentLoaded", function(){
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid', 'timeGrid', 'interaction'],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    navLinks: true,
    selectable: true,
    selectMirror: true,
    select: function(arg){
      document.getElementById('alert').style.display = 'block';
      document.getElementById('date').innerHTML = arg.startStr;
      document.getElementById('submit').onclick = ()=> {
        let title = document.getElementById('addTodoText').value;
        calendar.addEvent({
         title,
         start: arg.start,
         end: arg.end,
         allDay: arg.allDay
       })
      calendar.unselect();
      document.getElementById('alert').style.display = 'none';
      } 
      document.getElementById('close').addEventListener("click", function(){
        document.getElementById('alert').style.display = 'none';
      });   
    },
    editable: true,
    eventColor: '#0e868a',
    eventLimit: true,
    events: []
  });

  calendar.render();
});
