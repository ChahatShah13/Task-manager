export const isAuthenticated = () => {
    // Check if 'authToken' exists in localStorage
    const token = localStorage.getItem('authToken');
    
    // If the token exists, consider the user as authenticated
    return token !== null;
};
