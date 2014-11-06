/*
Filename: config-generator.js
Version: 2.0

Author: Blake Vermeer
Date: 6-2-2014

This file contains the javascript to create a ISEFlow version 2.0 config file.
*/

function createBoards()
{
    var num_boards = document.getElementById('boards').value;
    var tbody = '';
	
	var theader = '<div><table border="1">\n';
		
    tbody += '<tr>';
			  
	tbody += '<td>';
    tbody += '<b>Board Number </b>';
    tbody += '</td>';
			  
	tbody += '<td>';
    tbody += '<b>Number of Routers</b>';
    tbody += '</td>';
			  
	tbody += '</tr>\n';
	
    for( var i=1; i<=num_boards; i++){

		tbody += '<tr>';	
		
		tbody += '<td>';
		tbody += i;
		tbody += '</td>';
					
		tbody += '<td>';
		tbody += '<input type="number" name="board' + i + '" id="board' + i + '_routers" min="1"/></label><br />';
		tbody += '</td>';
		
		tbody += '</tr>\n';
		
	}
		
    var tfooter = '</table></div><br />';
	//var tbutton = '<input class="expandable-panel-recompute" name="generate_routers" type="button" value="Set number of routers per board" onclick=\'nameRouters();\'/>';
	
    document.getElementById('num_routers').innerHTML = theader + tbody + tfooter; //+ tbutton;
	
	
}


function nameRouters()
{
	var num_boards = document.getElementById('boards').value;
    var tbody = '';
	
	for( var i=1; i<=num_boards; i++)
	{
		tbody += '<b>Board ' + i + ' Routers</b><br />\n';
		
		var num_routers = document.getElementById('board' + i + '_routers').value;
		
		tbody += '<div><table border="1">\n';
		
		tbody += '<tr>';
				  
		tbody += '<td>';
		tbody += '<b>Router Number </b>';
		tbody += '</td>';
				  
		tbody += '<td>';
		tbody += '<b>Router Name </b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Router Type </b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Number of Outside Interfaces </b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Nuumber of Internal Interfaces </b>';
		tbody += '</td>';
				  
		tbody += '</tr>\n';
		
		for( var j=0; j<num_routers; j++)
		{
			tbody += '<tr>';
			
			tbody += '<td>';
			tbody += j;
			tbody += '</td>';
			
			tbody += '<td>';
			tbody += '<input type="text" name="board' + i + '_router_' + j + '_name" id="board_' + i + '_router' + j + '_name"/></label><br />';
			tbody += '</td>';
			
			tbody += '<td>';
			tbody += '<form action="">\n';
			tbody += '<select name="board' + i + '_router_' + j + '_type" id="board' + i + '_router_' + j + '_type" onchange="toggle_input(\'outside\', \'[^_]+$\', this.id)">\n';
			tbody += '<option value="outside">Outside</option>\n';
			tbody += '<option value="internal">Internal</option>\n';
			tbody += '</select>\n';
			tbody += '</form>\n';
			tbody += '</td>'
			
			tbody += '<td>';
			tbody += '<input type="number" name="board' + i + '_router_' + j + '_outside" id="board' + i + '_router_' + j + '_outside"/></label><br />';
			tbody += '</td>';
			
			tbody += '<td>';
			tbody += '<input type="number" name="board' + i + '_router_' + j + '_internal" id="board' + i + '_router_' + j + '_internal"/></label><br />';
			tbody += '</td>';

			tbody += '</td>';
			
			tbody += '</tr>\n';
		}
		
		tbody += '</table></div><br />';
		
	}
	
	//var tbutton = '<input class="expandable-panel-recompute" name="generate_router_config" type="button" value="Name the routers" onclick=\'createRouters();\'/>';
		
	document.getElementById('name_routers').innerHTML = tbody; //+ tbutton;

}





function numBackplanes()
{
	var tbody = '';

	tbody += '<form name="numBackplanes">\r\n';
	tbody += '<label>Number of backplanes: <input type="number" name="numBackplanes" id="numBackplanes" min="0"/></label><br /><br />\r\n';
	//tbody += '<input name="generate_boards" type="button" value="Set number of backplanes" onclick=\'configBackplanes();\'/>\r\n';
	tbody += '</form>\r\n';
	
	document.getElementById('num_backplanes').innerHTML = tbody;
	
	
}


function configBackplanes()
{
	var tbody = '';
	var num_backplanes = document.getElementById('numBackplanes').value;
	
	tbody += '<div><table border="1">\n';
		
	tbody += '<tr>';
				  
	tbody += '<td>';
	tbody += '<b>Backplane Number </b>';
	tbody += '</td>';
	
	tbody += '<td>';
	tbody += '<b>Backplane Name </b>';
	tbody += '</td>';
		
	tbody += '<td>';
	tbody += '<b>IP </b>';
	tbody += '</td>';
		
	tbody += '<td>';
	tbody += '<b>Netmask </b>';
	tbody += '</td>';
		
	tbody += '</tr>\n';
	
	
	for(var i=0; i<num_backplanes; i++)
	{
		tbody += '<tr>\n';
				
		tbody += '<td>';
		tbody += i;
		tbody += '</td>\n';
		
		tbody += '<td>\n';
		tbody += '<input type="text" name="backplane' + i + '_name" id="backplane' + i + '_name"/></label><br />\n';
		tbody += '</td>\n';
		
		tbody += '<td>';
		tbody += '<input type="number" name="backplane' + i + '_ip1" id="backplane' + i + '_ip1" max="255" min="0" maxlength="3" size="3"/></label>';
		tbody += '.';
		tbody += '<input type="number" name="backplane' + i + '_ip2" id="backplane' + i + '_ip2" max="255" min="0" maxlength="3" size="3"/></label>';
		tbody += '.';
		tbody += '<input type="number" name="backplane' + i + '_ip3" id="backplane' + i + '_ip3" max="255" min="0" maxlength="3" size="3"/></label>';
		tbody += '.';
		tbody += '<input type="number" name="backplane' + i + '_ip4" id="backplane' + i + '_ip4" max="255" min="0" maxlength="3" size="3"/></label><br />';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<form action="">\n';
		tbody += '<select name="backplane' + i + '_netmask" id="backplane' + i + '_netmask">\n';
		tbody += '<option value="0">0</option>\n';
		tbody += '<option value="1">1</option>\n';
		tbody += '<option value="2">2</option>\n';
		tbody += '<option value="3">3</option>\n';
		tbody += '<option value="4">4</option>\n';
		tbody += '<option value="5">5</option>\n';
		tbody += '<option value="6">6</option>\n';
		tbody += '<option value="7">7</option>\n';
		tbody += '<option value="8">8</option>\n';
		tbody += '<option value="9">9</option>\n';
		tbody += '<option value="10">10</option>\n';
		tbody += '<option value="11">11</option>\n';
		tbody += '<option value="12">12</option>\n';
		tbody += '<option value="13">13</option>\n';
		tbody += '<option value="14">14</option>\n';
		tbody += '<option value="15">15</option>\n';
		tbody += '<option value="16">16</option>\n';
		tbody += '<option value="17">17</option>\n';
		tbody += '<option value="18">18</option>\n';
		tbody += '<option value="19">19</option>\n';
		tbody += '<option value="20">20</option>\n';
		tbody += '<option value="21">21</option>\n';
		tbody += '<option value="22">22</option>\n';
		tbody += '<option value="23">23</option>\n';
		tbody += '<option value="24">24</option>\n';
		tbody += '<option value="25">25</option>\n';
		tbody += '<option value="26">26</option>\n';
		tbody += '<option value="27">27</option>\n';
		tbody += '<option value="28">28</option>\n';
		tbody += '<option value="29">29</option>\n';
		tbody += '<option value="30">30</option>\n';
		tbody += '<option value="31">31</option>\n';
		tbody += '<option value="32">32</option>\n';
		tbody += '</select>\n';
		tbody += '</form>\n';
		tbody += '</td>'
					
		tbody += '</tr>\n';
	}
	
	tbody += '</table></div><br />';
	
	//var tbutton = '<input class="expandable-panel-recompute" name="generate_router_config_outside" type="button" value="Configure the backplanes" onclick=\'configRoutersIP();\'/>';
		
	document.getElementById('bp_config').innerHTML = tbody; //+ tbutton;


}



