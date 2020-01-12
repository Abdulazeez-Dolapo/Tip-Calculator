const calculateTip = ()=> {

    // Get the values input in the form
    const billAmount = document.getElementById('bill-amount').value
    const serviceQuality = document.getElementById('drop-down').value
    const numberOfPeople = document.getElementById('number-of-people').value 


    // Check if every field has a valid value 
    if(billAmount === null || serviceQuality === 'Not-chosen' || numberOfPeople === null ) {
        alert('One or more values are missing, Kindly fill every field')
    }
    
    // Check if it's just one person paying the bill
    else if (numberOfPeople === '1') {
        // Calculate the tip
        const tip = (billAmount * serviceQuality) / numberOfPeople
        // Approximate the tip to 2 decimal places
        const approximatedTip = tip.toFixed(2) 
    
        // Display the value of tip on the app
        document.getElementById('result').innerHTML = `Pay an additional &#8358 ${approximatedTip}`        
    } 
    
    else {
        // Calculate the tip
        const tip = (billAmount * serviceQuality) / numberOfPeople
        // Approximate the tip to 2 decimal places
        const approximatedTip = tip.toFixed(2) 
    
        // Display the value of tip on the app
        document.getElementById('result').innerHTML = `Pay an additional &#8358 ${approximatedTip} each`
    }
}