window.onload = function (){
    var ajax;
    ajax = new XMLHttpRequest();

    ajax.open('GET', 'http://localhost:8080/javabank5/api/customer/', true);
    ajax.setRequestHeader('Content-type', 'application/json');
    ajax.send();
  
    ajax.onreadystatechange = function() {

        if (ajax.readyState === 4 && ajax.status === 200) {
          
            var usersTable = document.getElementById('users-table');
            var dataTable = JSON.parse(ajax.responseText);


            for (let i = 0; i < dataTable.length; i++) {

                var row = usersTable.insertRow(-1);

                var id = row.insertCell(0);
                id.innerHTML = dataTable[i].id;

                var firstName = row.insertCell(1);
                firstName.innerHTML = dataTable[i].firstName;

                var lastName = row.insertCell(2);
                lastName.innerHTML = dataTable[i].lastName;

                var email = row.insertCell(3);
                email.innerHTML = dataTable[i].email;

                var phone = row.insertCell(4);
                phone.innerHTML = dataTable[i].phone;

            }
        }
    };
}