function addBackplaneLinks()
{
	var tbody = '';
	var num_backplanes = document.getElementById('numBackplanes').value;
	
	
	for(var i=0; i<num_backplanes; i++)
	{
		tbody += '<b>Name: ' + document.getElementById('backplane' + i + '_name').value + '</b><br />\n';
		
		tbody += '<div><table border="1" id="backplane' + i + '_routers">\n';
		
		tbody += '<tr>';
					  
		
		tbody += '<td>';
		tbody += '<b>Backplane ' + i + ' Links</b>';
		tbody += '</td>';
		
		tbody += '<td></td>'
		
		tbody += '</tr><tr>';
		
		tbody += '<td>';
		tbody += '<form action="">\n';
		tbody += '<select name="backplane' + i + '_link_0" id="backplane' + i + '_link_0">\n';
		
		
		//Add in the connection options to the selection box
		var num_boards = document.getElementById('boards').value;
		
		for(var j=1; j<=num_boards; j++)
		{
			var num_routers = document.getElementById('board' + j + '_routers').value;
			
			for(var k=0; k<num_routers; k++)
			{
				var start_interface_num = 0;
			
				if(document.getElementById('board' + j + '_router_' + k + '_type').value == "outside")
				{
					start_interface_num = document.getElementById('board' + j + '_router_' + k + '_outside').value;
					
					var num_interfaces = parseInt(start_interface_num) + parseInt(document.getElementById('board' + j + '_router_' + k + '_internal').value);
				}
				else
				{
					var num_interfaces = document.getElementById('board' + j + '_router_' + k + '_internal').value;
				}
			
			
				//Loop through the internal interfaces only
				for(var m=start_interface_num; m<num_interfaces; m++)
				{
					tbody += '<option value="' + j + ',' + k + ',' + m + '">Board: ' + j + ', Router: ' + k +' (' + document.getElementById("board_" + j + "_router" + k + "_name").value + '), Interface: ' + m + '</option>\n';
				}
			
			}
		}
		
		
		
		

		tbody += '</select>\n';
		tbody += '</form>\n';
		tbody += '</td>'
		
		tbody += '<td>';
		tbody += '<input type="button" value="Remove Link" class="rowRemoveButton" );\'/>';
		tbody += '</td>';
					
		tbody += '</tr>\n';
		
		
		tbody += '<tr>\n';
		
		tbody += '<td>\n';
		tbody += '<input type="button" value="Add link" onclick=\'add_backplane_link("backplane' + i + '_routers", ' + i + ');\'/>\n';
		tbody += '</td>\n';
		
		tbody += '<td></td>\n';
		
		tbody += '</table></div><br />';
		
	}
	
	document.getElementById('bp_add_boards').innerHTML = tbody;
	
}


