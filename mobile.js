							var ua = window.navigator.userAgent.toLowerCase();
							if ( /iphone/.test(ua) || /android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) ) {
							document.location.replace('');  //''->mobile url
							}
