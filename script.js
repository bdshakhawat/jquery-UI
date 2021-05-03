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


/* .progressbar():
$( "#progressbar" ).progressbar({
  value: 37
}); */

/* .selectmenu():
$( function() {
  $( "#speed" ).selectmenu();

  $( "#files" ).selectmenu();

  $( "#number" )
    .selectmenu()
    .selectmenu( "menuWidget" )
      .addClass( "overflow" );

  $( "#salutation" ).selectmenu();
} );*/



/* .slider():
$( "#slider" ).slider(); */

/* .snipper():
$( function() {
  var spinner = $( "#spinner" ).spinner();

  $( "#disable" ).on( "click", function() {
    if ( spinner.spinner( "option", "disabled" ) ) {
      spinner.spinner( "enable" );
    } else {
      spinner.spinner( "disable" );
    }
  });
  $( "#destroy" ).on( "click", function() {
    if ( spinner.spinner( "instance" ) ) {
      spinner.spinner( "destroy" );
    } else {
      spinner.spinner();
    }
  });
  $( "#getvalue" ).on( "click", function() {
    alert( spinner.spinner( "value" ) );
  });
  $( "#setvalue" ).on( "click", function() {
    spinner.spinner( "value", 5 );
  });

  $( "button" ).button();
} );
*/


/* .tooltip():
$( function() {
  $( document ).tooltip();
} ); */


/* .tabs():
$( function() {
  $( "#tabs" ).tabs();
} ); */



/* Effects start: AddClass():
$( function() {
  $( "#button" ).on( "click", function() {
    $( "#effect" ).addClass( "newClass", 1000, callback );
  });

  function callback() {
    setTimeout(function() {
      $( "#effect" ).removeClass( "newClass" );
    }, 1500 );
  }
} );   */






/* colorAnimation():

$( function() {
  var state = true;
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#effect" ).animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
      }, 1000 );
    } else {
      $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
      }, 1000 );
    }
    state = !state;
  });
} );    */





/*Easing plugin


$( function() {
  if ( !$( "<canvas>" )[0].getContext ) {
    $( "<div>" ).text(
      "Your browser doesn't support canvas, which is required for this demo."
    ).appendTo( "#graphs" );
    return;
  }

  var i = 0,
    width = 100,
    height = 100;

  $.each( $.easing, function( name, impl ) {
    var graph = $( "<div>" ).addClass( "graph" ).appendTo( "#graphs" ),
      text = $( "<div>" ).text( ++i + ". " + name ).appendTo( graph ),
      wrap = $( "<div>" ).appendTo( graph ).css( 'overflow', 'hidden' ),
      canvas = $( "<canvas>" ).appendTo( wrap )[ 0 ];

    canvas.width = width;
    canvas.height = height;
    var drawHeight = height * 0.8,
      cradius = 10;
      ctx = canvas.getContext( "2d" );
    ctx.fillStyle = "black";

    // Draw background
    ctx.beginPath();
    ctx.moveTo( cradius, 0 );
    ctx.quadraticCurveTo( 0, 0, 0, cradius );
    ctx.lineTo( 0, height - cradius );
    ctx.quadraticCurveTo( 0, height, cradius, height );
    ctx.lineTo( width - cradius, height );
    ctx.quadraticCurveTo( width, height, width, height - cradius );
    ctx.lineTo( width, 0 );
    ctx.lineTo( cradius, 0 );
    ctx.fill();

    // Draw bottom line
    ctx.strokeStyle = "#555";
    ctx.beginPath();
    ctx.moveTo( width * 0.1, drawHeight + .5 );
    ctx.lineTo( width * 0.9, drawHeight + .5 );
    ctx.stroke();

    // Draw top line
    ctx.strokeStyle = "#555";
    ctx.beginPath();
    ctx.moveTo( width * 0.1, drawHeight * .3 - .5 );
    ctx.lineTo( width * 0.9, drawHeight * .3 - .5 );
    ctx.stroke();

    // Plot easing
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo( width * 0.1, drawHeight );
    $.each( new Array( width ), function( position ) {
      var state = position / width,
        val = impl( state, position, 0, 1, width );
      ctx.lineTo( position * 0.8 + width * 0.1,
        drawHeight - drawHeight * val * 0.7 );
    });
    ctx.stroke();

    // Animate on click
    graph.on( "click", function() {
      wrap
        .animate( { height: "hide" }, 2000, name )
        .delay( 800 )
        .animate( { height: "show" }, 2000, name );
    });

    graph.width( width ).height( height + text.height() + 10 );
  });
} );   */





/* .effect():


$( function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "transfer" ) {
      options = { to: "#button", className: "ui-effects-transfer" };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( "#effect" ).effect( selectedEffect, options, 500, callback );
  };

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
    }, 1000 );
  };

  // Set effect from select menu value
  $( "#button" ).on( "click", function() {
    runEffect();
    return false;
  });
} );           */




/* effect .hide()
$( function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( "#effect" ).hide( selectedEffect, options, 1000, callback );
  };

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
    }, 1000 );
  };

  // Set effect from select menu value
  $( "#button" ).on( "click", function() {
    runEffect();
  });
} );  */


