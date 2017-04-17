window.addEventListener ("load", myMain, false);
    function myMain (evt) {
        let jsInitChecktimer = setInterval(checkForJS_Finish, 500);

        function checkForJS_Finish () {
            if (document.getElementById('recipecontent')) {
                clearInterval(jsInitChecktimer);
                const msg = {
                    action: "gotDOM",
                    page: getRecipeData()
                };
                chrome.runtime.sendMessage(msg);
            }
        }
}

function getRecipeData() {
    // @TODO: helper map prop to el and loop
    // @TODO: strip html from titles

    function cleanFlavorNames(match) {
        let rawNames = generateFlavorList(match);
        let holder = [];
        for (let i = 0; i < rawNames.length; i++) {
            holder[i] = rawNames[i].split(/\s\(/)[0];
        }
        return holder;
    }

    function generateFlavorList(match) {
        const flavorWrapper = document.getElementById('recflavor'),
              matchEls = flavorWrapper.querySelectorAll(match);
        let holder = [];
        for (let i = 0; i < matchEls.length; i++) {
            holder[i] = matchEls[i].innerHTML;
        }
        return holder;
    }

    return {
        user: document.getElementById('byuser').getElementsByTagName('a')[0].innerHTML,
        title: document.getElementById('rname').innerHTML,
        nic: {
            label: 'Nicotine',
            mg: document.getElementById('rnstr').innerHTML,
            rat: document.getElementById('nirat').innerHTML,
            ml: document.getElementById('rnicml').innerHTML,
            drops: document.getElementById('rnicdr').innerHTML,
            grams: document.getElementById('rnicg').innerHTML,
            per: document.getElementById('rnicper').innerHTML
        },
        base: {
            label: 'Base',
            rat: document.getElementById('pvr').innerHTML,
            ml: document.getElementById('totbaseml').innerHTML,
            drops: document.getElementById('totbasedr').innerHTML,
            grams: document.getElementById('totbaseg').innerHTML,
            per: document.getElementById('totbaseper').innerHTML
        },
        pg: {
            label: 'PG',
            ml: document.getElementById('rpgml').innerHTML,
            drops: document.getElementById('rpgdr').innerHTML,
            grams: document.getElementById('rpgg').innerHTML,
            per: document.getElementById('rpgper').innerHTML
        },
        vg: {
            label: 'VG',
            ml: document.getElementById('rvgml').innerHTML,
            drops: document.getElementById('rvgdr').innerHTML,
            grams: document.getElementById('rvgg').innerHTML,
            per: document.getElementById('rvgper').innerHTML
        },
        flavors: {
            flavor: cleanFlavorNames('[id^="rfl"] a'),
            ml: generateFlavorList('[id^="flu"]'),
            drops: generateFlavorList('[id^="fld"]'),
            grams: generateFlavorList('[id^="flg"]'),
            per: generateFlavorList('[id^="flp"]'),
        }
    }
}
