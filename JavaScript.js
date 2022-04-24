let myLeads = []
const inputEl = document.getElementById("input")
const List = document.getElementById("list")
const deleteBtn = document.querySelector("#delete-btn")
const saveTab = document.querySelector("#save-tab")


let leadsFromLocalStorage = localStorage.getItem("myleads")
leadsFromLocalStorage = JSON.parse(leadsFromLocalStorage)


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderleads(myLeads)
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderleads(myLeads)
})

let array = [{ url: " yumnakhan.com" }]

saveTab.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem('myleads', JSON.stringify(myLeads))
        renderleads(myLeads)
    })

})



Save = document.getElementById("save")
Save.addEventListener("click", function () {
   
    const value = document.querySelector("input").value; 

    myLeads.push(value)

 
    document.querySelector('#input').value = ''; 

    leads = JSON.stringify(myLeads)
    localStorage.setItem("myleads", leads)
 

    renderleads(myLeads)
})

function renderleads(leads) {
    let listItems = []
    for (let i = 0;i< leads.length; i += 1) {
    
        listItems += `<li>
    <a  href=${leads[i]} target='_blank' >
    ${leads[i]}
    </a>
    </li>`


    }
    List.innerHTML = listItems
}








