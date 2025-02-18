const quotes = [
    {
        quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
        quoteKr:
            "프로그램은 사람이 읽을 수 있도록 작성되어야 하며, 기계가 실행하는 것은 부차적인 일이다.",
        author: "Harold Abelson",
    },
    {
        quote: "Simplicity is the soul of efficiency.",
        quoteKr: "단순함은 효율성의 핵심이다.",
        author: "Austin Freeman",
    },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        quoteKr:
            "아무리 바보라도 컴퓨터가 이해할 수 있는 코드를 작성할 수 있다. 하지만 좋은 프로그래머는 사람이 이해할 수 있는 코드를 작성한다.",
        author: "Martin Fowler",
    },
    {
        quote: "Premature optimization is the root of all evil.",
        quoteKr: "이른 최적화는 모든 악의 근원이다.",
        author: "Donald Knuth",
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        quoteKr: "먼저 문제를 해결하라. 그리고 나서 코드를 작성하라.",
        author: "John Johnson",
    },
    {
        quote: "A language that doesn’t affect the way you think about programming is not worth knowing.",
        quoteKr:
            "프로그래밍에 대한 사고방식에 영향을 주지 않는 언어는 배울 가치가 없다.",
        author: "Alan Perlis",
    },
    {
        quote: "Make it work, make it right, make it fast.",
        quoteKr:
            "일단 작동하게 만들고, 올바르게 만들고, 그다음에 빠르게 만들어라.",
        author: "Kent Beck",
    },
    {
        quote: "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the second law of thermodynamics; i.e., it always increases.",
        quoteKr:
            "소프트웨어는 엔트로피와 같다. 이해하기 어렵고, 무게가 없으며, 열역학 제2법칙을 따른다. 즉, 항상 증가한다.",
        author: "Norman Augustine",
    },
    {
        quote: "Before software can be reusable, it first has to be usable.",
        quoteKr: "소프트웨어가 재사용 가능해지려면, 먼저 사용 가능해야 한다.",
        author: "Ralph Johnson",
    },
    {
        quote: "The best way to predict the future is to invent it.",
        quoteKr: "미래를 예측하는 가장 좋은 방법은 그것을 발명하는 것이다.",
        author: "Alan Kay",
    },
];

const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");
const quoteKR = document.querySelector("#quote span:nth-child(3)");

const randomNum = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[randomNum].quote;
author.innerText = quotes[randomNum].quoteKr;
quoteKR.innerText = quotes[randomNum].author;
