const tips={
power:{title:"Receiver not ON",steps:["Switch OFF the machine safely.","Check the receiver DC supply at V+ and V−.","Verify fuse/protection and polarity.","Check the receiver power LED.","If supply is correct but the LED remains OFF, inspect the receiver PCB and connector."]},
remote:{title:"Remote not working",steps:["Check the transmitter battery voltage and replace/recharge if required.","Check whether the transmitter LED/indicator operates.","Check receiver power.","Test another known-good transmitter if available.","If the receiver responds to another transmitter, check pairing/ID configuration."]},
channel:{title:"One channel not working",steps:["Press the affected button and observe the receiver indicator.","Check whether the corresponding relay/output activates.","If the relay does not activate, inspect the receiver output stage.","If the relay activates, check the contactor/control wiring on the machine side.","Never bypass safety interlocks during testing."]},
relay:{title:"Relay clicks but machine doesn't run",steps:["Confirm the relay contact type: COM/NO/NC.","Check control voltage at the machine contactor coil.","Check emergency stop and safety interlocks.","Check the contactor and overload circuit.","Verify that the RF receiver output rating is suitable for the control circuit."]},
range:{title:"RF range is low",steps:["Check transmitter battery voltage.","Inspect the receiver antenna and connector.","Keep the antenna away from large metal surfaces where practical.","Check receiver supply voltage under load.","Consider RF interference from nearby equipment."]},
intermittent:{title:"Operation is intermittent",steps:["Check receiver supply for voltage drops.","Check loose terminals and connectors.","Check transmitter battery.","Inspect antenna connection.","Test with the machine stopped to distinguish RF problems from machine-side electrical noise."]}
};
function showTip(key){
 const x=tips[key];
 document.getElementById("tip").innerHTML="<b>"+x.title+"</b><ol>"+x.steps.map(s=>"<li>"+s+"</li>").join("")+"</ol>";
}
