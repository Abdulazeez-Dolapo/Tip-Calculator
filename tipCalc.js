const calculateTip = ()=> {

    // Get the values input in the form
    const billAmount = document.getElementById('bill-amount').value
    const serviceQuality = document.getElementById('drop-down').value
    const numberOfPeople = document.getElementById('number-of-people').value 


    // Check if every field has a valid value 
    if(billAmount == '' || serviceQuality == 'Not-chosen' || numberOfPeople == '' ) {
        alert('Some values are missing, Kindly fill all 3 fields')
    }
}
