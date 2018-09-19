// const employeeList = [
//     {
//       name: 'Jan',
//       officeNum: 1,
//       phoneNum: '222-222-2222'
//     },
//     {
//       name: 'Juan',
//       officeNum: 304,
//       phoneNum: '489-789-8789'
//     },
//     {
//       name: 'Margie',
//       officeNum: 789,
//       phoneNum: '789-789-7897'
//     },
//     {
//       name: 'Sara',
//       officeNum: 32,
//       phoneNum: '222-789-4654'
//     },
//     {
//       name: 'Tyrell',
//       officeNum: 3,
//       phoneNum: '566-621-0452'
//     },
//     {
//       name: 'Tasha',
//       officeNum: 213,
//       phoneNum: '789-766-5675'
//     },
//     {
//       name: 'Ty',
//       officeNum: 211,
//       phoneNum: '789-766-7865'
//     },
//     {
//       name: 'Sarah',
//       officeNum: 345,
//       phoneNum: '222-789-5231'
//     }
//   ];

// let command = '';

// const runCommand = function(e){
//     e.preventdefault();
// let userName;
    // switch (command)


//     if (command == 'print'){
//         for( let i = 0 ; i < employeeList.length ; i++ ) {
//          let employee = employeeList[i];
//          render(employee.name , employee.officeNum , employee.phoneNum);
//         }
//        }
       
       
//        if (command == 'verify') {
//         let nameInput = prompt('Who would you like to verify?');
//         let employee = employeeList.find(e => e.name == nameInput);
//         render ( employee != undefined);
//        }
       
//        if (command == 'lookup') {
//         let nameInput = prompt('Who would you like to lookup?');
//         let employee = employeeList.find(e => e.name == nameInput);
//         if ( employee != undefined){
//          render (employee.name, employee.officeNum, employee.phoneNum);
//         }
         
//        }
      
       
//        if (command == 'contains') {
//          let nameInput = prompt('Enter any part of the name you are searching?');
//          for( let i = 0 ; i < employeeList.length ; i++ ) {
//            let employee = employeeList[i];
//            let contains = employee.name.includes(nameInput);
//            if (contains){
//             render (employee.name, employee.officeNum, employee.phoneNum);
//            }
//          }
//        }
       
       
//        if (command == "update") {
//         let nameInput = prompt('Whom would you like to update?');
//         let updateField = prompt('What field would you like to update?');
//         let updated = prompt('What is the new value?');
//         for( let i = 0 ; i < employeeList.length ; i++ ) {
//          let employee = employeeList[i];
//          if (employee.name == nameInput){
//           employee[updateField] = updated;
//           render(employee.name , employee.officeNum , employee.phoneNum);
//          }
//         }
//        }
       
//        if (command == 'add') {
//          var newEmployee = {
//            name: nameInput,
//            officeNum: office,
//            phoneNum: phone
//            }
//          let nameInput = prompt('New employee name?');
//          let office = prompt('Assigned office number?');
//          let phone = prompt('Assigned phone number?');
//          employeeList.push(newEmployee);
//          render (employeeList)
       
//        }
       
//        if (command == 'erase') {
//          let rid = prompt('Name of person to be erased?')
//          for (i = 0, len = arr.length; i < len; i++)
//              if (employee.name == rid){
//                (employeeList.splice[i]);
//          }
//        }
// }

let empList={
  dataSet:employeeList
}
const print = function(e){
  e.preventDefault();   
    $('#render').empty();
  let innerContent= '';
  empList.dataSet.forEach(e=>innerContent+=`<h1>${e.name}</h1><h1>${e.officeNum}</h1><h1>${e.phoneNum}</h1><br/>`);  
  render(innerContent, '#render');
};



const verify = function(e){
  e.preventDefault();
  $('#render').empty();
  let innerContent= (`<div class='verifyTitle'>Please enter employee you would like to verify.</div> `)+
  (`<div><input id="verifyInput" placeholder="verify"/> <button id='verifyButton'>Search</button>   </div>`)+
  (`<div id="answer"></div>`);
  render(innerContent, '#render');

  const verifyName = function(){
    const input = $('#verifyInput').val();
    const trueFalse = empList.dataSet.some(e=>e.name.toLowerCase() === input.toLowerCase());
    render (trueFalse, "#answer");
  }
  $("#verifyButton").on('click', verifyName);
};

