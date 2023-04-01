/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet" 
*/

function domainName(url) {
  const protocols = [
    "http://",
    "https://",
    "http://www.",
    "https://www.",
    "www.",
  ];

  for (let index = 0; index < protocols.length; index++) {
    const current_protocol = protocols[index];
    if (url.startsWith(current_protocol)) {
      url = url.replace(current_protocol, "");
    }
  }
  return url.split(".")[0];
}
