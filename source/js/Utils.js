export function updateQueryStringParam(key, value) {
  let baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
  let urlQueryString = document.location.search;
  let newParam = key + '=' + value;
  let params = '?' + newParam;

  // If the "search" string exists, then build params from it
  if (urlQueryString) {

    let updateRegex = new RegExp('([\?&])' + key + '[^&]*');
    let removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');

    if( typeof value == 'undefined' || value == null || value == '' ) { 
      // Remove param if value is empty
      params = urlQueryString.replace(removeRegex, "$1");
      params = params.replace( /[&;]$/, "" );
    } else if (urlQueryString.match(updateRegex) !== null) { 
      // If param exists already, update it
      params = urlQueryString.replace(updateRegex, "$1" + newParam);
    } else { 
      // Otherwise, add it to end of query string
      params = urlQueryString + '&' + newParam;
    }
  }

  // no parameter was set so we don't need the question mark
  params = params == '?' ? '' : params;

  window.history.replaceState({}, "", baseUrl + params);
}