/**
*  jQuery listen for clicks and interaction
*
*/
$(document).ready(function(){

	liveSettings = {};
	liveSettings.cloudIP = "http://localhost:7817";
	liveSettings.localIP = "http://localhost:7817";
	liveSettings.localURL = "http://localhost/aboynejames/test/dsensor/dapp/sunshinedapp/src/index.html";
	// connect to socket.io
	var socketpi = io.connect(liveSettings.localIP);
	var liveChart = new chartDisplay();
	var liveStoragescid = '';

	/*
	*  check status of URL bar
	*
	*/
	var qs = $.param.querystring();
	var qsobject = $.deparam(qs, true);
console.log(qsobject);

	// now prepare a peer list and ask for data from MAIDSAFE



	$("a").click(function(e) {
		e.preventDefault(e);
		var idclick = $(this).attr("id");
console.log(idclick);
		switch(idclick){

			case "authorisation-in":
				// sign in authorisation
				$("#authorisation").show();
				$("#ptop-view").hide();
				$("#dmap-view").hide();
				$("#sensor-data").hide();
				$("#mindmap").hide();
				$("#being").hide();
				$("#ourworld").hide();
				$("#stream").hide();

				break;

								case "startcamera":

											var width = 320;    // We will scale the photo width to this
										  var height = 0;     // This will be computed based on the input stream

										  // |streaming| indicates whether or not we're currently streaming
										  // video from the camera. Obviously, we start at false.

										  var streaming = false;

										  // The various HTML elements we need to configure or control. These
										  // will be set by the startup() function.

										  var video = null;
										  var canvas = null;
										  var photo = null;
										  var startbutton = null;

										  function startup() {
										    video = document.getElementById('video');
										    canvas = document.getElementById('canvas');
										    photo = document.getElementById('photo');
										    $("#photo").hide();
										    startbutton = document.getElementById('photobutton');

										    navigator.getMedia = ( navigator.getUserMedia ||
										                           navigator.webkitGetUserMedia ||
										                           navigator.mozGetUserMedia ||
										                           navigator.msGetUserMedia);

										    navigator.getMedia(
										      {
										        video: true,
										        audio: false
										      },
										      function(stream) {
										        if (navigator.mozGetUserMedia) {
										          video.mozSrcObject = stream;
										        } else {
										          var vendorURL = window.URL || window.webkitURL;
										          video.src = vendorURL.createObjectURL(stream);
										        }
										        video.play();
										      },
										      function(err) {
										        console.log("An error occured! " + err);
										      }
										    );

										    video.addEventListener('canplay', function(ev){
										      if (!streaming) {
										        height = video.videoHeight / (video.videoWidth/width);

										        // Firefox currently has a bug where the height can't be read from
										        // the video, so we will make assumptions if this happens.

										        if (isNaN(height)) {
										          height = width / (4/3);
										        }

										        video.setAttribute('width', width);
										        video.setAttribute('height', height);
										        canvas.setAttribute('width', width);
										        canvas.setAttribute('height', height);
										        streaming = true;
										      }
										    }, false);

										    photobutton.addEventListener('click', function(ev){
										      takepicture();
										      ev.preventDefault();
										    }, false);

										    clearphoto();
										  }

										  // Fill the photo with an indication that none has been
										  // captured.

										  function clearphoto() {
										    var context = canvas.getContext('2d');
										    context.fillStyle = "#AAA";
										    context.fillRect(0, 0, canvas.width, canvas.height);

										    var data = canvas.toDataURL('image/png');
										    photo.setAttribute('src', data);
										  }

										  // Capture a photo by fetching the current contents of the video
										  // and drawing it into a canvas, then converting that to a PNG
										  // format data URL. By drawing it on an offscreen canvas and then
										  // drawing that to the screen, we can change its size and/or apply
										  // other changes before drawing it.

										  function takepicture() {
										    var context = canvas.getContext('2d');
										    if (width && height) {
										      canvas.width = width;
										      canvas.height = height;
										      context.drawImage(video, 0, 0, width, height);

										      var data = canvas.toDataURL('image/png');
										      photo.setAttribute('src', data);
										    } else {
										      clearphoto();
										    }
										  }
										startup();

								break;
			}
		});

		// button clicks
		$("button").click(function(e) {
			e.preventDefault(e);
	console.log('button clicked');
	var targetclick = e.target;
	console.log(targetclick);
	console.log($(targetclick).attr("id"));
	console.log($(targetclick).attr("class"));
		var buttonclick = $(targetclick).attr("id")

			switch(buttonclick){

			}
		});

		var skinCtime = [3,4,5,6,8,9];
		var x = d3.scale.linear()
    .domain([0, d3.max(skinCtime)])
    .range([0, 420]);
		
		d3.select(".skincancersurvivial")
		  .selectAll("div")
		    .data(skinCtime)
		  .enter().append("div")
		    .style("width", function(d) { return x(d) + "px"; })
		    .text(function(d) { return d; });

});
