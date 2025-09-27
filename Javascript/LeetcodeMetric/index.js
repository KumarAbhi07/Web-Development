document.addEventListener("DOMContentLoaded",function(){
    const searchButton=document.getElementById("search-btn");
    const usernameInput=document.getElementById("user-input");
    const statcontainer=document.querySelector(".stats-container");
    const easyProgressCircle=document.querySelector(".easy-progress ");
    const mediumProgressCircle=document.querySelector(".medium-progress");
    const hardProgressCircle=document.querySelector(".hard-progress");
    const easyLabel=document.getElementById("easy-label");
    const mediumLabel=document.getElementById("medium-label");
    const hardLabel=document.getElementById("hard-label");
    const cardStatsContainer=document.querySelector(".stats-cards");

    //return true or false based on a regex
    function validateUsername(username){
        if(username.trim()==""){
            alert("username shoild not empty");
            return false;
        }
        const regex=/^[a-zA-z0-9_-]{1,15}$/;
        const isMatching=regex.test(username);
        if(isMatching){
            alert("Invalid username");

        }
        return isMatching;
    }

    //api call
    async function fetchUserDetails(username) {
        try{
            searchButton.textContent="Searching.....";
            searchButton.disabled=true;
            // const response= await fetch(url);
            const targetUrl = 'https://leetcode.com/graphql';
            const myHeader = new Headers();
            myHeader.append("content-type", "application/json");

            // Correct JSON object
            const graphql = JSon.stringify({
                query: `
                    query userSessionProgress($username: String!) {
                        matchedUser(username: $username) {
                            username
                            profile {
                                realName
                                ranking
                                reputation
                            }
                            submitStats {
                                acSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }
                            }
                        }
                    }
                `,
                variables: {"username": `${username}`}
                })
            

            const requestOptions = {
                method: "POST",
                headers: myHeader,
                body: graphql,
                redirect:"follow"
            };
            const response =await fetch(targetUrl,requestOptions);
            
                if(!response.ok){
                    throw new Error("unable to fetch the user details");
                }
                const data=await response.json();
                console.log("logging data: ",data);
        }
          
        
        catch(error){
            cardStatsContainer.innerHTML='<p>No data Found<p>'

        }
        finally{
            searchButton.textContent="Search";
            searchButton.disabled=false;

        }


    }

    searchButton.addEventListener('click',function(){
        const username=usernameInput.value;
        console.log("loggin username:",username);
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
    })
})