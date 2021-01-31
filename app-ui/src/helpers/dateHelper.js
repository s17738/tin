export function getFormattedDate(dateSource) {
    const dateObject = new Date(dateSource)
    return dateObject.getUTCFullYear() + '-'
        + ('0' + dateObject.getUTCMonth()).slice(-2) + "-"
        + ('0' + dateObject.getUTCDate()).slice(-2) + " "
        + dateObject.getUTCHours() + ":"
        + dateObject.getUTCMinutes()
}

export function getDateTimeLocal(dateSource) {
    const dateObject = new Date(dateSource)
    return dateObject.getUTCFullYear() + '-'
        + ('0' + dateObject.getUTCMonth()).slice(-2) + "-"
        + ('0' + dateObject.getUTCDate()).slice(-2) + "T"
        + ('0' + dateObject.getUTCHours()).slice(-2) + ":"
        + dateObject.getUTCMinutes()
}