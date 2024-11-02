function greet(languageCode) {
    switch (languageCode) {
        case 'en':
            console.log("Hello");
            break;
        case 'fr':
            console.log("Bonjour");
            break;
        case 'es':
            console.log("Hola");
            break;
        case 'de':
            console.log("Guten Tag");
            break;
        case 'it':
            console.log("Ciao");
            break;
        case 'jp':
            console.log("こんにちは (Konnichiwa)");
            break;
        case 'zh':
            console.log("你好 (Nǐ hǎo)");
            break;
        default:
            console.log("Language not supported");
    }
}

greet('en'); // Hello
greet('fr'); // Bonjour
greet('es'); // Hola
greet('de'); // Guten Tag
greet('it'); // Ciao
greet('jp'); // こんにちは (Konnichiwa)
greet('zh'); // 你好 (Nǐ hǎo)
greet('ru'); // Language not supported
