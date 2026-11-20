export type HobbyLink = {
    href: string,
    label: string
}

export type Hobby = {
    id: number,
    name: string,
    text: string,
    image?: string,
    link?: HobbyLink
}

// Brouillons : ajuste les textes pour qu'ils sonnent comme toi
export const hobbies: Hobby[] = [
    {
        id: 0,
        name: "Chess",
        image: "/photos/hobby-chess.jpg",
        text: "I play regularly on Chess.com. Every game is practice in thinking a few moves ahead — and in owning my mistakes.",
        link: {href: "https://www.chess.com/member/sereibk", label: "Challenge me on Chess.com"}
    },
    {
        id: 1,
        name: "Boxing & gym",
        image: "/photos/hobby-boxing.jpg",
        text: "Boxing keeps me sharp and humble; the gym keeps me consistent. Showing up on the days I don't feel like it is the habit I'm proudest of."
    },
    {
        id: 2,
        name: "Sourdough, pizza & cooking",
        image: "/photos/pizza.jpg",
        text: "I bake sourdough and pizza from scratch and love cooking for people. Fermentation can't be rushed — it taught me patience and to change one variable at a time."
    },
    {
        id: 3,
        name: "My cats",
        image: "/photos/cats.jpg",
        text: "My favourite coworkers. Strict on deadlines (dinner), generous with unsolicited keyboard contributions."
    },
    {
        id: 4,
        name: "Riftbound TCG",
        image: "/photos/hobby-riftbound.jpg",
        text: "I play Riftbound, the League of Legends trading card game. Deckbuilding is optimization under constraints — I love tuning a list until it clicks."
    }
]
