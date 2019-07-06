function init(){

	$("#mySelect").on('change', function() {
		//alert( this.value );
		var sel=this.value;
		if(sel==="Hindi"){
			document.getElementById("utterance").innerHTML = " विदेश् मंत्रालय् के प्रवक्ता ने फिर् कहा" ;
			document.getElementById("translit").innerHTML ="videsh man'traalay ke pravaktaa ne phir kahaa " ;
			document.getElementById("syll").innerHTML = "vi desh man' traa lay ke pra vak taa ne phir ka haa" ;
			document.getElementById("ph").innerHTML = " v i d e sh m a n' t r aa l a y k e p r a v a k t aa n e ph i r k a h aa"  ;

		}

		if(sel==="Telugu"){
			document.getElementById("utterance").innerHTML = " ఈరోజు వార్తల్లోని ముఖ్యామ్శాలు" ;
			document.getElementById("translit").innerHTML ="iirooju vaartallooni mukhyaamshaalu " ;
			document.getElementById("syll").innerHTML = " ii roo ju vaar tal loo ni mukh yaam shaa lu" ;
			document.getElementById("ph").innerHTML = " ii r oo j u v aa r t a l l oo n i m u kh y aa m sh aa l u"  ;

		}

		if(sel==="Kannada"){
			document.getElementById("utterance").innerHTML = " ಇಲ್ಲಿಗೆ ವಾರ್ತಾ ಪ್ರಸಾರ ಮುಕ್ತಾಯವಾಯಿತು" ;
			document.getElementById("translit").innerHTML ="illige vaartaa prasaara muktaayavaayitu " ;
			document.getElementById("syll").innerHTML = "  il li ge vaar taa pra saa ra muk taa ya vaa yi tu" ;
			document.getElementById("ph").innerHTML = "  i l l i g e v aa r t aa p r a s aa r a m u k t aa y a v aa y i t u"  ;

		}


	});

























}
$(init);