/* effect .removeClass()
$( function() {
  $( "#button" ).on( "click", function() {
    $( "#effect" ).removeClass( "newClass", 1000, callback );
  });

  function callback() {
    setTimeout(function() {
      $( "#effect" ).addClass( "newClass" );
    }, 1500 );
  }
} );
*/ 

/* effect .show():
$( function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 280, height: 185 } };
    }

    // Run the effect
    $( "#effect" ).show( selectedEffect, options, 500, callback );
  };

  //callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
    }, 1000 );
  };

  // Set effect from select menu value
  $( "#button" ).on( "click", function() {
    runEffect();
  });

  $( "#effect" ).hide();
} );   */




/* effect  .switchClass()

$( function() {
  $( "#button" ).on( "click", function() {
    $( ".newClass" ).switchClass( "newClass", "anotherNewClass", 1000 );
    $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 1000 );
  });
} );  */




/* effect .toggle():

$( function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( "#effect" ).toggle( selectedEffect, options, 500 );
  };

  // Set effect from select menu value
  $( "#button" ).on( "click", function() {
    runEffect();
  });
} ); */


/* effect .toggleClass():

$( function() {
  $( "#button" ).on( "click", function() {
    $( "#effect" ).toggleClass( "newClass", 1000 );
  });
} );   */



/* .position():

 $( function() {
    function position() {
      $( ".positionable" ).position({
        of: $( "#parent" ),
        my: $( "#my_horizontal" ).val() + " " + $( "#my_vertical" ).val(),
        at: $( "#at_horizontal" ).val() + " " + $( "#at_vertical" ).val(),
        collision: $( "#collision_horizontal" ).val() + " " + $( "#collision_vertical" ).val()
      });
    }
 
    $( ".positionable" ).css( "opacity", 0.5 );
 
    $( "select, input" ).on( "click keyup change", position );
 
    $( "#parent" ).draggable({
      drag: position
    });
 
    position();
  } );  */


  
  
  
  
  
  
  
  /* widget factory
  $( function() {
    // the widget definition, where "custom" is the namespace,
    // "colorize" the widget name
    $.widget( "custom.colorize", {
      // default options
      options: {
        red: 255,
        green: 0,
        blue: 0,
 
        // Callbacks
        change: null,
        random: null
      },
 
      // The constructor
      _create: function() {
        this.element
          // add a class for theming
          .addClass( "custom-colorize" );
 
        this.changer = $( "<button>", {
          text: "change",
          "class": "custom-colorize-changer"
        })
        .appendTo( this.element )
        .button();
 
        // Bind click events on the changer button to the random method
        this._on( this.changer, {
          // _on won't call random when widget is disabled
          click: "random"
        });
        this._refresh();
      },
 
      // Called when created, and later when changing options
      _refresh: function() {
        this.element.css( "background-color", "rgb(" +
          this.options.red +"," +
          this.options.green + "," +
          this.options.blue + ")"
        );
 
        // Trigger a callback/event
        this._trigger( "change" );
      },
 
      // A public method to change the color to a random value
      // can be called directly via .colorize( "random" )
      random: function( event ) {
        var colors = {
          red: Math.floor( Math.random() * 256 ),
          green: Math.floor( Math.random() * 256 ),
          blue: Math.floor( Math.random() * 256 )
        };
 
        // Trigger an event, check if it's canceled
        if ( this._trigger( "random", event, colors ) !== false ) {
          this.option( colors );
        }
      },
 
      // Events bound via _on are removed automatically
      // revert other modifications here
      _destroy: function() {
        // remove generated elements
        this.changer.remove();
 
        this.element
          .removeClass( "custom-colorize" )
          .enableSelection()
          .css( "background-color", "transparent" );
      },
 
      // _setOptions is called with a hash of all options that are changing
      // always refresh when changing options
      _setOptions: function() {
        // _super and _superApply handle keeping the right this-context
        this._superApply( arguments );
        this._refresh();
      },
 
      // _setOption is called for each individual option that is changing
      _setOption: function( key, value ) {
        // prevent invalid color values
        if ( /red|green|blue/.test(key) && (value < 0 || value > 255) ) {
          return;
        }
        this._super( key, value );
      }
    });
 
    // Initialize with default options
    $( "#my-widget1" ).colorize();
 
    // Initialize with two customized options
    $( "#my-widget2" ).colorize({
      red: 60,
      blue: 60
    });
 
    // Initialize with custom green value
    // and a random callback to allow only colors with enough green
    $( "#my-widget3" ).colorize( {
      green: 128,
      random: function( event, ui ) {
        return ui.green > 128;
      }
    });
 
    // Click to toggle enabled/disabled
    $( "#disable" ).on( "click", function() {
      // use the custom selector created for each widget to find all instances
      // all instances are toggled together, so we can check the state from the first
      if ( $( ":custom-colorize" ).colorize( "option", "disabled" ) ) {
        $( ":custom-colorize" ).colorize( "enable" );
      } else {
        $( ":custom-colorize" ).colorize( "disable" );
      }
    });
 
    // Click to set options after initialization
    $( "#green" ).on( "click", function() {
      $( ":custom-colorize" ).colorize( "option", {
        red: 64,
        green: 250,
        blue: 8
      });
    });
  } );                */
  












































































































































































































































