function createRouters()
{
	var num_boards = document.getElementById('boards').value;
    var tbody = '';
	var macAddresses = new Array();
	var macPrefix = '54:52:00';
	var currentMac = '';
	
	for( var i=1; i<=num_boards; i++)
	{
		tbody += '<b>Board ' + i + ' Routers</b><br />\n';
		
		tbody += '<div><table border="1" id="board' + i + '_router_specs">\n';
		
		tbody += '<tr>';
				  
		tbody += '<td>';
		tbody += '<b>Router Number </b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Inteface Number </b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Interface Type </b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Router MAC </b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>IP </b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Netmask </b>';
		tbody += '</td>';
				  
		tbody += '</tr>\n';
		
		var num_routers = document.getElementById('board' + i + '_routers').value;
		
		for( var j=0; j<num_routers; j++)
		{
			//Compute the number of interfaces for the router
			if(document.getElementById('board' + i + '_router_' + j + '_type').value == "outside")
			{
				var num_interfaces = document.getElementById('board' + i + '_router_' + j + '_outside').value;
				
				num_interfaces = parseInt(num_interfaces) + parseInt(document.getElementById('board' + i + '_router_' + j + '_internal').value);
			}
			else
			{
				var num_interfaces = document.getElementById('board' + i + '_router_' + j + '_internal').value;
			}
			
			
			for( var k=0; k<num_interfaces; k++)
			{
				var router_name = document.getElementById("board_" + i + "_router" + j + "_name").value;
			
				tbody += '<tr>';
					
				tbody += '<td>';
				tbody += '<input type="text" name="' + j + '" value="' + j + ' (' + router_name + ')" readonly>';
				tbody += '</td>';
					
				tbody += '<td>';
				tbody += '<input type="text" name="' + k + '" value="' + k + '" readonly>';
				tbody += '</td>';
					
				if(document.getElementById('board' + i + '_router_' + j + '_type').value == "outside")
				{
					if( k >= document.getElementById('board' + i + '_router_' + j + '_outside').value)
					{
						tbody += '<td>';
						tbody += '<input type="text" name="board' + i + '_router_' + j + '_if' + k + '_type" id="board' + i + '_router_' + j + '_if' + k + '_type" value="Internal" readonly size="8">';
						tbody += '</td>';
					
						tbody += '<td>';
						tbody += '<input type="text" name="board' + i + '_router_' + j + '_if' + k + '_mac" id="board_' + i + '_router' + j + '_if' + k + '_mac" value="" disabled="true" size="17"/></label><br />';
						tbody += '</td>';
					}
					else
					{
						tbody += '<td>';
						tbody += '<input type="text" name="board' + i + '_router_' + j + '_if' + k + '_type" id="board' + i + '_router_' + j + '_if' + k + '_type" value="Outside" readonly size="8">';
						tbody += '</td>';
					
						
						//Generate unique MAC address
						do
						{
							currentMac = macPrefix;
						
							for(var m=0; m<6; m++)
							{
								if(m%2 == 0)
								{
									currentMac += ':';
								}
								
								currentMac += Math.floor(Math.random()*16).toString(16);
							}
						}
						while(indexOf.call(macAddresses, currentMac) != -1);
					
					
						macAddresses.push(currentMac);
					
					
						tbody += '<td>';
						tbody += '<input type="text" name="board' + i + '_router_' + j + '_if' + k + '_mac" id="board_' + i + '_router' + j + '_if' + k + '_mac" value="' + currentMac + '" size="17"/></label><br />';
						tbody += '</td>';
					}

				}
				else
				{
					tbody += '<td>';
					tbody += '<input type="text" name="board' + i + '_router_' + j + '_if' + k + '_type" id="board' + i + '_router_' + j + '_if' + k + '_type" value="Internal" readonly size="8">';
					tbody += '</td>';
					
					tbody += '<td>';
					tbody += '<input type="text" name="board' + i + '_router_' + j + '_if' + k + '_mac" id="board_' + i + '_router' + j + '_if' + k + '_mac" value="" disabled="true" size="17"/></label><br />';
					tbody += '</td>';
				}
			
				//Search for a backplane connection
				var search_result = search_for_bp_link(i, j, k);
				
				//Found a match
				if(search_result.found == 1)
				{
					if(search_result.netmask >= 24)
					{
						tbody += '<td>';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip1" max="255" min="0" maxlength="3" size="3" value="' + search_result.ip1 + '" readonly/></label>';
						tbody += '.';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip2" max="255" min="0" maxlength="3" size="3" value="' + search_result.ip2 + '" readonly/></label>';
						tbody += '.';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip3" max="255" min="0" maxlength="3" size="3" value="' + search_result.ip3 + '" readonly/></label>';
						tbody += '.';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip4" max="255" min="0" maxlength="3" size="3"/></label><br />';
						tbody += '</td>';
					}
					else if(search_result.netmask >= 16)
					{
						tbody += '<td>';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip1" max="255" min="0" maxlength="3" size="3" value="' + search_result.ip1 + '" readonly/></label>';
						tbody += '.';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip2" max="255" min="0" maxlength="3" size="3" value="' + search_result.ip2 + '" readonly/></label>';
						tbody += '.';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip3" max="255" min="0" maxlength="3" size="3"/></label>';
						tbody += '.';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip4" max="255" min="0" maxlength="3" size="3"/></label><br />';
						tbody += '</td>';
					}
					else if(search_result.netmask >= 8)
					{
						tbody += '<td>';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip1" max="255" min="0" maxlength="3" size="3" value="' + search_result.ip1 + '" readonly/></label>';
						tbody += '.';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip2" max="255" min="0" maxlength="3" size="3"/></label>';
						tbody += '.';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip3" max="255" min="0" maxlength="3" size="3"/></label>';
						tbody += '.';
						tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip4" max="255" min="0" maxlength="3" size="3"/></label><br />';
						tbody += '</td>';
					}
					
					
				
				
					tbody += '<td>';
					tbody += '<form action="">\n';
					tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_netmask" id="board_' + i + '_router' + j + '_if' + k + '_netmask">\n';
					tbody += '<option value="' + search_result.netmask + '">' + search_result.netmask + '</option>\n';
					tbody += '</select>\n';
					tbody += '</form>\n';
					tbody += '</td>';
					
				}
				else
				{
				
					tbody += '<td>';
					tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip1" max="255" min="0" maxlength="3" size="3"/></label>';
					tbody += '.';
					tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip2" max="255" min="0" maxlength="3" size="3"/></label>';
					tbody += '.';
					tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip3" max="255" min="0" maxlength="3" size="3"/></label>';
					tbody += '.';
					tbody += '<input type="number" name="board' + i + '_router_' + j + '_max_ip" id="board_' + i + '_router' + j + '_if' + k + '_ip4" max="255" min="0" maxlength="3" size="3"/></label><br />';
					tbody += '</td>';
			
						
						
					tbody += '<td>';
					tbody += '<form action="">\n';
					tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_netmask" id="board_' + i + '_router' + j + '_if' + k + '_netmask">\n';
					tbody += '<option value="0">0</option>\n';
					tbody += '<option value="1">1</option>\n';
					tbody += '<option value="2">2</option>\n';
					tbody += '<option value="3">3</option>\n';
					tbody += '<option value="4">4</option>\n';
					tbody += '<option value="5">5</option>\n';
					tbody += '<option value="6">6</option>\n';
					tbody += '<option value="7">7</option>\n';
					tbody += '<option value="8">8</option>\n';
					tbody += '<option value="9">9</option>\n';
					tbody += '<option value="10">10</option>\n';
					tbody += '<option value="11">11</option>\n';
					tbody += '<option value="12">12</option>\n';
					tbody += '<option value="13">13</option>\n';
					tbody += '<option value="14">14</option>\n';
					tbody += '<option value="15">15</option>\n';
					tbody += '<option value="16">16</option>\n';
					tbody += '<option value="17">17</option>\n';
					tbody += '<option value="18">18</option>\n';
					tbody += '<option value="19">19</option>\n';
					tbody += '<option value="20">20</option>\n';
					tbody += '<option value="21">21</option>\n';
					tbody += '<option value="22">22</option>\n';
					tbody += '<option value="23">23</option>\n';
					tbody += '<option value="24">24</option>\n';
					tbody += '<option value="25">25</option>\n';
					tbody += '<option value="26">26</option>\n';
					tbody += '<option value="27">27</option>\n';
					tbody += '<option value="28">28</option>\n';
					tbody += '<option value="29">29</option>\n';
					tbody += '<option value="30">30</option>\n';
					tbody += '<option value="31">31</option>\n';
					tbody += '<option value="32">32</option>\n';
					tbody += '</select>\n';
					tbody += '</form>\n';
					tbody += '</td>'
						
					tbody += '</tr>\n';
				
				}
			
			}
		
		}
		
		tbody += '</table></div><br />';
		
	}
	
	//var tbutton = '<input class="expandable-panel-recompute" name="generate_router_config_outside" type="button" value="Configure the outside interfaces" onclick=\'numBackplanes();\'/>';
		
	document.getElementById('config_routers_outside').innerHTML = tbody; //+ tbutton;
}




function setup_link_loses()
{
	var tbody = '';

	tbody += '<b>Default Link Properties</b><br />\n';
		
	tbody += '<div><table border="1">\n';
		
	tbody += '<tr>';
				  
	tbody += '<td>';
	tbody += 'Link loss (0-100%)';
	tbody += '</td>';
	
	tbody += '<td>';
	tbody += '<input type="number" value="0" name="default_link_loss" id="default_link_loss" max="100" min="0" maxlength="3" size="3"/></label>%';
	tbody += '</td>';
	
	tbody += '</tr>';
	
	tbody += '</table></div><br />';
	
	
	tbody += '<b>Global Links (Optional)</b><br />\n';
	
	tbody += '<div><table border="1" id="global_link_table" class="link_loss_table">\n';
	
	tbody += '<tr>';
	
	tbody += '<td>';
	tbody += '<b>Link Number</b>';
	tbody += '</td>';
	
	tbody += '<td>';
	tbody += '<b>Loss %</b>';
	tbody += '</td>';
	
	tbody += '<td>';
	tbody += '<b>Remove Link</b>';
	tbody += '</td>';
	
	
	tbody += '<tr>';
	
	tbody += '<td>\n';
	tbody += '<input type="button" value="Add global link" onclick=\'add_link_row("global_link_table");\'/>\n';
	tbody += '</td>\n';
	
	tbody += '<td></td>';
	
	tbody += '<td></td>';
	
	tbody += '</tr>';
	
	tbody += '</table></div><br />';
	
	
	var num_boards = document.getElementById('boards').value;
	
	for( var i=1; i<=num_boards; i++)
	{
		tbody += '<b>Board ' + i + ' Links (Optional)</b><br />\n';
	
		tbody += '<div><table border="1" id="board' + i + '_link_table" class="link_loss_table">\n';
		
		tbody += '<tr>';
		
		tbody += '<td>';
		tbody += '<b>Link Number</b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Loss %</b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Remove Link</b>';
		tbody += '</td>';
		
		
		tbody += '<tr>';
		
		tbody += '<td>\n';
		tbody += '<input type="button" value="Add board link" onclick=\'add_link_row("board' + i + '_link_table");\'/>\n';
		tbody += '</td>\n';
		
		tbody += '<td></td>';
		
		tbody += '<td></td>';
		
		tbody += '</tr>';
		
		tbody += '</table></div><br />';
	}
	
	
	document.getElementById('setup_link_loses').innerHTML = tbody;
}




