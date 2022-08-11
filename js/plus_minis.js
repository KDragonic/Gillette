let count = 1;
minus = $("#minus")
plus = $("#plus")
input = $("#number_input")


minus.on("click", function() {
	count--;
	setInput();
});

plus.on("click", function() {
	count++;
	setInput();
});

setInput();

function setInput() {
	input.val(count);
}