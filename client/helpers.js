Template.registerHelper("unixToTime", function (timestamp) {
    return moment(timestamp).format("HH:mm")
});

Template.registerHelper("unixToDate", function (timestamp) {
    return moment(timestamp).format("HH:mm")
});