function connect_routers()
{
	var num_boards = document.getElementById('boards').value;
    var tbody = '';
	
	for( var i=1; i<=num_boards; i++)
	{
		tbody += '<b>Board ' + i + ' Router Connections</b><br />\n';
		
		tbody += '<div><table border="1" id="board' + i + 'router_connections_table">\n';
		
		tbody += '<tr>';
				  
		tbody += '<td>';
		tbody += '<b>Router Number </b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Inteface Number </b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Connect To: </b>';
		tbody += '</td>';
		
		tbody += '<td>';
		tbody += '<b>Link Type </b>';
		tbody += '</td>';
		
				  
		tbody += '</tr>\n';
		
		var num_routers = document.getElementById('board' + i + '_routers').value;
		
		for( var j=0; j<num_routers; j++)
		{
			//Computer the number of interfaces for the router
			if(document.getElementById('board' + i + '_router_' + j + '_type').value == "outside")
			{
				var num_interfaces = document.getElementById('board' + i + '_router_' + j + '_outside').value;
				
				num_interfaces = parseInt(num_interfaces) + parseInt(document.getElementById('board' + i + '_router_' + j + '_internal').value);
			}
			else
			{
				var num_interfaces = document.getElementById('board' + i + '_router_' + j + '_internal').value;
			}	
			
			for( var k=0; k<num_interfaces; k++)
			{
				var router_name = document.getElementById("board_" + i + "_router" + j + "_name").value;
			
				tbody += '<tr>';
					
				tbody += '<td>';
				tbody += j + ' (' + router_name + ')';
				tbody += '</td>';
					
				tbody += '<td>';
				tbody += k + ' (IP: ' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip1").value + '.' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip2").value + '.' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip3").value + '.' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip4").value + ')';
				tbody += '</td>';
				
				//Check if the router is an outside type
				if(document.getElementById('board' + i + '_router_' + j + '_type').value == "outside")
				{
					//Check if the interface on the outside router is internal or outside
					if( k >= document.getElementById('board' + i + '_router_' + j + '_outside').value)
					{
						//The interface is internal
				
						
						//Check if the interface has already been connected to the backplane
						
						//Search for value
						var searchTerm = i + ',' + j + ',' + k;
						
						var foundLink = false;
						
						for(var backplanes = 0; ((backplanes < document.getElementById('numBackplanes').value) && (foundLink == false)); backplanes++)
						{
							var table = document.getElementById('backplane' + backplanes + '_routers');
						
							var numLinks = table.rows.length;
							
							
							
							for(var m=1; ((m < (numLinks-1)) && (foundLink == false)); m++)
							{
								if(table.rows.item(m).cells.item(0).getElementsByTagName('select')[0].value == searchTerm )
								{
									//Found a backplane link match
									
									tbody += '<td>';
									tbody += '<form action="">\n';
									tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_link" id="board_' + i + '_router' + j + '_if' + k + '_link">\n';
									tbody += '<option value="R' + j + ',' + k + ' => B' + backplanes + ', "> Backplane: ' + backplanes + ' (' + document.getElementById('backplane' + backplanes + '_name').value + ') </option>\n';
									tbody += '</select>\n';
									tbody += '</form>\n';
									tbody += '</td>';
									
									
									tbody += '<td>';
									tbody += '<form action="">\n';
									tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_link_type" id="board_' + i + '_router' + j + '_if' + k + '_link_type">\n';
									
									//First populate the default link in the dropdown menu
									tbody += '<option value="G, "> Default, Loss: ' + document.getElementById('default_link_loss').value + '% </option>';
									
									//Populate this dropdown with the global link options
									var g_table = document.getElementById('global_link_table');
									
									var g_links = g_table.rows.length;
									
									for(var n=1; n< (g_links - 1); n++)
									{
										tbody += '<option value=", G, ' + n + '"> G' + n + ', Loss: ' + g_table.rows.item(n).cells.item(1).getElementsByTagName('input')[0].value + '% </option>';
									}
									
									//tbody += '<option value="Outside"> N/A </option>\n';
									tbody += '</select>\n';
									tbody += '</form>\n';
									tbody += '</td>';
								
								
									foundLink = true;
								}
							}
							
							
						}
						
						//Only run this if no backplane link was found
						if(foundLink == false)
						{
							tbody += '<td>';
							tbody += '<form action="">\n';
							tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_link" id="board_' + i + '_router' + j + '_if' + k + '_link">\n';
							
							
							
							//Add all of the internal router interfaces on the board except those that are connected to backplanes
							var board_router_table = document.getElementById('board' + i + '_router_specs');
								
							var num_routers_board = board_router_table.rows.length;
								
							for(var n=1; n < (num_routers_board); n++)
							{
								
								//Check if the interface is internal
								if(board_router_table.rows.item(n).cells.item(2).getElementsByTagName('input')[0].value == 'Internal')
								{
									//Check if the interface is NOT connected to a backplane
										
									var search_result = search_for_bp_link(i, parseInt(board_router_table.rows.item(n).cells.item(0).getElementsByTagName('input')[0].name), parseInt(board_router_table.rows.item(n).cells.item(1).getElementsByTagName('input')[0].value));
							
									if(search_result.found == 0)
									{
										//Make sure the router number is different
										if(j != parseInt(board_router_table.rows.item(n).cells.item(0).getElementsByTagName('input')[0].name))
										{
											tbody += '<option value="R' + j + ',' + k + ' => R' + board_router_table.rows.item(n).cells.item(0).getElementsByTagName('input')[0].name + ',' + board_router_table.rows.item(n).cells.item(1).getElementsByTagName('input')[0].value + '"> Router: ' + board_router_table.rows.item(n).cells.item(0).getElementsByTagName('input')[0].value + ' Interface: ' + board_router_table.rows.item(n).cells.item(1).getElementsByTagName('input')[0].value + ' (IP: ' + board_router_table.rows.item(n).cells.item(4).getElementsByTagName('input')[0].value + '.' + board_router_table.rows.item(n).cells.item(4).getElementsByTagName('input')[1].value + '.' + board_router_table.rows.item(n).cells.item(4).getElementsByTagName('input')[2].value + '.' + board_router_table.rows.item(n).cells.item(4).getElementsByTagName('input')[3].value + ') </option>\n';
										}
									}
								}
								
									
							}
								
							tbody += '</select>\n';
							tbody += '</form>\n';
							tbody += '</td>';
							

							//Populate this dropdown with the global link options
							tbody += '<td>';
							tbody += '<form action="">\n';
							tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_link_type" id="board_' + i + '_router' + j + '_if' + k + '_link_type">\n';
							
							//First populate the default link in the dropdown menu
							tbody += '<option value=", IP"> Default, Loss: ' + document.getElementById('default_link_loss').value + '% </option>';
								
							var l_table = document.getElementById('board' + i + '_link_table');
									
							var l_links = l_table.rows.length;
									
							for(var n=1; n< (l_links - 1); n++)
							{
								tbody += '<option value=", L, ' + n + '"> L' + n + ', Loss: ' + l_table.rows.item(n).cells.item(1).getElementsByTagName('input')[0].value + '% </option>';
							}
									
							//tbody += '<option value="Outside"> N/A </option>\n';
							tbody += '</select>\n';
							tbody += '</form>\n';
							tbody += '</td>';
							
						}
						
						
						
					}
					else	//The interface is outside
					{
						
						tbody += '<td>';
						tbody += '<form action="">\n';
						tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_link" id="board_' + i + '_router' + j + '_if' + k + '_link">\n';
						tbody += '<option value="R' + j + ',' + k + ' => O"> Outside </option>\n';
						tbody += '</select>\n';
						tbody += '</form>\n';
						tbody += '</td>';
						
						
						tbody += '<td>';
						tbody += '<form action="">\n';
						tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_link_type" id="board_' + i + '_router' + j + '_if' + k + '_link_type">\n';
						tbody += '<option value=""> N/A </option>\n';
						tbody += '</select>\n';
						tbody += '</form>\n';
						tbody += '</td>';
						
					}
				}
				else	//The router has only internal interfaces
				{
						
					//Check if the interface has already been connected to the backplane
					//The interface is internal
				
						
						//Check if the interface has already been connected to the backplane
						
						//Search for value
						var searchTerm = i + ',' + j + ',' + k;
						
						var foundLink = false;
						
						for(var backplanes = 0; ((backplanes < document.getElementById('numBackplanes').value) && (foundLink == false)); backplanes++)
						{
							var table = document.getElementById('backplane' + backplanes + '_routers');
						
							var numLinks = table.rows.length;
							
							
							
							for(var m=1; ((m < (numLinks-1)) && (foundLink == false)); m++)
							{
								if(table.rows.item(m).cells.item(0).getElementsByTagName('select')[0].value == searchTerm )
								{
									//Found a backplane link match
									
									tbody += '<td>';
									tbody += '<form action="">\n';
									tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_link" id="board_' + i + '_router' + j + '_if' + k + '_link">\n';
									tbody += '<option value="R' + j + ',' + k + ' => B' + backplanes + '"> Backplane: ' + backplanes + ' (' + document.getElementById('backplane' + backplanes + '_name').value + ') </option>\n';
									tbody += '</select>\n';
									tbody += '</form>\n';
									tbody += '</td>';
									
									
									tbody += '<td>';
									tbody += '<form action="">\n';
									tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_link_type" id="board_' + i + '_router' + j + '_if' + k + '_link_type">\n';
									
									//First populate the default link in the dropdown menu
									tbody += '<option value=", G, "> Default, Loss: ' + document.getElementById('default_link_loss').value + '% </option>';
									
									//Populate this dropdown with the global link options
									var g_table = document.getElementById('global_link_table');
									
									var g_links = g_table.rows.length;
									
									for(var n=1; n< (g_links - 1); n++)
									{
										tbody += '<option value=", G, ' + n + '"> G' + n + ', Loss: ' + g_table.rows.item(n).cells.item(1).getElementsByTagName('input')[0].value + '% </option>';
									}
									
									//tbody += '<option value="Outside"> N/A </option>\n';
									tbody += '</select>\n';
									tbody += '</form>\n';
									tbody += '</td>';
								
								
									foundLink = true;
								}
							}
							
							
						}
						
						//Only run this if no backplane link was found
						if(foundLink == false)
						{
							tbody += '<td>';
							tbody += '<form action="">\n';
							tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_link" id="board_' + i + '_router' + j + '_if' + k + '_link">\n';
								
							//Add all of the internal router interfaces on the board except those that are connected to backplanes
							var board_router_table = document.getElementById('board' + i + '_router_specs');
								
							var num_routers_board = board_router_table.rows.length;
								
							for(var n=1; n < (num_routers_board); n++)
							{
								
								//Check if the interface is internal
								if(board_router_table.rows.item(n).cells.item(2).getElementsByTagName('input')[0].value == 'Internal')
								{
									//Check if the interface is NOT connected to a backplane
										
									var search_result = search_for_bp_link(i, parseInt(board_router_table.rows.item(n).cells.item(0).getElementsByTagName('input')[0].name), parseInt(board_router_table.rows.item(n).cells.item(1).getElementsByTagName('input')[0].value));
							
									if(search_result.found == 0)
									{
										//Make sure the router number is different
										if(j != parseInt(board_router_table.rows.item(n).cells.item(0).getElementsByTagName('input')[0].name))
										{
											tbody += '<option value="R' + j + ',' + k + ' => R' + board_router_table.rows.item(n).cells.item(0).getElementsByTagName('input')[0].name + ',' + board_router_table.rows.item(n).cells.item(1).getElementsByTagName('input')[0].value + '"> Router: ' + board_router_table.rows.item(n).cells.item(0).getElementsByTagName('input')[0].value + ' Interface: ' + board_router_table.rows.item(n).cells.item(1).getElementsByTagName('input')[0].value + ' (IP: ' + board_router_table.rows.item(n).cells.item(4).getElementsByTagName('input')[0].value + '.' + board_router_table.rows.item(n).cells.item(4).getElementsByTagName('input')[1].value + '.' + board_router_table.rows.item(n).cells.item(4).getElementsByTagName('input')[2].value + '.' + board_router_table.rows.item(n).cells.item(4).getElementsByTagName('input')[3].value + ') </option>\n';
										}
									}
								}
								
									
							}
								
							tbody += '</select>\n';
							tbody += '</form>\n';
							tbody += '</td>';
							

							//Populate this dropdown with the global link options
							tbody += '<td>';
							tbody += '<form action="">\n';
							tbody += '<select name="board_' + i + '_router' + j + '_if' + k + '_link_type" id="board_' + i + '_router' + j + '_if' + k + '_link_type">\n';
							
							//First populate the default link in the dropdown menu
							tbody += '<option value=", IP"> Default, Loss: ' + document.getElementById('default_link_loss').value + '% </option>';
								
							var l_table = document.getElementById('board' + i + '_link_table');
									
							var l_links = l_table.rows.length;
									
							for(var n=1; n< (l_links - 1); n++)
							{
								tbody += '<option value=", L, ' + n + '"> L' + n + ', Loss: ' + l_table.rows.item(n).cells.item(1).getElementsByTagName('input')[0].value + '% </option>';
							}
									
							//tbody += '<option value="Outside"> N/A </option>\n';
							tbody += '</select>\n';
							tbody += '</form>\n';
							tbody += '</td>';
							
						}
						
						
				}
					
				
				
			}
			
		}
	
		tbody += '</table></div><br />';	
	
	}
	
	
	document.getElementById('connect_routers').innerHTML = tbody;
}





