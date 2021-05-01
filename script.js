/*1.default funcionality:  .draggable():This method allows elements to move using the mouse anywhere within the viewport.
$('#draggable').draggable();*/


/* 2. Auto scroll: Automatically scroll the document when the draggable is moved beyond the viewport. Set the scroll option to true to enable auto-scrolling, and fine-tune when scrolling is triggered and its speed with the scrollSensitivity and scrollSpeed options.

    $( "#draggable" ).draggable({ scroll: true });
    $( "#draggable2" ).draggable({ scroll: true, scrollSensitivity: 100 });
    $( "#draggable3" ).draggable({ scroll: true, scrollSpeed: 100 });  */



/*3.constrain movement:   Constrain the movement of each draggable by defining the boundaries of the draggable area. Set the axis option to limit the draggable's path to the x- or y-axis, or use the containment option to specify a parent DOM element or a jQuery selector, like 'document.' $( "#draggable" ).draggable({ axis: "y" });
    $( "#draggable2" ).draggable({ axis: "x" });
 
    $( "#draggable3" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $( "#draggable4" ).draggable({ containment: "parent" }); */


/*  4. cursor Position:
Position the cursor while dragging the object. By default the cursor appears in the center of the dragged object; use the cursorAt option to specify another location relative to the draggable (specify a pixel value from the top, right, bottom, and/or left). Customize the cursor's appearance by supplying the cursor option with a valid CSS cursor value: default, move, pointer, crosshair, etc.


$( "#draggable" ).draggable({ cursor: "move", cursorAt: { top: 56, left: 56 } });
$( "#draggable2" ).draggable({ cursor: "crosshair", cursorAt: { top: -5, left: -5 } });
$( "#draggable3" ).draggable({ cursorAt: { bottom: 0 } });

*/


/* Event: Layer functionality onto the draggable using the start, drag, and stop events. Start is fired at the start of the drag; drag during the drag; and stop when dragging stops.



$( function() {
    var $start_counter = $( "#event-start" ),
      $drag_counter = $( "#event-drag" ),
      $stop_counter = $( "#event-stop" ),
      counts = [ 0, 0, 0 ];
 
    $( "#draggable" ).draggable({
      start: function() {
        counts[ 0 ]++;
        updateCounterStatus( $start_counter, counts[ 0 ] );
      },
      drag: function() {
        counts[ 1 ]++;
        updateCounterStatus( $drag_counter, counts[ 1 ] );
      },
      stop: function() {
        counts[ 2 ]++;
        updateCounterStatus( $stop_counter, counts[ 2 ] );
      }
    });
 
     
    function updateCounterStatus( $event_counter, new_count ) {
      // first update the status visually...
      if ( !$event_counter.hasClass( "ui-state-hover" ) ) {
        $event_counter.addClass( "ui-state-hover" )
          .siblings().removeClass( "ui-state-hover" );
      }
      // ...then update the numbers
      $( "span.count", $event_counter ).text( new_count );
    }
  } );

*/


/* .widget  .checkboxradio
$( function() {
  $( "input" ).checkboxradio();
} ); */


/* widget .controlgroup()
$( function() {
  $( ".controlgroup" ).controlgroup()
  $( ".controlgroup-vertical" ).controlgroup({
    "direction": "vertical"
  });
} ); */



/*  .datepicker()
$( "#datepicker" ).datepicker(); */


/* .dialog()
$( "#dialog" ).dialog();*/



/* .menu()
$( "#menu" ).menu(); */































































