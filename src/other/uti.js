function formatDate(date, isResultWithDay) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    if (isResultWithDay)
        return [day, month, year].join('/');
    return [year, month].join('/');
}

export { formatDate }