function configNumRouteRules()
{
	var num_boards = document.getElementById('boards').value;
    var tbody = '';
	
	for( var i=1; i<=num_boards; i++)
	{
		tbody += '<b>Board ' + i + ' Routers</b><br />\n';
		
		var num_routers = document.getElementById('board' + i + '_routers').value;
		
		tbody += '<div><table border="1">\n';
		
        tbody += '<td>';
    
    
		
		for( var j=0; j<num_routers; j++)
		{
			var router_name = document.getElementById("board_" + i + "_router" + j + "_name").value;
			
			
			tbody += '<b>Router ' + j + ' (' + router_name + ') rules</b><br />\n';
			
			tbody += '<div><table border="1" class="router_rule_table" id="board_' + i + '_router_' + j + '_rules_table">\n';
			
			//Table column labels
			//--------------------------------
			tbody += '<tr>';
				  
		    tbody += '<td>';
		    tbody += '<b>Rule Number </b>';
		    tbody += '</td>';
		
		    tbody += '<td>';
		    tbody += '<b>Destination IP </b>';
		    tbody += '</td>';
		
		    tbody += '<td>';
		    tbody += '<b>Netmask </b>';
		    tbody += '</td>';
		
		    tbody += '<td>';
		    tbody += '<b>Next IP </b>';
		    tbody += '</td>';
		
		    tbody += '<td>';
		    tbody += '<b>Interface </b>';
		    tbody += '</td>';
		
		    tbody += '<td>';
		    tbody += '<b>Remove Rule</b>';
		    tbody += '</td>';
		
		    tbody += '</tr>\n';
			//------------------------------
				
			tbody += '<tr>';
				
			tbody += '<td>';
			tbody += '0 (default)';
			tbody += '</td>';
					
			tbody += '<td>';
			tbody += '<input type="number" value="0" max="255" min="0" maxlength="3" size="3" readonly/></label>';
			tbody += '.';
			tbody += '<input type="number" value="0" max="255" min="0" maxlength="3" size="3" readonly/></label>';
			tbody += '.';
			tbody += '<input type="number" value="0" max="255" min="0" maxlength="3" size="3" readonly/></label>';
			tbody += '.';
			tbody += '<input type="number" value="0" max="255" min="0" maxlength="3" size="3" readonly/></label><br />';
			tbody += '</td>';
					
			tbody += '<td>';
			tbody += '<form action="">\n';
			tbody += '<select name="board' + i + '_router_' + j + '_rule_' + k + '_netmask" id="board' + i + '_router_' + j + '_rule_' + k + '_netmask">\n';
			tbody += '<option value="0">0</option>\n';
			tbody += '<option value="1">1</option>\n';
			tbody += '<option value="2">2</option>\n';
			tbody += '<option value="3">3</option>\n';
			tbody += '<option value="4">4</option>\n';
			tbody += '<option value="5">5</option>\n';
			tbody += '<option value="6">6</option>\n';
			tbody += '<option value="7">7</option>\n';
			tbody += '<option value="8">8</option>\n';
			tbody += '<option value="9">9</option>\n';
			tbody += '<option value="10">10</option>\n';
			tbody += '<option value="11">11</option>\n';
			tbody += '<option value="12">12</option>\n';
			tbody += '<option value="13">13</option>\n';
			tbody += '<option value="14">14</option>\n';
			tbody += '<option value="15">15</option>\n';
			tbody += '<option value="16">16</option>\n';
			tbody += '<option value="17">17</option>\n';
			tbody += '<option value="18">18</option>\n';
			tbody += '<option value="19">19</option>\n';
			tbody += '<option value="20">20</option>\n';
			tbody += '<option value="21">21</option>\n';
			tbody += '<option value="22">22</option>\n';
			tbody += '<option value="23">23</option>\n';
			tbody += '<option value="24">24</option>\n';
			tbody += '<option value="25">25</option>\n';
			tbody += '<option value="26">26</option>\n';
			tbody += '<option value="27">27</option>\n';
			tbody += '<option value="28">28</option>\n';
			tbody += '<option value="29">29</option>\n';
			tbody += '<option value="30">30</option>\n';
			tbody += '<option value="31">31</option>\n';
			tbody += '<option value="32">32</option>\n';
			tbody += '</select>\n';
			tbody += '</form>\n';
			tbody += '</td>';
					
				
					
			tbody += '<td>';
			tbody += '<input type="number" max="255" min="0" maxlength="3" size="3"/></label>';
			tbody += '.';
			tbody += '<input type="number" max="255" min="0" maxlength="3" size="3"/></label>';
			tbody += '.';
			tbody += '<input type="number" max="255" min="0" maxlength="3" size="3"/></label>';
			tbody += '.';
			tbody += '<input type="number" max="255" min="0" maxlength="3" size="3"/></label><br />';
			tbody += '</td>';
					
					
					
			//Get the number of interfaces
			if(document.getElementById('board' + i + '_router_' + j + '_type').value == "outside")
			{
				var num_interfaces = document.getElementById('board' + i + '_router_' + j + '_outside').value;
					
				num_interfaces = parseInt(num_interfaces) + parseInt(document.getElementById('board' + i + '_router_' + j + '_internal').value);
			}
			else
			{
				var num_interfaces = document.getElementById('board' + i + '_router_' + j + '_internal').value;
			}	
					
					
			//Populate the possible interfaces
			tbody += '<td>';
			tbody += '<form action="">\n';
			tbody += '<select name="board' + i + '_router_' + j + '_rule_' + k + '_interface" id="board' + i + '_router_' + j + '_rule_' + k + '_interface">\n';
					
			for( var k=0; k<num_interfaces; k++)
			{
				tbody += '<option value="' + k + '">' + k + ' (IP: ' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip1").value + '.' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip2").value + '.' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip3").value + '.' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip4").value + ') </option>\n';
			}
					
			tbody += '</select>\n';
			tbody += '</form>\n';
			tbody += '</td>';
			
			
			tbody += '<td></td>';
			
				
			tbody += '</tr>\n';
			
			tbody += '<tr>';
			
			tbody += '<td>';
			tbody += '<input type="button" value="Add rule" onclick=\'add_router_rule("board_' + i + '_router_' + j + '_rules_table", ' + i + ', ' + j + ');\'/>';
		tbody += '</td>';
			
			
			tbody += '</table></div><br />';
		
		}
		
	tbody += '</td>';
		
	tbody += '</table></div><br />';
		
	}
	
	//var tbutton = '<input class="expandable-panel-recompute" name="generate_router_config_rules" type="button" value="Generate the config file" onclick=\'generateConfig();\'/>';
		
	document.getElementById('config_route_rules').innerHTML = tbody; //+ tbutton;
}



