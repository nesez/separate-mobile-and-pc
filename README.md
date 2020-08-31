# separate-mobile-and-pc
separate mobile and pc

//javascript (.js)
							var ua = window.navigator.userAgent.toLowerCase();
							if ( /iphone/.test(ua) || /android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) ) {
							document.location.replace('');  //''->mobile url
							}
              
              
              
              
//script(.html)
<script>
							var ua = window.navigator.userAgent.toLowerCase();
							if ( /iphone/.test(ua) || /android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) ) {
							document.location.replace('');  //''->mobile url
							}
</script>
