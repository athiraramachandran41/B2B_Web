export const toCapitailize = (data) =>{
    const newData = `${data.charAt(0).toUpperCase()}${data.slice(1)}`;
    return newData
    
}
export const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

export const getExtension = (fileName) => {
    const parts = fileName.split('.');
    return parts[parts.length - 1];
  };