function validateform(){
    alert("i am in validateform function")
    let val=true;
    let nameValue = document.formName.nameId.value;
    let genderSelected=document.querySelector('input[name=gender]:checked')
    console.log('nameValue',nameValue)
    if( nameValue.length <5 )
    {
        alert('give me 5 charecter name')
        val=false;
    }
    if (genderSelected=male || genderSelected = Female)
    {
        alert(you conform eith you input)
    }
    
    return val;
}
