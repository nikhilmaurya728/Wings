    const qaData = [
            {
                id: 1,
                tags: "html, basics, introduction",
                hi: { q: "HTML क्या है?", a: "HTML का पूरा नाम HyperText Markup Language है। यह वेब पेज की संरचना बनाने के लिए उपयोग होता है।" },
                en: { q: "What is HTML?", a: "HTML stands for HyperText Markup Language. It is used to create the structure of web pages." }
            },
            {
                id: 2,
                tags: "html, semantics, tags",
                hi: { q: "Semantic Tag क्या होता है?", a: "ऐसे टैग जो अपने नाम से ही उपयोग का अर्थ बताते हैं, उन्हें Semantic Tag कहते हैं। जैसे <header>, <footer>, <article>।" },
                en: { q: "What is a Semantic Tag?", a: "Tags that clearly describe their meaning in both human- and machine-readable way are semantic tags. Examples: <header>, <footer>, <article>." }
            },
            {
                id: 3,
                tags: "html, selfclosing, tags",
                hi: { q: "Self Closing Tag क्या होता है?", a: "HTML में कुछ टैग ऐसे होते हैं जिन्हें बंद करने की ज़रूरत नहीं होती। इन्हें Self Closing Tag कहते हैं। जैसे <br>, <img>, <input>।" },
                en: { q: "What is a Self Closing Tag?", a: "Some HTML tags don’t require a closing tag. These are self-closing tags. Examples: <br>, <img>, <input>." }
            },
            {
                id: 4,
                tags: "html, headings, text",
                hi: { q: "HTML में कितने heading टैग होते हैं?", a: "HTML में h1 से लेकर h6 तक कुल 6 heading टैग होते हैं।" },
                en: { q: "How many heading tags are there in HTML?", a: "HTML provides six heading tags, from h1 to h6." }
            },
            {
                id: 5,
                tags: "html, links, anchor",
                hi: { q: "HTML में लिंक कैसे बनाते हैं?", a: "लिंक बनाने के लिए <a> टैग का उपयोग किया जाता है।" },
                en: { q: "How do you create a link in HTML?", a: "The <a> tag is used to create a hyperlink in HTML." }
            },
            {
                id: 6,
                tags: "html, images, media",
                hi: { q: "HTML में इमेज कैसे जोड़ते हैं?", a: "इमेज जोड़ने के लिए <img> टैग का उपयोग किया जाता है। इसमें src और alt attribute ज़रूरी होते हैं।" },
                en: { q: "How to add an image in HTML?", a: "Use the <img> tag with 'src' and 'alt' attributes to add an image." }
            },
            {
                id: 7,
                tags: "html, lists, ul, ol",
                hi: { q: "HTML में list कितनी प्रकार की होती हैं?", a: "HTML में 2 प्रकार की lists होती हैं: Ordered list (<ol>) और Unordered list (<ul>)।" },
                en: { q: "What are the types of lists in HTML?", a: "HTML supports two main types of lists: Ordered list (<ol>) and Unordered list (<ul>)." }
            },
            {
                id: 8,
                tags: "html, tables",
                hi: { q: "टेबल बनाने के लिए कौन-सा टैग उपयोग होता है?", a: "टेबल बनाने के लिए <table> टैग का उपयोग होता है, साथ में <tr>, <td>, और <th> का भी उपयोग होता है।" },
                en: { q: "Which tag is used to create tables in HTML?", a: "The <table> tag is used along with <tr>, <td>, and <th> for table creation." }
            },
            {
                id: 9,
                tags: "html, forms, input",
                hi: { q: "HTML में form कैसे बनाते हैं?", a: "Form बनाने के लिए <form> टैग का उपयोग होता है। इसके अंदर input, select, textarea जैसे elements रखे जाते हैं।" },
                en: { q: "How do you create a form in HTML?", a: "Use the <form> tag, containing input, select, and textarea elements to create forms." }
            },
            {
                id: 10,
                tags: "html, attributes",
                hi: { q: "Attribute क्या होता है?", a: "HTML Attribute टैग के बारे में अतिरिक्त जानकारी देता है। जैसे src, href, alt, id, class आदि।" },
                en: { q: "What is an attribute in HTML?", a: "Attributes provide additional information about an element, like src, href, alt, id, class, etc." }
            },
            {
                id: 11,
                tags: "html, doctype, structure",
                hi: { q: "DOCTYPE का उपयोग क्यों किया जाता है?", a: "DOCTYPE ब्राउज़र को बताता है कि यह किस वर्ज़न का HTML डॉक्यूमेंट है।" },
                en: { q: "Why is DOCTYPE used in HTML?", a: "The DOCTYPE declaration tells the browser which version of HTML the document is using." }
            },
              {
                id: 12,
                tags: "html, basics, introduction",
                hi: { q: "HTML क्या है?", a: "HTML का पूरा नाम HyperText Markup Language है। इसका उपयोग वेब पेज बनाने के लिए किया जाता है।" },
                en: { q: "What is HTML?", a: "HTML stands for HyperText Markup Language. It is used to build web pages." }
            },
            {
                id: 13,
                tags: "html, semantic, tags",
                hi: { q: "Semantic Tag क्या होता है?", a: "ऐसे टैग जो अपने नाम से ही उनके उपयोग का अर्थ बताते हैं, उन्हें Semantic Tag कहते हैं। जैसे <header>, <footer>, <article>।" },
                en: { q: "What is a Semantic Tag?", a: "Tags that describe their meaning by their name are called semantic tags. Examples: <header>, <footer>, <article>." }
            },
            {
                id: 14,
                tags: "html, selfclosing, tags",
                hi: { q: "Self Closing Tag क्या होता है?", a: "HTML में कुछ टैग ऐसे होते हैं जिन्हें बंद करने की ज़रूरत नहीं होती। इन्हें Self Closing Tag कहते हैं। जैसे <br>, <img>, <input>।" },
                en: { q: "What is a Self Closing Tag?", a: "Some HTML tags don’t require a closing tag. These are self-closing tags. Examples: <br>, <img>, <input>." }
            },
        ];
