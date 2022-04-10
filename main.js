'use strict';
function clickbutton(target) {
	let ans = document.getElementById("ans")
	let target_value = target.innerHTML;
	let kigou = ["+","-","/","*"];
	
	
	if (target_value == "AC") {
		ans.innerHTML = "0"
		
	} else if (target_value == "00") {
		if (ans.innerHTML == "0") {
			ans.innerHTML == "0"
		}
		if ((ans.innerHTML.slice(-1) == "." ) || (ans.innerHTML.slice(-1) >= "1" )) {
			ans.innerHTML += target_value
		}
	
	} else if ((target_value >= "0") && (ans.innerHTML.substr(0,1) == "." )) {
			ans.innerHTML = ("0"+ ans.innerHTML + target_value)
		
	}else if (target_value == "=") {
	 	ans.innerHTML = eval(ans.innerHTML)
	 	
	} else {
		if (ans.innerHTML == "0") {
			if ((target_value == ".") && (ans.innerHTML == "0")) {
				ans.innerHTML = "0."
				
			} else {
			ans.innerHTML = target_value
			}
			
		} else {
			ans.innerHTML += target_value
			
			if (kigou.includes(target_value)) {
				if (ans.innerHTML.slice(-1) == ans.innerHTML.substr(-2,1)) {
				 		ans.innerHTML = ans.innerHTML.slice(0,-1)
				
				} else if (ans.innerHTML.substr(-2,1) == ".") {
				 	ans.innerHTML = (ans.innerHTML.slice(0,-2) + ans.innerHTML.slice(-1))
				
				} else if (kigou.includes(ans.innerHTML.substr(-2,1)))  {
				 	ans.innerHTML = (ans.innerHTML.slice(0,-2) + ans.innerHTML.slice(-1))
				}	
					
			} else if (target_value == ".") {
				if (ans.innerHTML.slice(-1) == ans.innerHTML.substr(-2,1)) {
				 		ans.innerHTML = ans.innerHTML.slice(0,-1)
			
				} else if (kigou.includes(ans.innerHTML.substr(-2,1))) {
					ans.innerHTML = (ans.innerHTML.slice(0,-2) + ans.innerHTML.slice(-1))
				}
				
			} else if (((ans.innerHTML.substr(0,1) == "*")||(ans.innerHTML.substr(0,1) == "/")) && (ans.innerHTML.substr(1,1) >= "0" )) {
				ans.innerHTML = ans.innerHTML.slice(1)
				
			} else if (kigou.includes(ans.innerHTML.substr(-3,1))) {
				if (ans.innerHTML.substr(-2,1) == "0") {
					if (ans.innerHTML.slice(-1) >= "0") {
						ans.innerHTML = ans.innerHTML.slice(0,-2) + target_value
					}
				}
			}
		}
	}
}