const lookup = function(e){
  e.preventDefault();
  $('#render').empty();
  let innerContent= (`<div class='lookupTitle'>Please enter employee you would like to lookup.</div> `)+
  (`<div><input id="lookupInput" placeholder="lookup"/> <button id='lookupButton'>Lookup</button>   </div>`)+
  (`<div id="answer"></div>`);
  render(innerContent, '#render');

  const lookupName = function(){
    const input = $('#lookupInput').val();
    const lookupLoop = empList.dataSet.filter(e=>e.name.toLowerCase() === input.toLowerCase());
    if (lookupLoop.length){
      lookupOutput = '';
      lookupLoop.map(e=>lookupOutput+= `<h1>${e.name}</h1><h1>${e.officeNum}</h1><h1>${e.phoneNum}</h1><br/>`);
      render(lookupOutput, '#answer');
    }
    else{
      render('Employee not found.', '#answer');
    }
  }
  $("#lookupButton").on('click', lookupName);
};
const contain = function(e){
  e.preventDefault();
  $('#render').empty();
  let innerContent= (`<div class='containTitle'>Please enter the employee's partial name.</div> `)+
  (`<div><input id="containInput" placeholder="contain"/> <button id='containButton'>Search</button>   </div>`)+
  (`<div id="answer"></div>`);
  render(innerContent, '#render');

  const containName = function(){
    // .val jquerry method for finding cvalue methods of html element, more of a function .value= vanilla js for finding name value in html, more like a variable
    const input = $('#containInput').val();
    const containLoop = empList.dataSet.filter(e=>e.name.toLowerCase().includes(input.toLowerCase()));
    if (containLoop.length){
      containOutput = '';
      containLoop.map(e=>containOutput+= `<h1>${e.name}</h1><h1>${e.officeNum}</h1><h1>${e.phoneNum}</h1><br/>`);
      render(containOutput, '#answer');
    }
    else{
      render('Employee not found.', '#answer');
    }
  }
  $("#containButton").on('click', containName);

};

const update = function(e){
  e.preventDefault();
  $('#render').empty();
  let innerContent= (`<div class='updateTitle'>Please enter the employee to update.</div> `)+
  (`<div class='updateName'>Please fill the following fields.</div> `)+
  
  (`<div><input class="threeBoxes" id="updateName" placeholder="Name"/>
  <input class="threeBoxes" id="updateOffice" placeholder="Office"/>
  <input class="threeBoxes" id="updateNumber" placeholder="Phone Number"/>
  <button id='updateButton'>Update</button>   </div>`)+
  (`<div id="answer"></div>`);
  render(innerContent, '#render');

  const updateName = function(){
    const name = $('#updateName').val();
    const office = $('#updateOffice').val();
    const number = $('#updateNumber').val();0
    
    empList.dataSet.forEach(e => {
      if(e.name.toLowerCase() === name.toLowerCase()){
        e.officeNum = office;
        e.phoneNum = number;
        const answer = `<h1>${e.name}</h1><h1>${e.officeNum}</h1><h1>${e.phoneNum}</h1>`;
        render(answer,'#answer');
      }
    })
  }
  $("#updateButton").on('click', updateName);
};

const add = function(e){
  e.preventDefault();
  $('#render').empty();
  let innerContent= (`<div class='addTitle'>Please enter the employee to add.</div> `)+
  (`<div class='addName'>Please fill the following fields.</div> `)+
  
  (`<div><input class="threeBoxes" id="addName" placeholder="Name"/>
  <input class="threeBoxes" id="addOffice" placeholder="Office"/>
  <input class="threeBoxes" id="addNumber" placeholder="Phone Number"/>
  <button id='addButton'>Search</button>   </div>`)+
  (`<div id="answer"></div>`);
  render(innerContent, '#render');

  const addName = function(){
    const name = $('#addName').val();
    const office = $('#addOffice').val();
    const number = $('#addNumber').val();
    
    var pushEmp  = {
      name: name,
      officeNum: office,
      phoneNum: number
    }
    employeeList.push(pushEmp);

    const answer = `<h1>${name}</h1><h1>${office}</h1><h1>${number}</h1>`;
    render(answer, '#answer');
  }
  $("#addButton").on('click', addName);
};

const deleted = function(e){
  e.preventDefault();
  $('#render').empty();
  let innerContent= (`<div class='lookupTitle'>Please enter employee you would like to delete.</div> `)+
  (`<div><input id="deleteInput" placeholder="delete"/> <button id='deleteButton'>Search</button>   </div>`)+
  (`<div id="answer"></div>`);
  render(innerContent, '#render');

  const deleteName = function(){
    const input = $('#deleteInput').val();
    // Filter does splice for you just give it a condition rather than doing all the if or on your own
    const deleteLoop = empList.dataSet.filter(e=>e.name.toLowerCase() !== input.toLowerCase());
    empList.dataSet=deleteLoop;
    // if (e.name.toLowerCase() === input.toLowerCase()){
    //   (employeeList.splice[i]);


        // delete e.name;
        // delete e.officeNum;
        // delete e.phoneNum;

        render('Employee deleted','#answer');
    };
  
  $("#deleteButton").on('click', deleteName);
};


const render = function(htmlStr, location){
  $(location).html(htmlStr)
};

$('#verify').on('click', verify);
$('#print').on('click', print);
$('#lookup').on('click', lookup);
$('#contains').on('click', contain);
$('#update').on('click', update);
$('#add').on('click', add);
$('#deleted').on('click',deleted);
// $('#submit').on('click', runCommand);

