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
		{
			if(this.status == 200)
			{
				alert('상태 :'+ this.status + '\nBody: '+this.responseText);
			}else {alert("something errors");}
		}
	};

	xhr.send('');
}

function showTime()
{
	const kr_time_dif = 32400000;
	const sys_now = new Date();

	const kr_curr = sys_now.getTime() + sys_now.getTimezoneOffset() * 60000;
}

getdata()
