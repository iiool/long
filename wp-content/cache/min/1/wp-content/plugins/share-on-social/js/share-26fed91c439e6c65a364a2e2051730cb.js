jQuery(document).ready(function(){showFBShares();showTwitterShares();processLockers()});function processLockers(){var shareNames=getShareNames();for(var i=0;i<shareNames.length;i++){var shareName=shareNames[i].value;unlockContent(shareName)}}
function showFBShares(){var shareNames=getShareNames();for(var i=0;i<shareNames.length;i++){var shareName=shareNames[i].value;var shareSpans=getShareSpans(shareName,'fb');for(var j=0;j<shareSpans.length;j++){var shareSpan=shareSpans[j];shareSpan.onclick=shareWithFB}}}
function showTwitterShares(){var shareNames=getShareNames();for(var i=0;i<shareNames.length;i++){var shareName=shareNames[i].value;var shareSpans=getShareSpans(shareName,'twitter');console.log(shareName);console.log(shareSpans);for(var j=0;j<shareSpans.length;j++){var shareSpan=shareSpans[j];var prefix=getPrefix(shareSpan);var shareTarget=getShareTarget(shareName,prefix);renderTwitterButton(shareSpan,shareName,shareTarget)}}}
function renderTwitterButton(shareSpan,shareName,shareTarget){var twitterButtonId=null;twttr.ready(function(twttr){twttr.widgets.createShareButton(shareTarget,shareSpan,{size:'large',count:'none',text:'Sharing a URL using the Tweet Button'}).then(function(el){twitterButtonId=el.id});twttr.events.bind('tweet',function(intentEvent){if(!intentEvent)
return;if(intentEvent.target.id==twitterButtonId){handleTwitterResponse(shareName,intentEvent)}})})}
function shareWithFB(){var shareName=getShareName(this);var prefix=getPrefix(this);var shareTarget=getShareTarget(shareName,prefix);FB.ui({display:'popup',method:'share',href:shareTarget,},function(response){handleFbResponse(shareName,response)})}
function handleTwitterResponse(shareName,intentEvent){var response={};handleResponse('twitter',shareName,response)}
function handleFbResponse(shareName,response){console.log("og.likes create : "+JSON.stringify(response));if(!response){console.log('unknown error and response : '+response)}else{if(response.error_code){console.log('error occured : '+response);if('3501'==response.error_code){openLocker(shareName)}}else{FB.api("/me/og.likes",function(response){console.log(JSON.stringify(response));handleResponse('fb',shareName,response)})}}}
function handleResponse(type,shareName,response){jQuery.ajax({type:'POST',url:sos_data.ajax_url,data:{action:'save-stats',type:type,share_name:shareName,share_stats:JSON.stringify(response),_ajax_nonce:sos_data.nonce,},success:function(data,textStatus,XMLHttpRequest){console.log(data);openLocker(shareName)},error:function(MLHttpRequest,textStatus,errorThrown){console.log(errorThrown)}})}
function getShareNames(){var names=[];var shareNames=[];jQuery('.share_name').each(function(){if(jQuery.inArray(jQuery(this).prop('value'),names)===-1){names.push(jQuery(this).prop('value'));shareNames.push(this)}});return shareNames}
function getShareName(element){if(undefined==element.id||''==element.id){return undefined}
var index=(element.id).indexOf('-');if(-1==index){return undefined}
index++;var shareName=(element.id).substring(index);return shareName}
function getPrefix(element){if(undefined==element.id||''==element.id){return undefined}
var index=(element.id).indexOf('_');if(-1==index){return undefined}
index++;var endIndex=(element.id).indexOf('-');if(-1==endIndex){return undefined}
var prefix=(element.id).substring(index,endIndex);console.log('prefix '+prefix);return prefix}
function getShareTarget(shareName,prefix){var shareTarget=jQuery('#'+shareName+'_'+prefix+'_share_target').attr('value');return shareTarget}
function getShareSpans(shareName,shareType){var shareSpans=jQuery('.'+shareType+'-'+shareName);return shareSpans}
function openLocker(shareName){createCookie(shareName,!0,8760);if(isCookieSet(shareName)){unlockContent(shareName)}}
function unlockContent(shareName){if(isCookieSet(shareName)){jQuery('.'+shareName+'-sos-content').removeClass('sos-hide');jQuery('.'+shareName+'-sos-locker').addClass('sos-hide')}}
function createCookie(name,value,hours){cookiePrefix='sos-';cookieName=cookiePrefix+name;var expires;if(hours>0){var date=new Date();date.setTime(date.getTime()+(hours*60*60*1000));expires="; expires="+date.toGMTString()}else{expires=""}
document.cookie=escape(cookieName)+"="+escape(value)+"; "+expires+"; path=/";return date}
function isCookieSet(name){cookiePrefix='sos-';cookieName=cookiePrefix+name;cookieSetPattern=cookieName+'=true';if(document.cookie.indexOf(cookieSetPattern)>=0){return!0}else{return!1}}