function generateConfig()
{
	var num_routers;
	var num_outside_if;
	var num_internal_if;
	var num_total_if;
	var num_rules;
	
	//Get the date as a string
	var d = new Date();
    var n = d.toLocaleDateString();

	var tbody = '<pre>';
	
	tbody += '#ISEFlow config file generated by ISEFlow Webconfig Version 2.0 on ' + n +' \r\n\r\n';
	
	tbody += 'VER=1,0\r\n\r\n';
	
	
	tbody += '#Global definitions section\r\n';
	tbody += '#-------------------------------------------------------------------------------\r\n';
	tbody += 'Globals=  {\r\n';
	
	var num_backplanes = document.getElementById('numBackplanes').value;
	
	for( var i=0; i < num_backplanes; i++)
	{
		//Add the IP info for the backplane
		tbody += '\tBPnet=' + i + ', ' + document.getElementById("backplane" + i + "_ip1").value + '.' + document.getElementById("backplane" + i + "_ip2").value + '.' + document.getElementById("backplane" + i + "_ip3").value + '.' + document.getElementById("backplane" + i + "_ip4").value + ', ' + document.getElementById("backplane" + i + "_netmask").value + '\r\n';
		
		
		//Add the routers to the backplane
		var bp_table = document.getElementById('backplane' + i + '_routers');
		
		var numLinks = bp_table.rows.length;
		
		for(var j=1; j < (numLinks - 1); j++)
		{
			var router_info = bp_table.rows.item(j).cells.item(0).getElementsByTagName('select')[0].value;
		
			tbody += '\t\tboard=' + router_info + ', ';
			
			//Get the IP address of the router
			
			//First use regular expressions to extract the board, router, and interface info
			var patt = new RegExp('[,][0-9]*[,][0-9]*$');
			
			var router_board_num = parseInt(router_info.replace(patt, ''));
			
			patt = new RegExp('^[0-9]*[,]');
			
			var temp_router_num_str = router_info.replace(patt, '');
			
			patt = new RegExp('[,][0-9]*$');
			
			temp_router_num_str = temp_router_num_str.replace(patt, '');
			
			var router_num = parseInt(temp_router_num_str);
			
			patt = new RegExp('^[0-9]*[,][0-9]*[,]');
			
			var interface_num = parseInt(router_info.replace(patt, ''));
			
			tbody += document.getElementById("board_" + router_board_num + "_router" + router_num + "_if" + interface_num + "_ip1").value + '.' + document.getElementById("board_" + router_board_num + "_router" + router_num + "_if" + interface_num + "_ip2").value + '.' + document.getElementById("board_" + router_board_num + "_router" + router_num + "_if" + interface_num + "_ip3").value + '.' + document.getElementById("board_" + router_board_num + "_router" + router_num + "_if" + interface_num + "_ip4").value + '\r\n';
		}
		
		//Backplane parameter section
		tbody += '\tParms = {\r\n';
		tbody += '\t\tname=' + document.getElementById("backplane" + i + "_name").value + '\r\n';
		tbody += '\t/parms\r\n\r\n';
	}
	
	
	//Default link section
	tbody += '\t#Define the default link properties\r\n';
	tbody += '\tDLINK=IP\r\n';
	tbody += '\tParms = {\r\n';
	tbody += '\t\tname=default link\r\n';
	tbody += '\t\tloss=' + document.getElementById('default_link_loss').value + '\r\n';
	tbody += '\t/parms\r\n\r\n';
	
	
	//Add the global links
	var g_table = document.getElementById('global_link_table');
									
	var g_links = g_table.rows.length;
	
	for(var i=1; i< (g_links - 1); i++)
	{
		tbody += '\t#Define the properties of global link ' + i + '\r\n';
		tbody += '\tGLINK=' + i + ', IP\r\n';
		tbody += '\tParms = {\r\n';
		tbody += '\t\tname=global link ' + i + '\r\n';
		tbody += '\t\tloss=' + g_table.rows.item(i).cells.item(1).getElementsByTagName('input')[0].value + '\r\n';
		tbody += '\t/parms\r\n';
	}
	
	tbody += '/globals\r\n';
	tbody += '#-------------------------------------------------------------------------------\r\n';
	tbody += '#End of the global definitions section\r\n\r\n';
	
	
	tbody += '#Start of the board definitions section\r\n';
	tbody += '#-------------------------------------------------------------------------------\r\n';
	
	
	var num_boards = document.getElementById('boards').value;
	
	for( var i=1; i<=num_boards; i++)
	{
		tbody += '#Board ' + i + ' configuration\r\n';
		
		tbody += 'board=' + i + '\r\n';
		
		//Add the board connections
		tbody += 'connections = {\r\n';
		tbody += '\t#router, interface => router, interface, type\r\n';
		tbody += '\t#router, interface => backplane, type\r\n';
		
		
		var connection_table = document.getElementById('board' + i + 'router_connections_table');
		
		var numConnections = connection_table.rows.length;
		
		for(var j=1; j<numConnections; j++)
		{
			tbody += '\t' + connection_table.rows.item(j).cells.item(2).getElementsByTagName('select')[0].value + connection_table.rows.item(j).cells.item(3).getElementsByTagName('select')[0].value + '\r\n';
		}
		
		
		tbody += '/connections\r\n\r\n';
		//End of the board connections section
		
		
		num_routers = document.getElementById('board' + i + '_routers').value;
		
		for(var j=0; j<num_routers; j++)
		{
			//Add the section header
			tbody += '#Board ' + i + ' Router ' + j + ' configuration section\r\n';
		
			tbody += '\r\ndevice=router, ' + j + '\r\n';
			
			//Router outside configuration section
			if(document.getElementById('board' + i + '_router_' + j + '_type').value == "outside")
			{
				num_outside_if = document.getElementById('board' + i + '_router_' + j + '_outside').value;
				
				tbody += '\t#Interface configuration section\r\n';
				
				for(var k=0; k<num_outside_if; k++)
				{
					tbody += '\tif_out=' + k + ', ' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip1').value + '.' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip2').value + '.' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip3').value + '.' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip4').value + ', ' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_netmask').value + ', ' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_mac').value + '\r\n';
				}
				
				num_internal_if = document.getElementById('board' + i + '_router_' + j + '_internal').value;
				
				for(var k=0; k<num_internal_if; k++)
				{
					tbody += '\tif=' + k + ', ' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip1').value + '.' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip2').value + '.' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip3').value + '.' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip4').value + ', ' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_netmask').value + '\r\n';
				}
				
			}
			else
			{
				num_internal_if = document.getElementById('board' + i + '_router_' + j + '_internal').value;
				
				for(var k=0; k<num_internal_if; k++)
				{
					tbody += '\tif=' + k + ', ' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip1').value + '.' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip2').value + '.' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip3').value + '.' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_ip4').value + ', ' + document.getElementById('board_' + i + '_router' + j + '_if' + k + '_netmask').value + '\r\n';
				}
			}
			
			//Configure the routing rules
			var rules_table = document.getElementById('board_' + i + '_router_' + j + '_rules_table');
			
			num_rules = rules_table.rows.length;
			
			
			
			tbody += '\n\t#Routing Rules\r\n';
			tbody += '\t#Destination IP, Netmask, Next IP, Interface\r\n';
			
			for(var k=1; k < (num_rules-1); k++)
			{
				tbody += '\tr_table=' + rules_table.rows.item(k).cells.item(1).getElementsByTagName('input')[0].value + '.' + rules_table.rows.item(k).cells.item(1).getElementsByTagName('input')[1].value + '.' + rules_table.rows.item(k).cells.item(1).getElementsByTagName('input')[2].value + '.' + rules_table.rows.item(k).cells.item(1).getElementsByTagName('input')[3].value + ', ' + rules_table.rows.item(k).cells.item(2).getElementsByTagName('select')[0].value + ', ' + rules_table.rows.item(k).cells.item(3).getElementsByTagName('input')[0].value + '.' + rules_table.rows.item(k).cells.item(3).getElementsByTagName('input')[1].value + '.' + rules_table.rows.item(k).cells.item(3).getElementsByTagName('input')[2].value + '.' + rules_table.rows.item(k).cells.item(3).getElementsByTagName('input')[3].value + ', ' + rules_table.rows.item(k).cells.item(4).getElementsByTagName('select')[0].value + '\r\n';
			}
			
			tbody += '\tParms = {\r\n';
			tbody += '\t\tname=' + document.getElementById('board_' + i + '_router' + j + '_name').value + '\r\n';
			tbody += '\t/parms\r\n';
			tbody += '/router\r\n\r\n';
				
			
		}
		
		//Add the local board links
		var b_link_table = document.getElementById('board' + i + '_link_table');
									
		var b_links = b_link_table.rows.length;
		
		for(var j=1; j< (b_links - 1); j++)
		{
			tbody += '\t#Define link ' + j + '\r\n';
			tbody += '\tdevice=link, ' + j + ', IP\r\n';
			tbody += '\tParms = {\r\n';
			tbody += '\t\tname=board link ' + j + '\r\n';
			tbody += '\t\tloss=' + b_link_table.rows.item(j).cells.item(1).getElementsByTagName('input')[0].value + '\r\n';
			tbody += '\t/parms\r\n';
			tbody += '/link\r\n\r\n';
		}
		
		
		tbody += '/board\r\n';
		tbody += '#-------------------------------------------------------------------------------\r\n';
		tbody += '#End of the board definitions section\r\n\r\n';
		
	}
	
	tbody += '</pre>';
		
	document.getElementById('config_file').innerHTML = tbody;
}



