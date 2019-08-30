
const checkForChange = ''
document.getElementsByClassName('js-est-list js-est-stores-list')[0].dataset.store=''

function waitChange() {
    if (document.getElementsByClassName('js-est-list js-est-stores-list')[0].dataset.store ===checkForChange) {
        setTimeout(waitChange, 50);
        return;
    }
    runCode();
}

waitChange();

function runCode () {
    
    // const ranks = [
    //     1,10,100,200,300,400,500,1000,2000,3000,4000,5000,10000,15000,20000,25000,30000,35000,40000,50000,60000,75000,100000,125000,150000,175000,200000,250000,300000,350000,400000,450000,500000,600000,700000,800000,900000,1000000
    // ];

    const ranks = [1, 10, 10000, 50000, 600000, 1000000];
    let allNumbers = [];
    
    let marketplace = document.getElementsByClassName('js-est-list js-est-stores-list')[0].dataset.store

    function iterateArrayXSeconds(arr, fn, seconds) {
        for (let i = 0; i < arr.length; i += 1) {
            function cb(index) {
                setTimeout(() => fn(arr[index], index), seconds * index);
            };
            cb(i);
        }
    }

    let magicNumbers = [];

    const categories = Array.from(document.getElementsByClassName(`category ${marketplace}-available`)).map((categoryElement) => {
            return categoryElement.innerText.slice(1,-1);
    });

    function getNumbers () {
        let categoryTimeout = iterateArrayXSeconds(
            categories,
            (category, index) => {
                // Set category input
                document.getElementsByClassName('js-est-categories-list')[0].dataset.category = category;

                // Iterate through ranks
                let rankTimeout = iterateArrayXSeconds(
                    ranks,
                    (rank, index) => {
                        // Set rank input
                        document.getElementsByName('theRankInput')[0].value = rank;

                        // click button
                        document.getElementsByClassName('js-est-btn')[0].click();

                        let magicNumberTimeout = setTimeout(() => {
                            const newMagicNumber = document.getElementsByClassName('js-magic-result')[0].innerText;
                            magicNumbers.push(newMagicNumber.split(',').join(''));

                            if (index === ranks.length - 1) {
                                allNumbers.push(magicNumbers);
                                magicNumbers = [];
                                
                            // } else if (newMagicNumber === '0') {
                            //     allNumbers.push(magicNumbers);
                            //     magicNumbers = [];
                            //     categories.shift()
                            //     getNumbers()
                            }

                            console.log(newMagicNumber, 'for rank', rank, 'in category', category, 'in the', marketplace);
                        }, 1250);

                    },
                    1260
                );
                // index === 2
                if (index === categories.length - 1) {
                    setTimeout(() => {
                        let rows = [
                            [marketplace],
                            ['Category', ...ranks],
                            ...categories.map((category, index) => [category.split(',').join(''), allNumbers[index]])
                        ];
                        
                        let csvContent = "data:text/csv;charset-utf-8," + rows.map(e => e.join(",")).join("\n");
                        
                        var encodedUri = encodeURI(csvContent);
                        window.open(encodedUri);
                    }, 2600)
                }
                // categories.shift()
                // console.log(categories[0])
            },
            2520
        );
    }
    getNumbers()
}