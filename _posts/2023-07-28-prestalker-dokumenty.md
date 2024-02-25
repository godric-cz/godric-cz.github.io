---
layout: post
title: "Jak fungují dokumenty v Prestalkerovi"
---

_Před časem jsem s Allemis, Zuzkou Šubrtovou a Vikkim napsal sci-fi larp Prestalker. Před prvním alfatestem jsem ho celkem výrazně rozepsal a upravil a než ho budu znovu uvádět, chci si trochu zrekapitulovat, jak to celé funguje._

Článek je čistě praktický, o problémech a technických nástrojích při psaní textu postav, a v druhé půlce trochu o zamyšlení nad spoluautorstvím a zveřejňováním her (nejenom) na Githubu.

## Věci co patří k sobě na jednom místě

Prestalker je zatím největší komorák, co jsem dělal (kolem 200&thinsp;000 znaků). Ze začátku jsem psal každou postavu do samostatného dokumentu a rekvizity si zapisoval bokem. Poměrně rychle jsem ale ztratit přehled, odkud se která rekvizita vzala a kde najít detaily, jak se používá.

Dělalo to problémy hlavně, když jsem něco měnil – třeba přepisoval jednu scénu, ale zapomněl zkontrolovat a smazat staré rekvizity. Dohledávat to potom zpětně působilo hromadu problémů, především to v podstatě nešlo udělat stoprocentně bez chyb.

Podobně když jsem psal postavy, často jsem si potřeboval dělat rychle poznámky, že by se tam nebo tady hodila nějaká rekvizita, ale kvůli přepínání mezi několika dokumenty jsem často ztrácel nit. Bylo by pro mě tím pádem pohodlnější, kdyby text postavy i související rekvizity (a třeba požadavky na prostor) mohly být na jednom místě a nějak se rozdělily až později.

Zkusil jsem rekvizity psát jako odlišně formátované poznámky přímo do postav (na místo, kde se řeší) a zpracovávat je automaticky.

![](/content/prestalker/2023-09-04_21-34.png)

Při exportování do PDF takové poznámky z textu vypadnou a nashromáždí se do speciálního samostatného dokumentu, který slouží čistě jako seznam rekvizit.

Pro různé situace se pak dají použít různé vygenerované dokumenty: Pro psaní a upravování původní text včetně poznámek, pro hráče vytištěné PDF a pro přípravu na místě  vytištěný seznam rekvizit, ze kterého se dá odškrtávat.

### Další použití poznámek

Krom rekvizit se poznámky hodí i na obecné produkční informace, například ve scéně 4 jsem si poznačil: "Je potřeba 2 zvukově oddělené místnosti." Po vyexportování se sejdou všechny požadavky na jednom místě. Zároveň ale můžu dohledat, odkud se vzaly, a podívat se na detaily.

A ještě další použití jsou designové poznámky. Kromě instrukce nebo informace pro hráče můžu do textu napsat, _proč_ tam ta informace je a co se tím autor snaží dosáhnout. Dá se to využít i k poznámce, že se chci k něčemu vrátit (pokud to nemám v danou chvíli čas dodělat), případně že potřebuju sledovat, jak daná věc bude fungovat v betatestu a podobně.

> Obecně mi přijde škoda, že se málo textů her zveřejňuje. Pokud by se zveřejňovaly, dalo by se z toho hromada věcí navzájem naučit, a designové komentáře by takové čtení dělaly zajímavějším. Třeba pro hráče, kterým se hra líbila, a chtějí se o ní dozvědět víc. Nebo třeba pro RPG komunitu, která obecně designové věci ráda čte, ale pro větší propojení s larpy jí zatím chybí snížený vstupní práh a motivace.

Pro úplnost, poznámky co se _netýkají_ rekvizit se při exportu nikam neshromažďují.

## Rozkopírované věci na jednom místě

Druhý problém byly texty společné pro všechny postavy, tj. různé rozkopírované úvody scén a podobně. Psát každý text X krát ručně do každého dokumentu jsem nechtěl, protože bych snadno zapomněl nějakou starou verzi v některém dokumentu.

Místo toho jsem do textu dával `(vložit: úvod scéna 2.txt)`, což se při exportu do PDF nahradí textem z daného dokumentu.

> Místo vkládání souboru by šlo vkládat např. vybranou část souboru pod určitým nadpisem nebo konkrétní buňku z nějaké tabulky. Technikálie k tomu později.

