
window.onload = function () {
	var subBtn = document.getElementById('submit'); 
	subBtn.addEventListener('click', function(event) {
		event.preventDefault();
		var mealCost = document.getElementById('meal').value;;
		var taxRate = document.getElementById('tax').value;
		var tipPercent = document.getElementById('tip').value;
		var total = mealCost * (taxRate/100 + 1) * (tipPercent/100 + 1);
		var amount = total.toFixed(2);
		document.getElementById('finalCost').innerHTML = '$' + amount;
	});
};