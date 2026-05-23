function minDate(dates) {
  //write you code here
	dates.sort((a,b)=>{
let str1=a.slice(0,4);
let str2=b.slice(0,4); 
if(str1!=str2) return str1>str2;
let str3=a.slice(5,7);
let str4=b.slice(5,7); 
if(str3!=str4) return str3>str4; 
let str5=a.slice(8,10);
let str6=b.slice(8,10); 
if(str5!=str6) return str5-str6;
});
	return dates[0];
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
