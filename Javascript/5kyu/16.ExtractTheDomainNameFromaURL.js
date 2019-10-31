  // CARA MANUAL SEBELUM DI BUAT MODULAR FUCNTION NYA
  // function domainName(url) {
  //     let result = ''
  //     if (url[0] == 'h' && url[4] != 's' && url[8] != 'w') {
  //         for (let i = 7; i < url.length; i++) {
  //             if (url[i] == '.') {
  //                 return result
  //             } else {
  //                 result += url[i]
  //             }
  //         }
  //     } else if (url[0] == 'h' && url[4] != 's' && url[8] == 'w') {
  //         for (let i = 11; i < url.length; i++) {
  //             if (url[i] == '.') {
  //                 return result
  //             } else {
  //                 result += url[i]
  //             }
  //         }
  //     } else if (url[0] == 'h' && url[4] == 's' && url[8] == 'w') {
  //         for (let i = 12; i < url.length; i++) {
  //             if (url[i] == '.') {
  //                 return result
  //             } else {
  //                 result += url[i]
  //             }
  //         }
  //     } else if (url[0] == 'w') {
  //         for (let i = 4; i < url.length; i++) {
  //             if (url[i] == '.') {
  //                 return result
  //             } else {
  //                 result += url[i]
  //             }
  //         }
  //     } else if (url[0] == 'h' && url[4] == 's') {
  //         for (let i = 8; i < url.length; i++) {
  //             if (url[i] == '.') {
  //                 return result
  //             } else {
  //                 result += url[i]
  //             }
  //         }
  //     } else {
  //         for (let i = 0; i < url.length; i++) {
  //             if (url[i] == '.') {
  //                 return result
  //             } else {
  //                 result += url[i]
  //             }
  //         }
  //     }
  // }


  // CARA MODULAR FUCNTION NYA ===>
  function domainName(url) {
    if (url[0] == 'h' && url[4] != 's' && url[8] != 'w') {
      return (potong(url, 7))
    } else if (url[0] == 'h' && url[4] != 's' && url[8] == 'w') {
      return (potong(url, 11))
    } else if (url[0] == 'h' && url[4] == 's' && url[8] == 'w') {
      return (potong(url, 12))
    } else if (url[0] == 'w') {
      return (potong(url, 4))
    } else if (url[0] == 'h' && url[4] == 's') {
      return (potong(url, 8))
    } else {
      return (potong(url, 0))
    }
  }

  function potong(params, start) {
    let result = ''
    for (let i = start; i < params.length; i++) {
      if (params[i] == '.') {
        return result
      } else {
        result += params[i]
      }
    }
  }

  console.log(domainName("http://google.com"), "google");
  console.log(domainName("http://google.co.jp"), "google");
  console.log(domainName("www.xakep.ru"), "xakep");
  console.log(domainName("https://youtube.com"), "youtube");
  console.log(domainName("icann.org"), "icann")
  console.log(domainName("http://www.codewars.com/kata/"), 'codewars')

  /*
  =====SOAL======
  Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
  domainName("http://github.com/carbonfive/raygun") == "github" 
  domainName("http://www.zombie-bites.com") == "zombie-bites"
  domainName("https://www.cnet.com") == "cnet"
  */
  /*
  CARA ORANG LAIN
  1. ======>

  function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };

  2. ======>

  function domainName(url){
    if (url.includes('www.')) {
      return url.split('www.')[1].split('.')[0];
    } else if (url.includes('://')) {
      return url.split('://')[1].split('.')[0];
    } else if (url.includes('.')) {
      return url.split('.')[0];
    } else {
      return url;
    }
  }

  3. ======>
  */