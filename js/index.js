$('input').keypress(function(event){
	if(event.keyCode < 46 || event.keyCode > 57 || event.keyCode == 47) return false;
})

var bill = 0
var people = 0
var percentage = null


$('#bill').keyup(function(event){
	bill = parseFloat($(this).val())
	isInvalid($(this))
	calculation()
})

$('#people').keyup(function(event){
	people = parseFloat($(this).val())
	isInvalid($(this))
	calculation()
})

$('.form-btn').click(function(event){
	percentage = parseFloat($(this).data('percentage'))
	$('.form-btn').each(function(){
		$(this).removeClass('active')
	})
	$(this).addClass('active')
	if ($('.form-input_btn').val() != '') {
		$('.form-input_btn').removeClass('active').val('')
	}
	calculation()
})

$('.form-input_btn').keyup(function(event){
	percentage = parseFloat($(this).val())
	$('.form-btn').each(function(){
		$(this).removeClass('active')
	})
	if ($(this).val() != '') {
		$(this).addClass('active')
	}else{
		$(this).removeClass('active')
	}
	calculation()
})

$('.reset').click(function(){
	reset()
})

function reset(){
	bill       = 0
    people     = 0
    percentage = null

    $('#bill').val('')
	$('#people').val('')
	$('.form-btn').each(function(){
		$(this).removeClass('active')
	})
	$('.form-input_btn').removeClass('active').val('')
	$('#tipoAmount').html('$0.00')
	$('#total').html('$0.00')
}

function calculation(){
	if ( (bill != 0 && !isNaN(bill)) && (percentage != null && !isNaN(percentage)) &&  (people != 0 && !isNaN(people)) ) {

		let p = (( percentage / 100 ) * bill)
		let total = bill + parseFloat(p.toFixed(2))
		total = parseFloat(total.toFixed(2)) / people

		console.log(parseFloat(p.toFixed(2)))
		let tipoAmount = parseFloat(p.toFixed(2)) / people

		$('#tipoAmount').html('$'+tipoAmount.toFixed(2))
		$('#total').html('$'+total.toFixed(2))
	}
}

function isInvalid(element){
	if (element.val() == 0 || element.val() == '' || isNaN(element.val())) {
		element.addClass('invalid')
	}else{
		element.removeClass('invalid')
	}
}