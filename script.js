function dollarCost (base, multiplier) {
	var cost = base * multiplier;
	return cost;
}

window.onload = function () {
	var subBtn = document.getElementById('submit'); 
	subBtn.addEventListener('click', function(event) {
		event.preventDefault();
		var mealCost = parseFloat(document.getElementById('meal').value);
		var taxRate = parseFloat(document.getElementById('tax').value / 100);
		var tipPercent = parseFloat(document.getElementById('tip').value / 100);
		var taxCost = dollarCost(mealCost, taxRate);
		var subtotal = parseFloat(mealCost) + parseFloat(taxCost);
		var tipCost = dollarCost(subtotal, tipPercent);
		var amount = parseFloat(subtotal + tipCost);

		document.getElementById('costs').innerHTML = 
			'<p>Meal: $' + mealCost.toFixed(2) + '</p>' +
			'<p>Tax: $' + taxCost.toFixed(2) + '</p>' +
			'<p>Subtotal: $' + subtotal.toFixed(2) + '</p>' +
			'<p>Tip: $' + tipCost.toFixed(2) + '</p>' + 
			'<p>Total: $' + amount.toFixed(2) + '</p>';
	});
};