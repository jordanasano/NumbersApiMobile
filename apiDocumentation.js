const documentation = `## Usage Examples

## Query Parameter Options

### Fragment

Return the fact as a sentence fragment that can be easily included as part of a larger sentence.This means that the first word is lowercase and ending punctuation is omitted.For trivia and math, a noun phrase is returned that can be used in a sentence like "We now have more users than [fact as fragment]!".


http://numbersapi.com/23/trivia?fragment
; the number of times Julius Caesar was stabbed

http://numbersapi.com/1969/year?fragment
; an estimated 500 million people worldwide watch Neil Armstrong take his historic first steps on the Moon


### Notfound

The 'notfound' field tells us what to do if the number is not found.You can give us:

- 'default' to return one of our pre - written missing messages, or a message you supply with the['default'](#default) query field.This is the default behaviour.
   http://numbersapi.com/314159265358979
  ; 314159265358979 is a boring number.
    - 'floor' to round down to the largest number that does have an associated fact, and return that fact.
   http://numbersapi.com/35353?notfound=floor
  ; 35000 is the number of genes in a human being.
    - 'ceil', which is like 'floor' but rounds up to the smallest number that has an associated fact.
   http://numbersapi.com/-12344/year?notfound=ceil
  ; 98 BC is the year that the Senate passes the Lex Caecilia Didia which bans omnibus bills.

    Combine with the[fragment](#fragment) option to produce interesting facts about, for example, [the number of page shares](#visitors).

### Default

The value of the 'default' query field tells us what to return if we don't have a fact for the requested number.

    
    http://numbersapi.com/1234567890987654321/year?default=Boring+number+is+boring.
; Boring number is boring.


    See the[HTML embed tag usage example](#single - script - tag).

### Min and Max

Restrict the range of values returned to the inclusive range \[** 'min' **, ** 'max' **\] when 'random' is given as the number.


    http://numbersapi.com/random?min=10&max=20
13 is the number of provinces and territories in Canada.


### JSON

Include the query parameter'json', or set the HTTP header 'Content-Type' to'application/json', or set the HTTP header 'Accept' to 'application/json' to return the fact and associated meta - data as a JSON object, with the properties:

- 'text': A string of the fact text itself.
- 'found': Boolean of whether there was a fact for the requested number.
- 'number': The floating - point number that the fact pertains to.This may be useful for, eg.a'/random' request or'notfound=floor'.For a date fact, this is the 1 - indexed day of a leap year(eg. 61 would be March 1st).
- 'type': String of the category of the returned fact.
- 'date'(sometimes): A day of year associated with some year facts, as a string.
- 'year'(sometimes): A year associated with some date facts, as a string.


    http://numbersapi.com/random/year?json
 {
    "text": "2012 is the year that the century's second and last solar transit of Venus occurs on June 6.",
        "found": true,
            "number": 2012,
                "type": "year",
                    "date": "June 6"
}


    ## Batch Requests

To get facts about multiple numbers in one request, specify ranges for <code><strong>number</strong></code> in <code>http://numbersapi.com/<strong>number</strong>/<strong>type</strong></code>.

A number range(inclusive) is specified as <code><strong>min</strong >..< strong > max</strong ></code >.Separate multiple ranges and individual numbers with ','(a comma).

The response format will always be a JSON map from numbers to facts, of at most 100 numbers.The query parameter['json'](/#json) may still be used to specify whether individual facts will be returned as string literals or JSON objects.

        
        http://numbersapi.com/1..3,10
; {
    "1": "1 is the number of dimensions of a line.",
        "2": "2 is the number of polynucleotide strands in a DNA double helix.",
            "3": "3 is the number of sets needed to be won to win the whole match in volleyball.",
                "10": "10 is the highest score possible in Olympics gymnastics competitions."
}


    ## Deprecated Features

### Callback

To use[JSONP](http://en.wikipedia.org/wiki/JSONP), pass to the 'callback' query the name of the JavaScript function to be invoked. The response will be that function called on the fact text as a string literal.

        
            http://numbersapi.com/42/math?callback=showNumber
             showNumber("42 is the 5th Catalan number.");
        </pre>

See the[JSONP usage example](#jsonp).

### JSONP

...is supported with the query field['callback'](#callback):

    <span id="number-fact"></span>

    <script>
        function showNumber(str) {
            document.getElementById('number-fact').innerText = str;
        }

        (function() {
            var scriptTag = document.createElement('script');
            scriptTag.async = true;
            scriptTag.src = "http://numbersapi.com/42/math?callback=showNumber";
            document.body.appendChild(scriptTag);
        })();
    </script>

Live demo on[JSFiddle](http://jsfiddle.net/divad12/4A6Pw/).

### Write

We do not recommend using 'document.write()' because of possible < a href = "https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html#example-dangerous-html-methods" > cross - site scripting attacks</a >.

Returns the text response wrapped in a call to['document.write()'](https://developer.mozilla.org/en/document.write). Note that using this query parameter is equivalent to and just a shorthand of '?callback=document.write'.


http://numbersapi.com/42/math?write
 document.write("42 is the 5th Catalan number.");


<h3 id="single-script-tag">HTML Embed</h3>

Add'write' to your query string to have the response text wrapped in 'document.write()'.Now you can stick just a single'<script>' directly where the fact should go.

    Did you know 2012 is the year that < script src = "http://numbersapi.com/2012/year?write&fragment" ></script >?

            Note that this may < a href = "http://developer.yahoo.com/performance/rules.html#js_bottom" > degrade page load speed</a >.Live demo on[JSFiddle](http://jsfiddle.net/divad12/vd58j/).
`

export default documentation;