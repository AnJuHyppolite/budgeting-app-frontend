export const apiURL = () => {
    const env = process.env.NODE_ENV;
    if(env === "production") {
       return "http://anjus-budget-app.netlify.app" 
    } else {
        return "http://localhost:8888"
    } 
}