function tableFromJson() {
    // the json data.
    var  myBooks  = [
        {'Sl.No': '1', ' Name': 'Wheat flour',
            'Qunaity': '2', 'unit': 'kg', 'Department': 'flour' , 'Notes': 'packet'
        },
        {'Sl.No': '2', ' Name': 'rice',
            'Qunaity': '3kg', 'unit': '80', 'Department': 'Grains' , 'Notes': 'white rice'
        },
        {'Sl.No': '3', ' Name': 'Mi  lk',
            'Qunaity': '1L', 'unit': '42', 'Department': 'Diary' , 'Notes': 'Milma'
        },
        {'Sl.No': '4', ' Name': 'Oil',
            'Qunaity': '1L', 'unit': '108', 'Department': 'Oil' , 'Notes': 'Kera oil'
        },
        {'Sl.No': '5', ' Name': 'cofee powder',
            'Qunaity': '500gm', 'unit': '100', 'Department': 'Beverages' , 'Notes': 'Instant powder'
        },
        {'Sl.No': '6', ' Name': 'Sugar',
            'Qunaity': '1kg', 'unit': '42', 'Department': 'Sugar' , 'Notes': 'Sugar'
        },
        {'Sl.No': '7', ' Name': 'Onion',
            'Qunaity': '2kg', 'unit': '45', 'Department': 'veggie' , 'Notes': 'Fresh'
        },
        {'Sl.No': '8', ' Name': 'Carrot',
            'Qunaity': '1kg', 'unit': '28', 'Department': 'veggie' , 'Notes': 'Fresh'
        },
        {'Sl.No': '9', ' Name': 'Chicken',
            'Qunaity': '3kg', 'unit': '160', 'Department': 'Non-veg' , 'Notes': 'Fresh'
        },
        {'Sl.No': '10', ' Name': 'salt',
            'Qunaity': '1kg', 'unit': '40', 'Department': 'Salt' , 'Notes': 'Powder salt'
        },
       
    ]

    
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Create a table.
    var table = document.createElement("table");

    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);                   // table row.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // add json data to the table as rows.
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }

    // Now, add the newly created table with json data, to a container.
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);  
    }