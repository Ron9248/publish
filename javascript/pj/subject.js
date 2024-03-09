let Subject = {
    Id:"",
    subjectCode:"",
    subjectName:"",
    teacherId:"",

};
let subjectList = [];


function handleSubmit()
{
    let id = document.getElementById("id").value;
    let Code = document.getElementById("subjectCode").value;
    let Name = document.getElementById("name").value;
    let tId = document.getElementById("teacherId").value;

    Subject.Id = id;
    Subject.subjectCode = Code;
    Subject.subjectName = Name;
    Subject.teacherId = tId;
    subjectList.push(Subject);
    setLocalStorageSubject(subjectList);
    refreshPage();
}

function setLocalStorageSubject(value)
{
    let tempData = JSON.stringify(value);
    localStorage.setItem("subjectList", tempData);
}

function getLocalStorageData()
{
    const subjectListData = localStorage.getItem("subjectList");

    if(!subjectListData)
    {
        return null;
    }

    const subjectLists = JSON.parse(subjectListData);

    subjectList = subjectLists;

    displayTableDataForSubject();
}

function displayTableDataForSubject()
{
    subjectList.forEach((element) => {
        const row = document.createElement("tr");
        const IdCell = document.createElement("td");
        const subjectCodeCell = document.createElement("td");
        const subjectNameCell = document.createElement("td");
        const teacherIdCell = document.createElement("td");

        IdCell.textContent = element.Id;
        subjectCodeCell.textContent = element.subjectCode;
        subjectNameCell.textContent = element.subjectName;
        teacherIdCell.textContent = element.teacherId;

        row.appendChild(IdCell);
        row.appendChild(subjectCodeCell);
        row.appendChild(subjectNameCell);
        row.appendChild(teacherIdCell);

        document.getElementById("tableBody").appendChild(row);
    });
    
}

function refreshPage()
{
    location.reload();
}

getLocalStorageData();