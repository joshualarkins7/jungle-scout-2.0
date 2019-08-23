console.log("chrome extension ready to go")

const marketplace = [
    'us', 'uk', 'es', 'mx', 'it', 'in', 'de', 'fr', 'ca'
]

document.getElementsByClassName('js-est-list js-est-stores-list')[0].dataset.store = marketplace[0]


const category = document.getElementsByClassName('category ' + marketplace[0] + '-available')

const rank = [
    1,10,100,200,300,400,500,1000,2000,3000,4000,5000,10000,15000,20000,25000,30000,35000,40000,50000,60000,75000,100000,125000,150000,175000,200000,250000,300000,350000,400000,450000,500000,600000,700000,800000,900000,100000
]

var magicNumber = document.getElementsByClassName('js-magic-result')[0].innerText

let allNumbers = []

function waitChange() {
    if(document.getElementsByClassName('js-magic-result')[0].innerText===magicNumber) {
        setTimeout(waitChange, 2000);
        return;
    }
    magicNumber=document.getElementsByClassName('js-magic-result')[0].innerText;
    allNumbers.push(magicNumber)
}



function getAllNumbers() {
    let rankNumber = 0
    do {
        document.getElementsByName('theRankInput')[0].value = rank[rankNumber]
        document.getElementsByClassName('js-est-btn')[0].click()
        waitChange();
        rankNumber++
    }
    while (rankNumber <= rank.length)
}

function getAllCategories() {
    let categoryNumber = 0
    do {
        document.getElementsByClassName('js-est-categories-list')[0].dataset.category = category[categoryNumber].dataset.category
        getAllNumbers()

        categoryNumber++
    }
    while (categoryNumber <= category.length)
}

getAllCategories()

let categoryNames = ['',]

const rows = [
    ['category',1,10,100,200,300,400,500,1000,2000,3000,4000,5000,10000,15000,20000,25000,30000,35000,40000,50000,60000,75000,100000,125000,150000,175000,200000,250000,300000,350000,400000,450000,500000,600000,700000,800000,900000,100000],
    [marketplace[0]],
    [category[0], allNumbers]
]

let csvContent = "data:text/csv;charset-utf-8," + rows.map(e => e.join(",")).join("\n");

var encodedUri = encodeURI(csvContent);
window.open(encodedUri);