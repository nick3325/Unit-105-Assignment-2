function createRow(users){
    for(let i = 0; i<users.length; i++){
        //get each one of the users
        let user = users[i]; 
        //display the user
        let tmp=`
            <p>${user.email}</p>
            <p>${user.password}</p>
            <p>${user.fname}</p>
            <p>${user.lname}</p>
            <p>${user.age}</p>
            <p>${user.payment}</p>
            <p>${user.color}</p>
        
        `;
        console.log(tmp);
        $(".userList").append(tmp);
    }
}
function init() {
    console.log("Listing users");
    let users = readUsers();
    console.log(readUsers());
    
}

window.onload=init;