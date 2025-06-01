
const pronouns = ['the', 'our'];
const adjectives = ['great', 'big'];
const nouns = ['jogger', 'racoon'];


function generateDomainsConsole() {
    
    let domainString;

    for (let pronoun = 0; pronoun < pronouns.length; pronoun++) {
        
        for (let adj = 0; adj < adjectives.length; adj++) {

            for (let noun = 0; noun < nouns.length; noun++) {

                // domainString += `www.${pronouns[pronoun]}${adjectives[adj]}${nouns[noun]}.com\n`;

                console.log(`www.${pronouns[pronoun]}${adjectives[adj]}${nouns[noun]}.com`);
                // console.log(domainString);
            }
        }  
    }
}




