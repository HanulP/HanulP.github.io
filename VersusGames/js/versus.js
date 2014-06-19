$(document).ready(function(){
	$(function() {
		$('#home').show('slide', {direction: 'right'}, 500);
	});

	/*Tab Transitions*/
	$('#tab1').click(function(event){
		if(!$('#tab1').parent().hasClass('.active')) {
			event.preventDefault;
			$('section').hide('blind')
			$('#home').show('blind')
		};
	});
	$('#tab2').click(function(event){
		if(!$('#tab2').parent().hasClass('active')) {
			$('section').hide('blind')
			$('#about').show('blind')
		};
	});
	$('#tab3').click(function(event){
		event.preventDefault;
		if(!$('#tab3').parent().hasClass('active')) {
			event.preventDefault;
			$('section').hide('blind')
			$('#games').show('blind')
		};
	});
	$('#tab4').click(function(event){
		event.preventDefault;
		if(!$('#tab4').parent().hasClass('active')) {
			event.preventDefault;
			$('section').hide('blind')
			$('#events').show('blind')
		};
	});
	$('#tab5').click(function(event){
		event.preventDefault;
		if(!$('#tab5').parent().hasClass('active')) {
			event.preventDefault;
			$('section').hide('blind')
			$('#buylist').show('blind')
		};
	});
	$('#tab6').click(function(event){
		event.preventDefault;
		if(!$('#tab6').parent().hasClass('active')) {
			event.preventDefault;
			$('section').hide('blind')
			$('#supplies').show('blind')
		};
	});
	$('#tab7').click(function(event){
		event.preventDefault;
		if(!$('#tab7').parent().hasClass('active')) {
			event.preventDefault;
			$('section').hide('blind')
			$('#contact').show('blind')
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