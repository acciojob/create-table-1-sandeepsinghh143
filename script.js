function insert_Row() {
    //Write your code here
  const table=document.getElementById("sampleTable");
  const row = table.insertRow(0);
  const cell1 = row.insertCell();
  cell1.innerText="New Cell1";
  const cell2 = row.insertCell();
  cell2.innerText="New Cell2";
  
}