Pokud bych chtěl něco společného vložit, ale _trošičku_ to změnit, obvyklý trik je rozdělit vkládaný text na dvě části a změnu dát mezi ně. Případně nechat společný text obecnější, abych speciální detail pro danou postavu mohl dopsat až za něj do samostatného odstavce.

```asciiart
                    A
  aaaaaaaaa  ◄────  aaaaaaaaaa
aaaaaaaaaaa         aaaaaaaaaa
aaaaxxxxxxx         aa
xxxxxxxxxxx
xxxxxxxxbbb         B
bbbbbbbbb    ◄────  bbbbbbbbbb
                    bbb
```

Podobné speciální texty používám na víc věcí, například `(titulka: Z4981)` na vytvoření velkého čísla na titulní stranu nebo `(konec stránky)` na zalomení.

![](/content/prestalker/2023-09-04_21-50.png)

Občas jsem taky u společných textů potřeboval použít specifický tvar slova podle pohlaví postavy, např. `bys chtěl/a` a podobně. Mít to napsáno s lomítkem ve všech postavách by působilo divně.

Tady se ukázalo, že automatizovaně nahradit `/a` za `a` nebo nic, podle konkrétní postavy, stačí pro všechny případy, které jsem potřeboval.

### Slučování dokumentů

Ironií osudu jsem si při psaní dokumentů říkal: "Nebudu to později nikdy nikomu vysvětlovat, takže to můžu udělat libovolně složitě. Hlavně aby se mi s tím dobře pracovalo." Takže jsem to udělal složitě, naštěstí ale ne tolik.

Všechny postavy mají jasnou strukturu: Nadpis "1. scéna", nějaký text, podnadpisy "Začátek", "Během scény", atd...

Díky tomu šlo udělat dva dokumenty, např. `alexandra.txt` a `společné.txt` a potom je "sešít". Tj. vzít text pod nadpisem "1. scéna" z obou dokumentů, dát za sebe a vložit do výsledného PDF, vzít text pod podnadpisem "Začátek" z obou dokumentů a vložit, atd... Většina generování textu pak už mohla fungovat automaticky a ruční vkládání textů pomocí `(vložit: )`  bylo potřeba minimálně.

I v tomto případě jde o automatické zpracování textu, které se děje při exportu do PDF.

```asciiart
 společné.txt        výsledek            alexandra.txt

┌──────────┐        ┌──────────┐        ┌──────────┐
│ XXX      │        │ XXX      │        │ XXX      │
│ aaaaaaaa ├───────►│ aaaaaaaa │     ┌──┤ bbbbbbbb │
│ aaa      │        │ aaabbbbb │◄────┘  │          │
│          │        │ bbb      │        │ YYY      │
│ YYY      ├──┐     │          │     ┌──┤ dddddddd │
│ cccccccc │  │     │ YYY      │     │  │ dd       │
│ cc       │  └────►│ cccccccc │     │  │          │
│          │        │ ccdddddd │◄────┘  └──────────┘
└──────────┘        │ dddddddd │
                    │          │
                    └──────────┘
 ```

Je to technicky složitější varianta, která může být i časem omezující, ale pro silně strukturovaný text typu Prestalkera to fungovalo dobře.

## Chyták

Tím jsem myslím popsal všechny divno-postupy, co jsem zkoušel. Zbývá pochopitelná otázka: Mělo to nějaký smysl?

Když přeskočím asi osm mentálních kroků a začnu od konce, nejlepší odpověď co umím je: "Pro člověka, co používá Windows, nejspíš ne." Pokud člověk používá MacOS nebo Linux a zajímá se o tvorbu her, programování, nebo datovou analytiku, potom je to složitější.

V první řadě to musí člověka bavit samo o sobě, v druhé řadě být aspoň trochu v souladu s tím, jak je zvyklý normálně pracovat s počítačem (mimo larpy) a nakonec to má několik specifických podotázek, na které je lepší se podívat jednotlivě.

### Plaintext

Mělo nějaký smysl psát texty ve formátu `.txt` respektive `.md`? Osobně jsem fanoušek oddělení práce na formě a na obsahu. Uvítal jsem, když jsem během psaní viděl jenom neformátovaný text a až během designu PDFek řešil věci jako velikosti nadpisů, okraje a fonty.

