
// var chips_url = "http://192.168.43.140:6060/";
var chips_url = "http://127.0.0.1:6060/";


// endpoint
let view_all_endpoint = 'vieworders_received_view_all'
let view_date_today_endpoint = 'vieworders_received_view_date_today'
let view_date_date_endpoint = 'vieworders_received_view_date_date'
let view_from_to_endpoint = 'vieworders_received_view_from_to'
let view_last_week_endpoint = 'vieworders_received_view_last_week'
let view_this_month_endpoint = 'vieworders_received_view_this_month'
let view_last_month_endpoint = 'vieworders_received_view_last_month'



function Load_avenu_menu_options ( types_options, options_endpoint)
{
    let menu_options_req = new XMLHttpRequest ();
    menu_options_req.open('post' ,chips_url + options_endpoint,true);
    menu_options_req.onload = function ()
        {
            let names = JSON.parse(this.responseText);
            let html_select_input = document.getElementById(types_options);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let selecte_names = document.getElementById(types_options);
    menu_options_req.send(selecte_names);
}




function CreateDynamicTable (htmltbody, serverresults)
{
    let tbody = document.getElementById(htmltbody);
    tbody.innerHTML = ' ';

    // draw table
    let td,tr;
    // add table headings
    let th_names = new Array ();
    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
    let columns_to_count = th_names[0].length;
    row = tbody.insertRow(-1); 
    for (let looper =0; looper<columns_to_count; ++looper)
        {
            let headerNames = document.createElement("th");
            headerNames.className='js_table_headers'
            headerNames.innerHTML = th_names[0][looper];
            row.appendChild(headerNames)
        }

    for (let table_row = 0; table_row < serverresults.length; ++table_row)
        {
            tr = document.createElement('tr');
            tr.className='js_table_row';
            for (let table_data = 0; table_data< (serverresults[table_row].length);++table_data)
                {
                    td = document.createElement('td');
                    td.setAttribute("align", "center"); 
                    td.innerHTML = serverresults[table_row][table_data];
                    tr.appendChild(td)
                }
                tbody.appendChild(tr)
        }
}

// ============================= >>> date date
function FetchOrdersViewAll ()
{
    // document.getElementById("orders-received-date-date-loader").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', chips_url + view_all_endpoint,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else{CreateDynamicTable ('view-all-tbody',results)}
        }
        let date = new FormData(document.getElementById('orders-view-all-form'));
        req.send(date);        
}

// ============================= view Today

function FetchOrdersViewByDateToday ()
{
    // document.getElementById("chips-orders-received-loader-date-today").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', chips_url+ view_date_today_endpoint,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else {CreateDynamicTable ('view-by-date-today-tbody',results);}
        }
        let data = new FormData(document.getElementById('orders-view-date-today-form'));
        req.send(data);        
}

// ============================= >>> date date

function FetchOrdersViewByDateDate ()
{
    // document.getElementById("orders-received-date-date-loader").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', chips_url+view_date_date_endpoint,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else {CreateDynamicTable ('view-by-date-date-tbody',results);}
        }
        let date = new FormData(document.getElementById('view-orders-date-date-form'));
        req.send(date);        
}


function FetchOrdersViewFromTo ()
{
    // document.getElementById("orders-received-from-to-loader").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', chips_url+view_from_to_endpoint,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else {CreateDynamicTable ('view-from-to-tbody',results);}
        }
        let date =  new FormData(document.getElementById('orders-view-from-to-form'));
        req.send(date);        
}

function FetchOrdersViewLastWeek ()
{
    // document.getElementById("orders-received-last-week-loader").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', chips_url+view_last_week_endpoint,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length) {alert("No results found")}
            else {CreateDynamicTable ('view-last-week-tbody',results);}
        }
        let data =  new FormData(document.getElementById('orders-view-last-week-form'));
        req.send(data);        
}

function FetchOrdersViewThisMonth ()
{
    // document.getElementById("orders-received-last-week-loader").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', chips_url+view_this_month_endpoint,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length) {alert("No results found")}
            else {CreateDynamicTable ('view-this-month-tbody',results);}
        }
        let data =  new FormData(document.getElementById('orders-view-this-month-form'));
        req.send(data);        
}
function FetchOrdersViewLastMonth ()
{
    // document.getElementById("orders-received-last-week-loader").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', chips_url+view_last_month_endpoint,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length) {alert("No results found")}
            else {CreateDynamicTable ('view-last-month-tbody',results);}
        }
        let data =  new FormData(document.getElementById('orders-view-last-month-form'));
        req.send(data);        
}
