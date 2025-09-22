const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const tr = document.createElement("tr");
const td = document.createElement("td");
const table = document.getElementById("tab");
td.innerText = "Total Price";
tr.appendChild(td);
	
const getSum = () => {
//Add your code here
	let priceList = document.querySelectorAll(".price");
	const td = document.createElement("td");
	let total = 0;

	priceList.forEach((price) => {
		total += parseInt(price.textContent, 10);
		
	});

	td.setAttribute("id", "ans");
	td.innerText = total;
	tr.appendChild(td);
	table.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