function toggle_input(name, regex, id)
{
	var patt = new RegExp(regex);

	if(document.getElementById(id).value == "internal")
	{
		document.getElementById(id.replace(patt, name)).disabled = true;
		document.getElementById(id.replace(patt, name)).value = null;
		
	}
	else
	{
		document.getElementById(id.replace(patt, name)).disabled = false;
	}

}



//Function to add a row to the backplane router table
function add_backplane_link(table_id, i)
{
	//Get the table element
	var table = document.getElementById(table_id);
	
	//Create a new row
	var row = table.insertRow(table.rows.length - 1);
	
	//Insert the cells
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	
	//Add the contents to the cells
	var tbody = '';
	
	tbody += '<form action="">\n';
	tbody += '<select name="backplane' + i + '_link_0" id="backplane' + i + '_link_0">\n';
	
	//Add in the connection options to the selection box
	var num_boards = document.getElementById('boards').value;
		
	for(var j=1; j<=num_boards; j++)
	{
		var num_routers = document.getElementById('board' + j + '_routers').value;
			
		for(var k=0; k<num_routers; k++)
		{
			var start_interface_num = 0;
			
			if(document.getElementById('board' + j + '_router_' + k + '_type').value == "outside")
			{
				start_interface_num = document.getElementById('board' + j + '_router_' + k + '_outside').value;
					
				var num_interfaces = parseInt(start_interface_num) + parseInt(document.getElementById('board' + j + '_router_' + k + '_internal').value);
			}
			else
			{
				var num_interfaces = document.getElementById('board' + j + '_router_' + k + '_internal').value;
			}
			
			
			//Loop through the internal interfaces only
			for(var m=start_interface_num; m<num_interfaces; m++)
			{
				tbody += '<option value="' + j + ',' + k + ',' + m + '">Board: ' + j + ', Router: ' + k +' (' + document.getElementById("board_" + j + "_router" + k + "_name").value + '), Interface: ' + m + '</option>\n';
			}
		
		}
	}
	
	tbody += '</select>\n';
	tbody += '</form>\n';
	
	
	cell1.innerHTML = tbody;
	
	cell2.innerHTML = '<input type="button" value="Remove Link" class="rowRemoveButton" />';
	
	
}





