$(document).ready(function(){
	$(function() {
		$('#home').show('slide', {direction: 'right'}, 500);
	});

	/*Tab Transitions*/
	$('#tab1').click(function(event){
		if(!$('#tab1').parent().hasClass('active')) {
			$('section').hide('slide', {direction: 'right'}, 300)
			$('#home').delay(300).show('slide', {direction: 'left'}, 300)
		}
	});
	$('#tab2').click(function(event){
		if(!$('#tab2').parent().hasClass('active')) {
			if($('#tab1').parent().hasClass('active')) {
				$('section').hide('slide', {direction: 'left'}, 300)
				$('#about').delay(300).show('slide', {direction: 'right'}, 300)
			}
			else {
				$('section').hide('slide', {direction: 'right'}, 300)
				$('#about').delay(300).show('slide', {direction: 'left'}, 300)
			}
		};
	});
	$('#tab3').click(function(event){
		if(!$('#tab3').parent().hasClass('active')) {
			if ($('#tab1').parent().hasClass('active')||$('#tab2').parent().hasClass('active')) {
				$('section').hide('slide', {direction: 'left'}, 300)
				$('#games').delay(300).show('slide',{direction: 'right'}, 300)
			}
			else{
				$('section').hide('slide', {direction: 'right'}, 300)
				$('#games').delay(300).show('slide',{direction: 'left'}, 300)
			}
		};
	});
	$('#tab4').click(function(event){
		if(!$('#tab4').parent().hasClass('active')) {
			if($('#tab1').parent().hasClass('active')||$('#tab2').parent().hasClass('active')||$('#tab3').parent().hasClass('active')){
				$('section').hide('slide', {direction: 'left'}, 300)
				$('#events').delay(300).show('slide',{direction: 'right'}, 300)
			}
			else {
				$('section').hide('slide', {direction: 'right'}, 300)
				$('#events').delay(300).show('slide',{direction: 'left'}, 300)
			}
		};
	});
	$('#tab5').click(function(event){
		if(!$('#tab5').parent().hasClass('active')) {
			if($('#tab6').parent().hasClass('active')||$('#tab7').parent().hasClass('active')){
				$('section').hide('slide', {direction: 'right'}, 300)
				$('#buylist').delay(300).show('slide',{direction: 'left'}, 300)
			}
			else {
				$('section').hide('slide', {direction: 'left'}, 300)
				$('#buylist').delay(300).show('slide',{direction: 'right'}, 300)
			}
		};
	});
	$('#tab6').click(function(event){
		if(!$('#tab6').parent().hasClass('active')) {
			if($('#tab7').parent().hasClass('active')){
				$('section').hide('slide', {direction: 'right'}, 300)
				$('#supplies').delay(300).show('slide',{direction: 'left'}, 300)
			}
			else {
				$('section').hide('slide', {direction: 'left'}, 300)
				$('#supplies').delay(300).show('slide',{direction: 'right'}, 300)
			}
		};
	});
	$('#tab7').click(function(event){
		if(!$('#tab7').parent().hasClass('active')) {
				$('section').hide('slide', {direction: 'left'}, 300)
				$('#contact').delay(300).show('slide',{direction: 'right'}, 300)
		};
	});

	$('#nav > a').click(function(){
		event.preventDefault();
		//removes active from all #nav ids
		$('li').removeClass();
		//adds active class to selected attributes' parent list item
		$(this).parent().addClass('active');
	});
});