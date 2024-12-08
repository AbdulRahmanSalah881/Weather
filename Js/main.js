let allDataName = []
let currenttime = []
let search = document.getElementById("SearchInput")
let locationname = []
let button = document.getElementById("button-addon2")
let bt1 = document.getElementById("bt1")
let bt2 = document.getElementById("bt2")
let bt3 = document.getElementById("bt3")
let bt4 = document.getElementById("bt4")



async function getRecipes(make = "cairo") {
    let respond = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=19ee02755d0f4ab7ae4231651240412&q=${make}&days=3`)
    if (respond.ok) {
        let data = await respond.json()
        allDataName = data.forecast.forecastday
        currenttime = data.current
        locationname = data.location

        console.log(currenttime)
        console.log(data)
        console.log(locationname.name)
        // console.log(loction.name)

        DisplayData()
    }
}

getRecipes()


function DisplayData() {
    // console.log(d.toDateString())
    let d1 = new Date(allDataName[0].date);
    let d2 = new Date(allDataName[1].date);
    let d3 = new Date(allDataName[2].date);

    document.getElementById("firstday").innerHTML = d1.toDateString().split(" ")[0]
    document.getElementById("firstdaydata").innerHTML = d1.toDateString().split(" ")[2]
    document.getElementById("firstdaydata2").innerHTML = d1.toDateString().split(" ")[1]

    // console.log(d1.toDateString().split(" ")[2])

    document.getElementById("Secondday").innerHTML = d2.toDateString().split(" ")[0]
    document.getElementById("thierdday").innerHTML = d3.toDateString().split(" ")[0]
    document.getElementById("firstdayteamp").innerHTML = currenttime.temp_c
    document.getElementById("Seconddayteamp").innerHTML = allDataName[1].day.maxtemp_c
    document.getElementById("thierddayteamp").innerHTML = allDataName[2].day.maxtemp_c
    document.getElementById("Seconddayteamp2").innerHTML = allDataName[1].day.mintemp_c
    document.getElementById("thierddayteamp2").innerHTML = allDataName[2].day.mintemp_c

    document.getElementById("firstdayicon").setAttribute("src", currenttime.condition.icon)
    document.getElementById("Seconddayicon").setAttribute("src", allDataName[1].day.condition.icon)
    document.getElementById("thierddayicon").setAttribute("src", allDataName[2].day.condition.icon)

    document.getElementById("firstdaytext").innerHTML = currenttime.condition.text
    document.getElementById("Seconddaytext").innerHTML = allDataName[1].day.condition.text
    document.getElementById("thierddaytext").innerHTML = allDataName[2].day.condition.text

    document.getElementById("windDirection").innerHTML = currenttime.windchill_c

    document.getElementById("windDirection2").innerHTML = currenttime.wind_dir
    document.getElementById("windDirection3").innerHTML = currenttime.precip_mm


    document.getElementById("nameofloction").innerHTML = locationname.name






}
//  current_time()
search.addEventListener("keyup", function () {
    // console.log(search.value)

    getRecipes(search.value);

})
button.addEventListener("click", function () {
    // console.log(search.value)
    getRecipes(search.value)
    search.value = null
})

bt1.addEventListener("click", function () {
    getRecipes( "cairo")
    DisplayData()
})
bt2.addEventListener("click", function () {
    getRecipes( "london")
    DisplayData()
})
bt3.addEventListener("click", function () {
    getRecipes("saudi")
    DisplayData()
})
bt4.addEventListener("click",function(){
    getRecipes( "Russia")
    DisplayData()


    })
