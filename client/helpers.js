Template.registerHelper("unixToTime", function (timestamp) {
    return moment(timestamp).format("HH:mm")
});

Template.registerHelper("unixToDate", function (timestamp) {
    return moment(timestamp).format("DD-MM-YY")
});
Template.registerHelper("color", function (disturbance) {
	var dist  = disturbance.toUpperCase();
	console.log(dist)
	if(dist === 'HIGH') {
		
		return "#5cb85c"
	}
	else if (dist === 'MID') {
		return "#ec971f"
	}
	else if (dist === 'LOW') {
		return "#d9534f"
	}
    
});

