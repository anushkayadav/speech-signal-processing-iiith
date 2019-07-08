function init(){

	var wavesurfer = WaveSurfer.create({
		container: '#waveform',
    	waveColor: 'violet',
    	progressColor: 'purple',

        loaderColor: 'purple',
        cursorColor: 'navy',

    plugins: [
            WaveSurfer.timeline.create({
                container: '#wave-timeline',
                primaryLabelInterval: 1,
                secondaryLabelInterval: 10
            }),
             WaveSurfer.cursor.create({
            showTime: true,
            opacity: 1,
            customShowTimeStyle: {
                'background-color': '#000',
                color: '#fff',
                padding: '2px',
                'font-size': '10px'
            }
        }),
            /* WaveSurfer.regions.create({
                regions: [
                    {
                        start: 0,
                        end: 0.5,
                        color: 'hsla(400, 100%, 30%, 0.1)'
                    },
                    {
                        start: 3,
                        end: 100,
                        color: 'hsla(200, 50%, 70%, 0.1)'
                    }
                ]
            }),*/

            WaveSurfer.regions.create(),
        ]

	});

	if (location.search.match('scroll')) {
        options.minPxPerSec = 100;
        options.scrollParent = true;
    }

    if (location.search.match('normalize')) {
        options.normalize = true;
    }



        // Zoom slider
var slider = document.querySelector('#slider');

slider.oninput = function () {
  var zoomLevel = Number(slider.value);
  wavesurfer.zoom(zoomLevel);
};

//document.querySelector('#slider').oninput = function () {
 //   wavesurfer.zoom(Number(this.value));
//};

//wavesurfer.addRegion({id:'one',start:0,end:0.25});


    wavesurfer.on('ready', function() {
        wavesurfer.enableDragSelection({
            color: randomColor(0.1)
        });

 
    });
    wavesurfer.on('region-click', function(region, e) {
        e.stopPropagation();
        // Play on click, loop on shift click
        e.shiftKey ? region.playLoop() : region.play();
    });


    wavesurfer.on('region-play', function(region) {
        region.once('out', function() {
            wavesurfer.play(region.start);
            wavesurfer.pause();
        });
    });

    function randomColor(alpha) {
    return (
        'rgba(' +
        [
            ~~(Math.random() * 255),
            ~~(Math.random() * 255),
            ~~(Math.random() * 255),
            alpha || 1
        ] +
        ')'
    );
}
console.log(wavesurfer.regions.list)


	$( "#play" ).click(function(){
		//wavesurfer.backend.ac.resume();
		
		wavesurfer.playPause();
		
	});

	$("#mySelect").on('change', function() {
		//alert( this.value );
		var sel=this.value;
		if(sel==="Hindi"){
			document.getElementById("utterance").innerHTML = " विदेश् मंत्रालय् के प्रवक्ता ने फिर् कहा" ;
			document.getElementById("translit").innerHTML ="videsh man'traalay ke pravaktaa ne phir kahaa " ;
			document.getElementById("syll").innerHTML = "vi desh man' traa lay ke pra vak taa ne phir ka haa" ;
			document.getElementById("ph").innerHTML = " v i d e sh m a n' t r aa l a y k e p r a v a k t aa n e ph i r k a h aa"  ;
			wavesurfer.load('hindi.mp3');
			$("#final2").empty();
			$("#final3").empty();



			var table = document.getElementById("final1");

			var r0 = table.insertRow(0);
  			var r0c1 = r0.insertCell(0);
  			var r0c2 = r0.insertCell(1);
  			var r0c3 = r0.insertCell(2);
  			var r0c4 = r0.insertCell(3);
  			r0c1.innerHTML = "Sym";
  			r0c2.innerHTML = "Extn Type";
  			r0c3.innerHTML = "Manner";
  			r0c4.innerHTML = "Place";



  			var r1 = table.insertRow(1);
  			var r1c1 = r1.insertCell(0);
  			var r1c2 = r1.insertCell(1);
  			var r1c3 = r1.insertCell(2);
  			var r1c4 = r1.insertCell(3);
  			r1c1.innerHTML = '<button type="button"  " id="v" ">v</button>;'
  			r1c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r1c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r1c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r2 = table.insertRow(2);
  			var r2c1 = r2.insertCell(0);
  			var r2c2 = r2.insertCell(1);
  			var r2c3 = r2.insertCell(2);
  			var r2c4 = r2.insertCell(3);
  			r2c1.innerHTML = '<button type="button"  " id="i1" ">i</button>;'
  			r2c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r2c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r2c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r3 = table.insertRow(3);
  			var r3c1 = r3.insertCell(0);
  			var r3c2 = r3.insertCell(1);
  			var r3c3 = r3.insertCell(2);
  			var r3c4 = r3.insertCell(3);
  			r3c1.innerHTML = '<button type="button"  " id="d" ">d</button>;'
  			r3c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r3c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r3c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r4 = table.insertRow(4);
  			var r4c1 = r4.insertCell(0);
  			var r4c2 = r4.insertCell(1);
  			var r4c3 = r4.insertCell(2);
  			var r4c4 = r4.insertCell(3);
  			r4c1.innerHTML = '<button type="button"  " id="e1" ">e</button>;'
  			r4c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r4c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r4c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r5 = table.insertRow(5);
  			var r5c1 = r5.insertCell(0);
  			var r5c2 = r5.insertCell(1);
  			var r5c3 = r5.insertCell(2);
  			var r5c4 = r5.insertCell(3);
  			r5c1.innerHTML = '<button type="button"  " id="sh" ">sh</button>;'
  			r5c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r5c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r5c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r6 = table.insertRow(6 );
  			var r6c1 = r6.insertCell(0);
  			var r6c2 = r6.insertCell(1);
  			var r6c3 = r6.insertCell(2);
  			var r6c4 = r6.insertCell(3);
  			r6c1.innerHTML = '<button type="button"  " id="m" ">m</button>;'
  			r6c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r6c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r6c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r7 = table.insertRow(7);
  			var r7c1 = r7.insertCell(0);
  			var r7c2 = r7.insertCell(1);
  			var r7c3 = r7.insertCell(2);
  			var r7c4 = r7.insertCell(3);
  			r7c1.innerHTML = '<button type="button"  " id="a1" ">a</button>;'
  			r7c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r7c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r7c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r8 = table.insertRow(8 );
  			var r8c1 = r8.insertCell(0);
  			var r8c2 = r8.insertCell(1);
  			var r8c3 = r8.insertCell(2);
  			var r8c4 = r8.insertCell(3);
  			r8c1.innerHTML = '<button type="button"  " id="n1" ">n</button>;'
  			r8c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r8c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r8c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r9 = table.insertRow(9 );
  			var r9c1 = r9.insertCell(0);
  			var r9c2 = r9.insertCell(1);
  			var r9c3 = r9.insertCell(2);
  			var r9c4 = r9.insertCell(3);
  			r9c1.innerHTML = '<button type="button"  " id="t1" ">t</button>;'
  			r9c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r9c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r9c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r10 = table.insertRow(10 );
  			var r10c1 = r10.insertCell(0);
  			var r10c2 = r10.insertCell(1);
  			var r10c3 = r10.insertCell(2);
  			var r10c4 = r10.insertCell(3);
  			r10c1.innerHTML = '<button type="button"  " id="r1" ">r</button>;'
  			r10c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r10c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r10c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r11 = table.insertRow(11 );
  			var r11c1 = r11.insertCell(0);
  			var r11c2 = r11.insertCell(1);
  			var r11c3 = r11.insertCell(2);
  			var r11c4 = r11.insertCell(3);
  			r11c1.innerHTML = '<button type="button"  " id="aa1" ">aa</button>;'
  			r11c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r11c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r11c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r12 = table.insertRow(12);
  			var r12c1 = r12.insertCell(0);
  			var r12c2 = r12.insertCell(1);
  			var r12c3 = r12.insertCell(2);
  			var r12c4 = r12.insertCell(3);
  			r12c1.innerHTML = '<button type="button"  " id="l" ">l</button>;'
  			r12c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r12c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r12c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r13 = table.insertRow(13 );
  			var r13c1 = r13.insertCell(0);
  			var r13c2 = r13.insertCell(1);
  			var r13c3 = r13.insertCell(2);
  			var r13c4 = r13.insertCell(3);
  			r13c1.innerHTML = '<button type="button"  " id="a2" ">a</button>;'
  			r13c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r13c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r13c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r14 = table.insertRow(14 );
  			var r14c1 = r14.insertCell(0);
  			var r14c2 = r14.insertCell(1);
  			var r14c3 = r14.insertCell(2);
  			var r14c4 = r14.insertCell(3);
  			r14c1.innerHTML = '<button type="button"  " id="y" ">y</button>;'
  			r14c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r14c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r14c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'



			$( "#v" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'one',start:0.055,end:0.1,color: randomColor(0.1)});
			});
			$( "#i1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.11,end:0.18,color: randomColor(0.1)});
			});

		}











		if(sel==="Telugu"){
			document.getElementById("utterance").innerHTML = " ఈరోజు వార్తల్లోని ముఖ్యామ్శాలు" ;
			document.getElementById("translit").innerHTML ="iirooju vaartallooni mukhyaamshaalu " ;
			document.getElementById("syll").innerHTML = " ii roo ju vaar tal loo ni mukh yaam shaa lu" ;
			document.getElementById("ph").innerHTML = " ii r oo j u v aa r t a l l oo n i m u kh y aa m sh aa l u"  ;
			wavesurfer.load('telugu.mp3');
			$("#final1").empty();
			$("#final3").empty();

		}







		if(sel==="Tamil"){
			document.getElementById("utterance").innerHTML = " வணக்கம் இன்ரைய தலைப்பு செய்திகள்" ;
			document.getElementById("translit").innerHTML ="vand~akkam inraiya talaippu cheydikal:" ;
			document.getElementById("syll").innerHTML = "  va nd~a kkam in rai ya ta lai ppu chey di kal:" ;
			document.getElementById("ph").innerHTML = "    v a nd~ a kk a m i n r ai y a t a l ai pp u ch ey d i k a l:"  ;
			wavesurfer.load('tamil.mp3');
			$("#final1").empty();
			$("#final2").empty();

		}


	});


	

	





}
$(init);