function timeConversion(s) {
    let hrs = +(s[0]+s[1]);
    let mint = s[3]+s[4];
    let sec = s[6]+s[7];
    let format = s[8]+s[9]
    
    if(format == "PM" &&  hrs < 12 ) hrs =String(hrs +12);
    if(format == "AM" && hrs == 12 ) hrs =String( hrs-12);
    
    if(hrs < 10) hrs = "0"+hrs;
     return hrs+":"+mint+":"+sec;
   }

