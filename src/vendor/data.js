import $ from 'jquery';
// let Person = [{"id":1,"firstname":"Victor","lastname":"Morales","email":"vmorales0@goo.gl","birthday":"6/10/2000","address1":"86032 Springs Junction","address2":"84180 Jana Park","city":"Wan’an","state":"China","zip":123},
// {"id":2,"firstname":"Michelle","lastname":"Clark","email":"mclark1@newyorker.com","birthday":"5/24/1996","address1":"244 Anzinger Street","address2":"3 Clove Terrace","city":"Ron Phibun","state":"Thailand","zip":123},
// {"id":3,"firstname":"Sandra","lastname":"Sims","email":"ssims2@upenn.edu","birthday":"6/23/1982","address1":"9 Cody Place","address2":"3618 Drewry Road","city":"Piraquara","state":"Brazil","zip":123},
// {"id":4,"firstname":"Aaron","lastname":"Knight","email":"aknight3@omniture.com","birthday":"1/18/1994","address1":"172 Quincy Way","address2":"90534 Kings Way","city":"Racine","state":"United States","zip":"53405"},
// {"id":5,"firstname":"Joyce","lastname":"Kennedy","email":"jkennedy4@google.de","birthday":"12/1/1991","address1":"58259 Porter Alley","address2":"196 Sloan Pass","city":"Maracanã","state":"Brazil","zip":123},
// {"id":6,"firstname":"Steven","lastname":"Richardson","email":"srichardson5@xrea.com","birthday":"1/6/2000","address1":"755 Tennyson Lane","address2":"61336 Briar Crest Place","city":"Suvorov","state":"Russia","zip":123},
// {"id":7,"firstname":"Adam","lastname":"Franklin","email":"afranklin6@stanford.edu","birthday":"1/14/1986","address1":"48 Sutteridge Lane","address2":"77732 Sutherland Parkway","city":"San Juan","state":"Mexico","zip":"56030"},
// {"id":8,"firstname":"Joshua","lastname":"Banks","email":"jbanks7@baidu.com","birthday":"9/12/1988","address1":"7756 Anderson Junction","address2":"7 Algoma Parkway","city":"Lemahputih","state":"Indonesia","zip":123},
// {"id":9,"firstname":"Anthony","lastname":"Little","email":"alittle8@reference.com","birthday":"3/30/1986","address1":"7 Jackson Hill","address2":"7 Village Green Street","city":"Dranoc","state":"Kosovo","zip":123},
// {"id":10,"firstname":"Wayne","lastname":"Robinson","email":"wrobinson9@hugedomains.com","birthday":"2/7/1995","address1":"82 Main Crossing","address2":"152 Helena Center","city":"Lobos","state":"Argentina","zip":123},
// {"id":11,"firstname":"Betty","lastname":"Bishop","email":"bbishopa@msu.edu","birthday":"5/1/1980","address1":"2277 Banding Circle","address2":"79624 Kedzie Drive","city":"Antioquia","state":"Colombia","zip":123},
// {"id":12,"firstname":"Eric","lastname":"Arnold","email":"earnoldb@cnn.com","birthday":"6/12/1993","address1":"32226 Quincy Plaza","address2":"61 Evergreen Lane","city":"Seremban","state":"Malaysia","zip":"70604"},
// {"id":13,"firstname":"Eugene","lastname":"Banks","email":"ebanksc@de.vu","birthday":"5/2/1980","address1":"3538 Cambridge Center","address2":"981 7th Pass","city":"Pingshan","state":"China","zip":123},
// {"id":14,"firstname":"Frances","lastname":"Bradley","email":"fbradleyd@opensource.org","birthday":"5/9/1993","address1":"5376 Ohio Crossing","address2":"9 Summerview Park","city":"Roa","state":"Indonesia","zip":123},
// {"id":15,"firstname":"Susan","lastname":"Anderson","email":"sandersone@sfgate.com","birthday":"1/14/1985","address1":"9 Sutherland Parkway","address2":"69 Del Sol Parkway","city":"Novopavlovsk","state":"Russia","zip":123},
// {"id":16,"firstname":"Kelly","lastname":"Ortiz","email":"kortizf@cafepress.com","birthday":"2/4/1981","address1":"1149 Anhalt Park","address2":"02267 Westend Trail","city":"Huazhu","state":"China","zip":123},
// {"id":17,"firstname":"Brenda","lastname":"Howell","email":"bhowellg@statcounter.com","birthday":"10/27/1990","address1":"3534 Bluejay Trail","address2":"3226 Maryland Center","city":"Los Santos","state":"Panama","zip":123},
// {"id":18,"firstname":"Randy","lastname":"Sanchez","email":"rsanchezh@nhs.uk","birthday":"7/14/1990","address1":"0782 Starling Trail","address2":"40 Redwing Alley","city":"Tunja","state":"Colombia","zip":123},
// {"id":19,"firstname":"Alan","lastname":"Carter","email":"acarteri@sina.com.cn","birthday":"2/26/1992","address1":"19013 Moland Alley","address2":"7342 Milwaukee Avenue","city":"Askaniya Nova","state":"Ukraine","zip":123},
// {"id":20,"firstname":"Linda","lastname":"Jenkins","email":"ljenkinsj@odnoklassniki.ru","birthday":"10/30/1980","address1":"83 Mayer Hill","address2":"83591 Atwood Crossing","city":"Ertai","state":"China","zip":123}];

let Person = () => {
  return $.ajax({
    type: "GET",
    url: '/getdata',
    async: false
  }).responseText;
}

var data = Person()

export default {
  Person: JSON.parse(data)
}
