window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})


const functionApiUrl = 'https://getresumecounter2023.azurewebsites.net/api/GetResumeCounter?code=TcuenziQonqV3fcTPa429_5z6ffTCk3TXVNeDrg6swYtAzFuoj6jeA=='
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}