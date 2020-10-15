var names = '{"Names":[' +
    '{"firstName":"Darian","lastName":"Burden", "major":"CIS" },' + //0
    '{"firstName":"Dakota","lastName":"Terry", "major":"CIS"},' + //1
    '{"firstName":"Andrew","lastName":"Folkerts", "major":"IT" },' + //2
    '{"firstName":"Mason","lastName":"Cook", "major":"CIS" },' + //3
    '{"firstName":"Meagan","lastName":"Coleman", "major":"CIS" },' + //4
    '{"firstName":"Vonte","lastName":"Alexander", "major":"IT" },' + //5
    '{"firstName":"JJ","lastName":"McCormick", "major":"CIS" },' + //6
    '{"firstName":"Reagan","lastName":"Howard", "major":"CIS" },' + //7
    '{"firstName":"Lucas","lastName":"Owens", "major":"CIS" },' + //8
    '{"firstName":"Alyssa","lastName":"Birt", "major":"IT" },' + //9
    '{"firstName":"Jaylen","lastName":"Johnson", "major":"CIS" },' + //10
    '{"firstName":"Curtis","lastName":"Holt", "major":"IT" },' + //11
    '{"firstName":"Matt","lastName":"Peck", "major":"CIS" },' + //12
    '{"firstName":"Mason","lastName":"Cantrell", "major":"CIS" },' + //13
    '{"firstName":"Maruice","lastName":"Elmore Jr.", "major":"CIS" },' + //14
    '{"firstName":"Hobie","lastName":"Aljohni", "major":"CIS" },' + //15
    '{"firstName":"Garrett","lastName":"Duplantis", "major":"CIS" },' + //16
    '{"firstName":"Gavin","lastName":"Honeycutt", "major":"" },' + //17
    '{"firstName":"Delilah","lastName":"Howell", "major":"CIS" },' + //18
    '{"firstName":"Ethan","lastName":"Montgomery", "major":"CIS" },' + //19
    '{"firstName":"Joy","lastName":"Parker", "major":"CIS" },' + //20
    '{"firstName":"Surya","lastName":"Singh", "major":"CS" },' + //21
    '{"firstName":"Michael","lastName":"Zimmerman", "major":"CIS" },' + //22
    '{"firstName":"Mr. Mitchel","lastName":"Moon" },' + //23
    '{"firstName":"Dr. Barry","lastName":"Cumbie" }]}'; //24

obj = JSON.parse(names);

document.getElementById("name0").innerHTML =
    obj.Names[0].firstName + " " + obj.Names[0].lastName + "<br>" + obj.Names[0].major;

document.getElementById("name1").innerHTML =
    obj.Names[1].firstName + " " + obj.Names[1].lastName + "<br>" + obj.Names[1].major;

document.getElementById("name2").innerHTML =
    obj.Names[2].firstName + " " + obj.Names[2].lastName + "<br>" + obj.Names[2].major;

document.getElementById("name3").innerHTML =
    obj.Names[3].firstName + " " + obj.Names[3].lastName + "<br>" + obj.Names[3].major;

document.getElementById("name4").innerHTML =
    obj.Names[4].firstName + " " + obj.Names[4].lastName + "<br>" + obj.Names[4].major;

document.getElementById("name5").innerHTML =
    obj.Names[5].firstName + " " + obj.Names[5].lastName + "<br>" + obj.Names[5].major;

document.getElementById("name6").innerHTML =
    obj.Names[6].firstName + " " + obj.Names[6].lastName + "<br>" + obj.Names[6].major;

document.getElementById("name7").innerHTML =
    obj.Names[7].firstName + " " + obj.Names[7].lastName + "<br>" + obj.Names[7].major;

document.getElementById("name8").innerHTML =
    obj.Names[8].firstName + " " + obj.Names[8].lastName + "<br>" + obj.Names[8].major;

document.getElementById("name9").innerHTML =
    obj.Names[9].firstName + " " + obj.Names[9].lastName + "<br>" + obj.Names[9].major;

document.getElementById("name10").innerHTML =
    obj.Names[10].firstName + " " + obj.Names[10].lastName + "<br>" + obj.Names[10].major;

document.getElementById("name11").innerHTML =
    obj.Names[11].firstName + " " + obj.Names[11].lastName + "<br>" + obj.Names[11].major;

document.getElementById("name12").innerHTML =
    obj.Names[12].firstName + " " + obj.Names[12].lastName + "<br>" + obj.Names[12].major;

document.getElementById("name13").innerHTML =
    obj.Names[13].firstName + " " + obj.Names[13].lastName + "<br>" + obj.Names[13].major;

document.getElementById("name14").innerHTML =
    obj.Names[14].firstName + " " + obj.Names[14].lastName + "<br>" + obj.Names[14].major;

document.getElementById("name15").innerHTML =
    obj.Names[15].firstName + " " + obj.Names[15].lastName + "<br>" + obj.Names[15].major;

document.getElementById("name16").innerHTML =
    obj.Names[16].firstName + " " + obj.Names[16].lastName + "<br>" + obj.Names[16].major;

document.getElementById("name17").innerHTML =
    obj.Names[17].firstName + " " + obj.Names[17].lastName + "<br>" + obj.Names[17].major;

document.getElementById("name18").innerHTML =
    obj.Names[18].firstName + " " + obj.Names[18].lastName + "<br>" + obj.Names[18].major;

document.getElementById("name19").innerHTML =
    obj.Names[19].firstName + " " + obj.Names[19].lastName + "<br>" + obj.Names[19].major;

document.getElementById("name20").innerHTML =
    obj.Names[20].firstName + " " + obj.Names[20].lastName + "<br>" + obj.Names[20].major;

document.getElementById("name21").innerHTML =
    obj.Names[21].firstName + " " + obj.Names[21].lastName + "<br>" + obj.Names[21].major;

document.getElementById("name22").innerHTML =
    obj.Names[22].firstName + " " + obj.Names[22].lastName + "<br>" + obj.Names[22].major;

document.getElementById("name23").innerHTML =
    obj.Names[23].firstName + " " + obj.Names[23].lastName;

document.getElementById("name24").innerHTML =
    obj.Names[24].firstName + " " + obj.Names[24].lastName;