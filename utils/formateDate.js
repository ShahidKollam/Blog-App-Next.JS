export const formatDate = (dateString) => {
    // Check if the input is a valid date

    console.log("ok");
    
    const date = new Date(dateString);
    if (isNaN(date)) {
        throw new Error("Invalid date format");
    }

    return date.toLocaleDateString("en-GB"); // "en-GB" formats as DD/MM/YYYY
};

