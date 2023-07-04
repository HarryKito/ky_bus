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
	const curr = new Date();
document.writeln("현재시간(Locale) : " + curr + '<br>');

// 2. UTC 시간 계산
const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);

// 3. UTC to KST (UTC + 9시간)
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const kr_curr = new Date(utc + (KR_TIME_DIFF));

document.writeln("한국시간 : " + kr_curr);
}

getdata()

function showBus()
{
	const fromUniv196 = [0,0];
	const toUniv196 = [0,0];
	const fromUniv74_1 =[0,0];
	const toUniv74_1 = [0,0];
	const fromUniv80 = [0,0];
	const toUniv80 = [0,0];
	const fromUniv883_1 = [0,0];
	const toUniv883_1 = [0,0];
	const fromUniv884_1 = [0,0];
	const toUniv884_1 = [0,0];
	const fromUniv891_1 = [0,0];
	const toUniv891_1 = [0,0];
	const fromUniv92_1 = [0,0];
	const toUniv92_1 = [0,0];
	const fromUniv92_2 = [0,0];
	const toUniv92_2 = [0,0];
	
}