Možnost měnit všechno formátování na jednom místě umí i textový editor, byť takto mám ještě trochu lepší kontrolu nad výsledkem. Dá se hromadně měnit i celé rozložení textu, formát stránek a podobně.

Na druhou stranu psaní v čistém textu má svoje specifika. Pokud to člověk nedělá denně, snadno přehlédne něco jako chybějící odsazení a bude pak půl hodiny řešit, proč dokument nevypadá, jak má.

> Zjevně každá technologie má svůj ekvivalent MS Wordu "Posunul jsem jeden obrázek o 5&thinsp;mm a celý text se změnil na rozsypaný čaj".

Nutnost nakonec texty vyexportovat, abych dostal PDF, hodnotím neutrálně. To bych dělal i ve Wordu nebo Google Docs, jen klikáním na jiné tlačítko.

### Git

Mělo nějaký smysl používat `git` na ukládání historie dokumentů?

Sám jsem zvyklý na styl práce, kdy rozpracuju jednu změnu (třeba přidání scény) zasahující do více dokumentů, pak si to po sobě přečtu, a teprve nakonec, až to celé má hlavu a patu, tu změnu _commitnu_ (uložím jako verzi hry).

Odvykl jsem tomu, že něco rozepíšu, jdu třeba na oběd, a po obědě si musím vzpomenout, kde jsem skončil a co mi ještě chybí dodělat (pokud nechci riskovat, že danou věc zapomenu úplně, a objeví se to až při betatestu).

Možnost si zobrazovat, co kde mám právě rozepsané a případně to upravovat a vracet, je pro mě důležitá. Což je právě to, co `git` dělá. Zároveň je ale složité ho používat a občas s tím zápasí i programátoři, pro které je to primární pracování nástroj. Chtít to netechnickém člověku je v podstatě mimo realitu.

Takže upřímně nevím. Nejlepší kompromis, co jsem zatím viděl, je tlačítko "editovat" v Githubu. Ale i v takovém případě to dá netechnickému člověku hromadu komplikací a minimum benefitů.

![](/content/prestalker/github.png)

Znova bych to zkoušel nejspíš jenom, pokud by aspoň polovina týmu byla techničtějšího ražení. Ale úplně bezpečné mi to přijde v podstatě jenom, pokud jsou techničtí všichni, nebo pokud píšu hru sám.

### Github a sdílení

Mělo nějaký smysl používat Github na zálohování a sdílení?

