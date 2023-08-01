function getdata()
{
	var xhr = new XMLHttpRequest();
	var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
	var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'QgmUg9hj0Ehv%2BrHFMIkbEIhPUPuLChLl0vlVNzX3jXvo1tNPbOviKNFBigULWbdjFHdB66vZda2VlRGa7Putvw%3D%3D'; /*Service Key*/
	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
	queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('json'); /**/
	queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20230420'); /**/
	queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /**/
	queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /**/
	queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /**/
	xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function ()
 {
		if (this.readyState == 4)
			if(this.status == 200)
				alert('상태 :'+ this.status + '\nBody: '+this.responseText);
		else {alert("something errors");}
	};
	xhr.send('');
	showTime();
}

function showTime()
{
	const utcClock = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);

// 3. UTC to KST (UTC + 9시간)
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const kr_curr = new Date(utcClock + (KR_TIME_DIFF));

const yoil = kr_curr.getDay();
const hour = kr_curr.getHours();
const minutes = kr_curr.getMinutes();
const sec = kr_curr.getSeconds();

//document.writeln("현재시간 : " +hour+ " : "+minutes+" : "+sec+ " " + yoil);
document.writeln(hour);
}

getdata()

const options = {
		enableHighAccuracy: true,
		timeout : 5000,
		maximumAge: 0,		
};

function success(pos) {
	const crd = pos.coords;
	
	console.log("your current position is : ");
	console.log("lat : ${crd.latitude}");
	console.log("Lon : ${crd.longitude}");
	
}

function error(err) {
	console.warn("ERROR(${err.code}):${err.message}");
}

navigator.geolocation.getCurrentPosition(success, error, options);