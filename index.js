//=============================Решение идут в том же порядке,что и задачи===================
const uniqueValues = (valuesList) => {
    // return
    console.log(valuesList.filter((value, index, arrList) => arrList.indexOf(value) === index));
    console.log([...new Set(valuesList)]);
}

//uniqueValues([1,1,1,2,2,2,3,4,5,5,6]);

//========================================================

const findingNumberOccurringOdd = (numberList) => {
    const findindNumbr = numberList.reduce((result, number) => (result[number] = ++result[number] || 1, result), {});
    return +Object.keys(findindNumbr).find(key => findindNumbr[key] % 2 || undefined)
}

findingNumberOccurringOdd([1, 1, 2, 2, 3, 3, 4]);
//======Ещё вариант ====== //
const findingNumberOccurringOddTwo = (numberList) => {
    return numberList.reduce((result, number) => result ^ number);
}

findingNumberOccurringOddTwo([1, 1, 2, 2, 3, 3, 4]);

//==========================================================
let decomposeNumber = null
const decomposeNumberAndAdd = (number = decomposeNumber) => {
    decomposeNumber = [...number + ''].reduce((result, current) => {
        return +result + +current
    })
    if ([...decomposeNumber + ''].length > 1) {
        decomposeNumberAndAdd()
    }
}

decomposeNumberAndAdd(132198);
//===================MAP=======================================

Array.prototype.myMap = function(callBack, arrayArg) {
    const arrOld = this;
    const ThisLength = this.length;
    const newArray = [];
    for (let index = 0; index < ThisLength; index++) {
        newArray.push(callBack(this[index], index, arrOld))
    }
    return newArray;
}

const arr = [1, 2, 3, 4, 5];
const arrNew = arr.myMap((item, index, arr) => arr);


//============================Filter=============================

Array.prototype.myFilter = function(callBack, arrayArg) {
    const arrOld = this;
    const ThisLength = this.length;
    const newArray = [];
    let index = 0
    newArray.push(...arrOld)
    for (index; index < ThisLength; index++) {
        if (callBack(this[index]) === true) {
            newArray.push(this[index]);
        }
    }
    return newArray;
}

const arrFilt = arr.myFilter((item, index, arr) => arr);
const arrFiltTwo = arr.filter((item, index, arr) => arr);
//console.log(arrFiltTwo)
//console.log(arrFilt)

//=================================================================
const url = 'https://pokeapi.co/api/v2/pokemon'

const getAllPokemon = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET'
        });
        const data = await response.json();
        //console.log(data.results);
    } catch (error) {
        console.error(error);
    }
}
getAllPokemon();

//===================================================================

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const namePokemon = 'ditto' || event.target.value;

const getInfoPokemon = async () => {
    try {
        const response = await fetch(`${baseUrl}/${namePokemon}`, {
            method: 'GET'
        });
        const data = await response.json();
        //console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getInfoPokemon();
//====================================================================
//===================День мучал эту задачу.===========================
const urlPokemon = 'https://pokeapi.co/api/v2/pokemon';

const getInfoAllPokemon = async () => {
    try {
        const response = await fetch(urlPokemon, {
            method: 'GET'
        });

        const data = await response.json();

        const urls = data.results.map(urlIfoPokemon => urlIfoPokemon.url)

        if (urls) {

            const result = await Promise.all(urls.map((url) => fetch(url)))

            const dataInfo = await Promise.all(result.map(pokemonInfo => pokemonInfo.json()));

            console.log(dataInfo)
        }
    } catch (error) {
            console.error(error);
    }
}
getInfoAllPokemon();

//=====================================================================
const getValue = (value, delay) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), +delay)
})

getValue('Hello', 3000).then((data) => data);