document.addEventListener('DOMContentLoaded', function() {
    
    const btnGenerate = document.getElementById('btnGenerate');
    
    //Generate 
    btnGenerate.addEventListener('click', function() {
        
        //Filters
        const selectedActivityType = document.querySelector('input[name="activityType"]:checked');
        let apiUrl = "https://www.boredapi.com/api/activity/";

        //Activity Type Switch Case
        if (selectedActivityType) {
            switch(selectedActivityType.id) {
                case 'EducRadio':
                    apiUrl += "?type=education";
                    break;
                case 'RecreationalRadio':
                    apiUrl += "?type=recreational";
                    break;
                case 'SocialRadio':
                    apiUrl += "?type=social";
                    break;
                case 'BusyworkRadio':
                    apiUrl += "?type=busywork";
                    break;
                default:
                    console.log('Invalid activity type selected');
                    return;
            }
        }

        //Budget Type Switch Case
        const selectedBudget = document.querySelector('input[name="budget"]:checked');
        if (selectedBudget) {
            apiUrl += (apiUrl.includes('?') ? '&' : '?');
            switch(selectedBudget.id) {
                case 'BudgetRadio':
                    apiUrl += "price=0.1";
                    break;
                case 'FreeRadio':
                    apiUrl += "price=0"; 
                    break;
                default:
                    console.log('Invalid budget option selected');
                    return;
            }
        }

        //API Fetching
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((res) => {
                document.getElementById('taskData').innerText = res.activity;
                document.getElementById('taskData').style.opacity = "1";
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    });
});