Jednoznačně pozitivní je, že Github rovná se [všechno je veřejně](https://github.com/godric-cz/prestalker). Když Github začínal, podařilo se mu v programování posunout myšlení z "kutím si něco do šuplíku" na "kutím si něco, ale je to ke čtení pro všechny". Díky tomu hromada lidí získala možnost se učit a inspirovat od ostatních.

Zkušenější autoři naopak získali určitý kredit a začali si tvořit "portfolia", trochu jako tvůrci na Deviantartu a podobných webech ve svojí době.

Každý projekt získal svoji domovskou stránku, kde byly všechny soubory k prohlédnutí a stažení. Bylo na ní i vyhrazené místo pro představení projektu a vysvětlení, jak se do něj zapojit. Autor ho samozřejmě mohl nechat prázdné, ale zároveň ho to motivovalo tam "aspoň něco" napsat. Pomocí tohoto a podobných triků Github motivoval autory, aby svoje projekty dělali užitečnější a přístupnější i pro ostatní.

A v neposlední řadě se tak všechny projekty archivovaly. To bych u larpů zvlášť ocenil, protože narozdíl od Dropboxů a Google Drivů téměř nejde projekt z Githubu omylem smazat. I pokud autor zmizel z povrchu Země nebo mu shořel počítač, projekt zůstal veřejně k dispozici.

Druhá vlastnost Githubu je sdílení. Do každého projektu může kdokoli poslat návrh změn. Správce ty návrhy může rovnou přijmout, nebo spolupracovat s autorem na jejich doladění, a po závěrečném přijetí změn se na Githubu eviduje společné autorství.

U programování i toto byla důležitá kulturní změna. Dnes většina firem funguje i interně tak, že jakoukoli změnu jeden člověk udělá, jiný kolega / kolegové ji musí aktivně zkontrolovat a schválit, než se taková změna zveřejní. Naučit se dávat a přijímat takto na přímo zpětnou vazbu pro programátory rozhodně nebylo jednoduché, ale myslím, že to všechny lidsky i technicky hodně posunulo.

A funguje to tak i u veřejných projektů. Jakmile začaly zajímavé projekty být veřejně dostupné, lidé se naučili posílat opravy a vylepšení i do cizích projektů. Buď proto, že je sami využívají, nebo proto, že je prostě jenom z nějakého důvodu mají rádi.

Šlo by to u larpů? Občas slýchám o tvůrčích rozporech v různých týmech, a to i v situacích, kdy mají jednotliví autoři nad "svými postavami" v podstatě volnou ruku. Číst a připomínkovat si texty navzájem by v takovém týmu asi vztahy rychle vyeskalovalo. Naučili jsme se to ale zvládat v náhodně složených týmech na larpworkshopu a předpokládám, že by to nakonec nějak šlo i tady. Stejně jako v tom programování je tam velký potenciál se díky jiným pohledům na věc učit a osobně posouvat. Nejen z hlediska získané zpětné vazby, ale i ve schopnosti dobrou zpětnou vazbu dávat.

Přínos pro hru jako takovou by byl spíš druhotný. Asi bychom dělali míň chyb a části textu od různých autorů by líp ladily k sobě, ale zase by všechno trvalo dýl.

Přispívání do úplně cizích projektů spíš není něco, co by ve světě larpů fungovalo. Kdybych čistě vzal to, jak to funguje u softwaru a převedl do larpového světa, fiktivní varianta by vypadala nějak tak:

> Zahrál jsem si hru, jeden spoluhráč mě ale zazdil. Hra byla jinak super, uvažuju ji sám pro kamarády uvést. Mrknu se na texty a vidím, že ten spoluhráč má strašně nejasný text, jak měl tu linku hrát. Rovnou to upravím. Původní autor úpravu potvrdí, mě to přidá jako spoluautora.

To má ale hromadu skrytých předpokladů: Že je běžné nejenom hry zveřejňovat, ale i nechat uvádět nezávisle na autorovi. Že to [vůbec někdo chce dělat](https://gamecon.cz/blog/kde-vzit-larp). Že hráč je mnohem víc spoluorganizátorem a spoluautorem hry (což mu krom pravomocí přidává i hromadu povinností a staví ho do pozice "dodělej si sám") a naopak původní autor nemá k vlastnímu textu tak srdcový vztah a je v pohodě s myšlenkou, že ho někdo upravuje.

Určitě by to nebylo pro každou hru, navíc v mnoha ohledech v rozporu se [současnou komorákovou tradicí](https://www.larpy.cz/manifest-obsahoveho-larpu/). A kvůli větší odpovědnosti hráče je to i částečně proti sníženému vstupnímu prahu, za který jsem loboval výš. Takže to považuju spíš za zajímavý myšlenkový experiment, než než něco, co by se dalo realizovat.

Byť čistě technicky vzato tomu [nic nebrání](https://github.com/godric-cz/vystup-na-ouranos/pull/1).

## So what

Dala by se zmínit ještě uložená historie projektu a psaní v dvou krocích pomocí [přípravných dokumentů](https://github.com/godric-cz/prestalker/tree/master/design), ale to už je trochu jiné téma. Co dál?

![Historie práce na Prestalkerovi (datum / počet znaků)](/content/prestalker/graf2.png)

Pokud bude zas někdy larpworkshop a budu na něm něco psát, budu se snažit to dál zveřejňovat, stejně jako [Výstup na Ouranos](https://github.com/godric-cz/vystup-na-ouranos) a [Prestalkera](https://github.com/godric-cz/prestalker) do teď. Pokud jste něco z toho hráli a máte nápad na vylepšení, pošlete pull request :)

Pokud bude v kondici larpová linie na Gameconu (nebo se dokonce budou hrát komoráky jinde), zkusím na Github dostat i vygenerovaná PDFka, ať je k dispozici doopravdy všechno po hromadě. Plus na larpovou databázi doplnit odkazy, kde hru najít.

Rád bych časem oprášil i prastarý Plukovníkův odkaz, byť ten už by si vyžádal o dost víc práce.

A kdybych kohokoli motivoval, aby nějakou doteď uzavřenou hru zveřejnil, bylo by to super. I kdyby jen doplněním larpové databáze o odkaz na Dropbox nebo Google Drive.
