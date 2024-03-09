let teacher ={
    firstName:"",
    lastName:"",
    teacherId:""

};
let teacherList = [];

function handleSubmit(){
    let  first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let teach = document.getElementById("teacherId").value;
    teacher.firstName = first;
    teacher.lastName = last;
    teacher.teacherId = teach;
    teacherList.push(teacher);
    setLocalStorageTeacher(teacherList);
    refreshPage(); 
}
function setLocalStorageTeacher(value)
{
    let tempData = JSON.stringify(value);
    localStorage.setItem("teacherList", tempData);
}

function getLocalStorageData()
{
    const teacherListData = localStorage.getItem("teacherList");

    if(!teacherListData)
    {
        return null;
    }

    const teacherLists = JSON.parse(teacherListData);

    teacherList = teacherLists;

    displayTableDataForTeacher();
}
function displayTableDataForTeacher()
{
    teacherList.forEach((element) => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        const lastNameCell = document.createElement("td");
        const teacherIdCell = document.createElement("td");

        firstNameCell.textContent = element.firstName;
        lastNameCell.textContent = element.lastName;
        teacherIdCell.textContent = element.teacherId;

        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(teacherIdCell);

        document.getElementById("tableBody").appendChild(row);
    });
    
}

function refreshPage()
{
    location.reload();
}

getLocalStorageData();