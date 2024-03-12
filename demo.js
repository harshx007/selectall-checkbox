let fruits = JSON.parse(localStorage.getItem("userdata")) || [];
let isEdit = -1;

let checkedrecords = [];
const editData = (idx) => {
   console.log(idx);
   isEdit = idx;

   let recordEdit = fruits.find((item, index) => { return (index === idx) });
   console.log(recordEdit);

   document.getElementById('fname').value = recordEdit.fanme;
   document.getElementById('lname').value = recordEdit.lastname;
   document.getElementById('age').value = recordEdit.age;

}

const sortData = () => {

   // const sortedData = fruits.sort((a, b) => {
   //    return (a.lastname > b.lastname ? -1 : 1)  // ternary operatore
   // })
   // console.log(sortedData);
   // fruits = sortedData;
   // renderHTMLTable()


   const sortt = document.getElementById("select").value
   console.log(sortt);
   if (sortt === "Fname") {
      const sortedData = fruits.sort((a, b) => {
         return (a.fanmeme > b.fanmeme ? -1 : 1)
      })
      fruits = sortedData
      renderHTMLTable()
   }
   if (sortt === "Lname") {
      const sortedData = fruits.sort((a, b) => {
         return (a.lastname > b.lastname ? -1 : 1)
      })
      fruits = sortedData
      renderHTMLTable()
   }
   if (sortt === "Age") {
      const sortedData = fruits.sort((a, b) => {
         return (a.age - b.age )
      })
      fruits = sortedData
      renderHTMLTable()
   }
}



const handleCheckbox = (e) => {

   console.log(e);
   // debugger
   if (!checkedrecords.includes(e)) {
      checkedrecords.push(e);
      renderHTMLTable();
   }
   else {
      checkedrecords = checkedrecords?.filter((item) => item !== e)
      renderHTMLTable();

   }
   console.log(checkedrecords);
}


console.log(checkedrecords);
const renderHTMLTable = () => {
   document.getElementById("tablebody").innerHTML = fruits
      .map((row, index) => {
         return `<tr>
         <td><input type="checkbox" value=${index}  class="check"    onclick="handleCheckbox(${index})" name="mycheckboxes" ></td>

      <td>${row.fanme}</td>
      <td> ${row.lastname}</td>
      <td>${row.age}</td>
      
      <td><button onclick="deleteData(${index})">delete</button>
      
      <button onclick="editData(${index})">Edit</button></td>

     </tr>`;

      })
      .join("");
}
const RrenderHTMLTable = () => {


}

renderHTMLTable();

const deleteData = (indx) => {
   console.log(indx);

   const deletedData = fruits?.filter((item, index) => { return index !== indx });
   console.log(deletedData);


   localStorage.setItem("userdata", JSON.stringify(deletedData))

   fruits = deletedData;

   renderHTMLTable();
}


const dlt = () => {
   var checkboxes = document.getElementsByName('mycheckboxes');
   var checkedBoxes = document.querySelectorAll('input[name=mycheckboxes]:checked');



      fruits = fruits?.filter((item, index) => !checkedrecords?.includes(index));
      localStorage.setItem("userdata", JSON.stringify(fruits))
      renderHTMLTable();
      checkedrecords = []

  
   // if (sele.length>0) {
   //    const confimeDlete = confirm("you wnat to delete")
   //    if(confimeDlete){
   //       sele.for(checkbox =>{
   //          const row = checkbox.closest("tr");
   //          row.remove();
   //       });
   //    }
   // }
   // for ( var i = 0; i < sele.length; i++){
   //    if (sele[i].checked) {
   //       const seledata = fruits?.filter((item, index) => {
   //           return sele == ii
   //           });



   //    fruits = seledata
   //    renderHTMLTable()

   //    }
   // }

   // if (sele.checked == true) {
   //    const seledata = fruits?.filter((item, index) => { 
   //       if () {

   //       }

   //    });



   //    fruits =
   //    renderHTMLTable()
   // }

}

const handleSearch = () => {
   // const search = document.getElementById('search').value;
   // const searchData = fruits?.filter((item, index) => {
   //    return (item?.fanme.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()))
   // })

   // console.log(searchData);
   // // if (searchvalue !== '') { fruits = searchData; }
   // // else {
   // //    fruits = JSON.parse(localStorage.getItem("userdata"))
   // // }

   const select = document.getElementById("select").value;
   console.log(select);

   const searchvalue = document.getElementById('search').value;
   if (select === "Fname") {
      const selectData = fruits.filter((item) => {
         return (item.fanme.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()))
      })
      fruits = selectData
      renderHTMLTable()
   }
   if (select === "Lname") {
      const selectData = fruits.filter((item) => {
         return (item.lastname.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()))
      })
      fruits = selectData
      renderHTMLTable()
   }
   if (select === "Age") {
      const selectData = fruits.filter((item) => {
         return (item.age.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()))
      })
      fruits = selectData
      renderHTMLTable()
   }
}




function demo() {
   let firstname = document.getElementById("fname").value
   console.log(firstname);
   let lastname = document.getElementById("lname").value
   console.log(lastname);
   let aage = document.getElementById("age").value
   console.log(aage);
   const person = { fanme: firstname, lastname: lastname, age: aage };



   if (isEdit !== -1) {
      const updated = fruits.map((ite, index) => {

         if (isEdit === index) {
            return person
         }
         else return ite
      });

      fruits = updated;



   }
   else {
      fruits.push(person);
   }

   localStorage.setItem("userdata", JSON.stringify(fruits));

   renderHTMLTable();

}