//Function to add a row to the router rule table
function add_router_rule(table_id, i, j)
{
    //Get the table element
    var table = document.getElementById(table_id);
    
    //Create a new row
    var row = table.insertRow(table.rows.length - 1);
    
    //Insert the cells
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    
    
    //Add the content to the cells
    cell1.innerHTML = table.rows.length - 3;
    
    cell2.innerHTML = '<input type="number" max="255" min="0" maxlength="3" size="3"> . <input type="number" max="255" min="0" maxlength="3" size="3"> . <input type="number" max="255" min="0" maxlength="3" size="3"> . <input type="number" max="255" min="0" maxlength="3" size="3">';
    
    var tbody = '';
    
    tbody += '<form action="">\n';
	tbody += '<select name="board' + i + '_router_' + j + '_rule_' + k + '_netmask" id="board' + i + '_router_' + j + '_rule_' + k + '_netmask">\n';
	tbody += '<option value="0">0</option>\n';
	tbody += '<option value="1">1</option>\n';
	tbody += '<option value="2">2</option>\n';
	tbody += '<option value="3">3</option>\n';
	tbody += '<option value="4">4</option>\n';
	tbody += '<option value="5">5</option>\n';
	tbody += '<option value="6">6</option>\n';
	tbody += '<option value="7">7</option>\n';
	tbody += '<option value="8">8</option>\n';
	tbody += '<option value="9">9</option>\n';
	tbody += '<option value="10">10</option>\n';
	tbody += '<option value="11">11</option>\n';
	tbody += '<option value="12">12</option>\n';
	tbody += '<option value="13">13</option>\n';
	tbody += '<option value="14">14</option>\n';
	tbody += '<option value="15">15</option>\n';
	tbody += '<option value="16">16</option>\n';
	tbody += '<option value="17">17</option>\n';
	tbody += '<option value="18">18</option>\n';
	tbody += '<option value="19">19</option>\n';
	tbody += '<option value="20">20</option>\n';
	tbody += '<option value="21">21</option>\n';
	tbody += '<option value="22">22</option>\n';
	tbody += '<option value="23">23</option>\n';
	tbody += '<option value="24">24</option>\n';
	tbody += '<option value="25">25</option>\n';
	tbody += '<option value="26">26</option>\n';
	tbody += '<option value="27">27</option>\n';
	tbody += '<option value="28">28</option>\n';
	tbody += '<option value="29">29</option>\n';
	tbody += '<option value="30">30</option>\n';
	tbody += '<option value="31">31</option>\n';
	tbody += '<option value="32">32</option>\n';
	tbody += '</select>\n';
	tbody += '</form>\n';
    
    cell3.innerHTML = tbody;
    
    
    cell4.innerHTML = '<input type="number" max="255" min="0" maxlength="3" size="3"> . <input type="number" max="255" min="0" maxlength="3" size="3"> . <input type="number" max="255" min="0" maxlength="3" size="3"> . <input type="number" max="255" min="0" maxlength="3" size="3">';
    
    
    tbody = '';
    
    //Get the number of interfaces
	if(document.getElementById('board' + i + '_router_' + j + '_type').value == "outside")
	{
		var num_interfaces = document.getElementById('board' + i + '_router_' + j + '_outside').value;
				
		num_interfaces = parseInt(num_interfaces) + parseInt(document.getElementById('board' + i + '_router_' + j + '_internal').value);
	}
	else
	{
		var num_interfaces = document.getElementById('board' + i + '_router_' + j + '_internal').value;
	}	
					
					
	//Populate the possible interfaces
	tbody += '<form action="">\n';
	tbody += '<select name="board' + i + '_router_' + j + '_rule_' + k + '_interface" id="board' + i + '_router_' + j + '_rule_' + k + '_interface">\n';
					
	for( var k=0; k<num_interfaces; k++)
	{
		tbody += '<option value="' + k + '">' + k + ' (IP: ' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip1").value + '.' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip2").value + '.' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip3").value + '.' + document.getElementById("board_" + i + "_router" + j + "_if" + k + "_ip4").value + ') </option>\n';
	}
				
	tbody += '</select>\n';
	tbody += '</form>\n';
	
	
	cell5.innerHTML = tbody;
	
	cell6.innerHTML = '<input type="button" value="Remove Rule" class="rowRemoveButton" />';
    
}




//Function to add a row to the global link table
function add_link_row(table_id)
{
	//Get the table element
	var table = document.getElementById(table_id);
	
	var link_num = parseInt(table.rows.length - 1);
	
	//Create a new row
	var row = table.insertRow(table.rows.length - 1);
	
	//Insert the cells
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	
	//Add the contents to the cells
	cell1.innerHTML = link_num;
	
	cell2.innerHTML = '<input type="number" value="0" name="global_link_' + link_num + '_loss" id="global_link_' + link_num + '_loss" max="100" min="0" maxlength="3" size="3"/></label>%';
	
	cell3.innerHTML = '<input type="button" value="Remove Link" class="rowRemoveButton";\'/>';
	
	
	
	
}




//JQuery Function to remove table row
(function($) {
	$(document).ready(function () { 
		$(document).on('click', ".rowRemoveButton", function(){
			var currentRow = $(this).closest('tr');
			var currentTable = $(this).closest('table');
			
			currentRow.remove();
			
			
			
			
			//Renumber the links
			if(currentTable[0].className == "link_loss_table")
			{
				for(var i=1; i< ($('#' + currentTable[0].id + ' tr').length -1); i++ )
				{
					$('#' + currentTable[0].id + ' tr:eq(' + i + ') td:eq(0)').html(i);
				}
			}
			else if(currentTable[0].className == "router_rule_table")
			{
			    for(var i=2; i< ($('#' + currentTable[0].id + ' tr').length -1); i++ )
				{
					$('#' + currentTable[0].id + ' tr:eq(' + i + ') td:eq(0)').html(i-1);
				}
			}
			
			
		});
	}); //END READY
})(jQuery);



//Function to search for a backplane link match
function search_for_bp_link(board, router, if_num)
{
	var search_value = board + ',' + router + ',' + if_num;
	
	var num_backplanes = document.getElementById('numBackplanes').value;
	
	for( var i=0; i < num_backplanes; i++)
	{
		//Get the table element
		var table = document.getElementById("backplane" + i + "_routers");
		
		//Search through the table rows
		for( var rowIndex = 1; rowIndex < (table.rows.length - 1); rowIndex++)
		{
			var e = table.rows.item(rowIndex).cells.item(0).getElementsByTagName('select')[0];
			
			var value = e.value;
			
			//Found a Match
			if( value == search_value)
			{
				var return_val = {'found': 1, backplane: i, 'ip1': document.getElementById('backplane' + i + '_ip1').value, 'ip2': document.getElementById('backplane' + i + '_ip2').value, 'ip3': document.getElementById('backplane' + i + '_ip3').value, 'ip4': document.getElementById('backplane' + i + '_ip4').value, 'netmask': document.getElementById('backplane' + i + '_netmask').value}
			
				return return_val;
			}
		}
	}
	
	var return_val = {'found': 0, 'backplane': '', 'ip1': '', 'ip2': '', 'ip3': '', 'ip4': '', 'netmask': ''};
	
	return return_val;
}


//IndexOf function for searching array
var indexOf = function(needle) {
    if(typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                if(this[i] === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle);
};
