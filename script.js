
const pronouns = ['the', 'our'];
const adjectives = ['great', 'big'];
const nouns = ['jogger', 'racoon'];


function generateDomainsConsole() {
    
    for (let pronoun = 0; pronoun < pronouns.length; pronoun++) {
        
        for (let adj = 0; adj < adjectives.length; adj++) {

            for (let noun = 0; noun < nouns.length; noun++) {

                console.log(`www.${pronouns[pronoun]}${adjectives[adj]}${nouns[noun]}.com`);
            }
        }  
    }

    console.log("---------------------");
}


function generateDomainsHTML() {

    let domainString = "";

    let domainElement = document.getElementById(`domains`);
    
    for (let pronoun = 0; pronoun < pronouns.length; pronoun++) {
        
        for (let adj = 0; adj < adjectives.length; adj++) {

            for (let noun = 0; noun < nouns.length; noun++) {

                domainString += "www." + pronouns[pronoun] + adjectives[adj] + nouns[noun] + ".com<br>";
                
            }
        }  
    }

    domainElement.innerHTML = domainString;
}




/////// DIFFERENT WAY OF WRITING THE CODE

//// THIS WAY:
// let completeDomainList = document.querySelector('#domains');
// completeDomainList.innerHTML = generateDomains();

//// OR THIS WAY (incorrect):
// document.querySelector('#domains').innerHTML = generateDomains();
