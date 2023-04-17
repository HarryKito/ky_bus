function request()
{
	const response = await fetch('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst',
	{
    	method: 'GET',
	});
  const data = await response.json();
  console.log(data)
}

function getdata()
{
var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000');
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('XML');
queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20210628');
queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600');
queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55');
queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127');
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');
}

function changeValue()
{
}
