//$(document).ready(function(){
console.log(document.title);
if(document.title == 'Buy Redmi Note 5 Pro Online - Mi India'){

var storage_btn = document.evaluate( '//*[@id="J_proStep"]/div[1]/div[1]/ul/li[1]/div', document.body, null, 9, null ).singleNodeValue;
storage_btn.click();
var colour_btn = document.evaluate( '//*[@id="J_proStep"]/div[2]/div[1]/ul/li[1]/div', document.body, null, 9, null ).singleNodeValue;
colour_btn.click();
var checkbox = document.evaluate( '//*[@id="J_insurance"]/div/div/ul/li/div[2]/span', document.body, null, 9, null ).singleNodeValue;
if(checkbox.checked){
checkbox.click();
}
var price = document.evaluate( '/html/body/div[2]/div[2]/div[2]/div[8]/p/span[2]', document.body, null, 9, null ).singleNodeValue;
if(price.innerHTML == '4'){

	var buy_btn = document.evaluate( '//*[@id="J_nextBtn"]', document.body, null, 9, null ).singleNodeValue;
	if (buy_btn.innerHTML == 'Buy now'){
		buy_btn.click();
		var next_btn = document.evaluate( '/html/body/div[2]/div/div[1]/a', document.body, null, 9, null ).singleNodeValue;
		next_btn.click();
		var checkout_btn = document.evaluate( '//*[@id="mi_checkout"]', document.body, null, 9, null ).singleNodeValue;
		checkout_btn.click();
		var placeOrder_btn = document.evaluate( '//*[@id="checkoutFormBtn"]', document.body, null, 9, null ).singleNodeValue;
		placeOrder_btn.click();

		// var cardNumber = document.evaluate( '/html/body/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[2]/div/form/fieldset[1]/div[1]/input', document.body, null, 9, null ).singleNodeValue;
		// cardNumber.sendkeys("5675656576");
		// var nameOnCard = document.evaluate( '/html/body/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[2]/div/form/fieldset[1]/div[2]/input', document.body, null, 9, null ).singleNodeValue;
		// nameOnCard.sendkeys("Gurpreet Singh");

		// select month xpath
		// /html/body/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[2]/div/form/fieldset[2]/div[1]/div[1]/select

		// select year xpath	
		// /html/body/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[2]/div/form/fieldset[2]/div[1]/div[2]/select

		// var CVV = document.evaluate( '/html/body/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[2]/div/form/fieldset[2]/div[2]/input', document.body, null, 9, null ).singleNodeValue;
		// CVV.sendkeys("102");

		// var storeCard_checkbox = document.evaluate( '/html/body/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[2]/div/form/fieldset[3]/label/i', document.body, null, 9, null ).singleNodeValue;
		// if(storeCard_checkbox.checked){
		// storeCard_checkbox.click();
		// }

		// var payNow_btn = document.evaluate( '/html/body/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[2]/div/form/div/button', document.body, null, 9, null ).singleNodeValue;
		// payNow_btn.click();
	}
	else{
		//console.log("Buy button not enabled");
		window.location.reload(true);
	}
}
else{

	// console.log(price.innerHTML);
	// console.log(price.innerHTML == '9,999');
	// console.log("will reload the page");
	// console.log(document.title);
	window.location.reload(true);
}
}
if(document.title == 'Buy Mi Body Composition Scale Online - Mi India'){
	var price = document.evaluate( '/html/body/div[2]/div[2]/div[2]/div[8]/p/span[2]', document.body, null, 9, null ).singleNodeValue;
if(price.innerHTML == '4'){

	var buy_btn = document.evaluate( '//*[@id="J_nextBtn"]', document.body, null, 9, null ).singleNodeValue;
	if (buy_btn.innerHTML == 'Buy now'){
		buy_btn.click();
		var next_btn = document.evaluate( '/html/body/div[2]/div/div[1]/a', document.body, null, 9, null ).singleNodeValue;
		next_btn.click();
		var checkout_btn = document.evaluate( '//*[@id="mi_checkout"]', document.body, null, 9, null ).singleNodeValue;
		checkout_btn.click();
		var placeOrder_btn = document.evaluate( '//*[@id="checkoutFormBtn"]', document.body, null, 9, null ).singleNodeValue;
		placeOrder_btn.click();
	}
	else{
		console.log("Buy button not enabled");
		window.location.reload(true);
	}
}
else{
	console.log("will reload the page");
	console.log(document.title);
	window.location.reload(true);
}
}

//});
