export function formatDate(dateString) {
    const date = new Date(dateString);
  
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      
      timeZone: "Europe/Paris",
    };
  
    const formatter = new Intl.DateTimeFormat("fr-FR", options);
    const formattedDate = formatter.format(date);
  
    return formattedDate;
  }
  