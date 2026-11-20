export type Photo = {
    id: number,
    alt: string,
    src?: string
}

// Les 4 premières apparaissent aussi dans le Glimpse de la page About
export const photoList: Photo[] = [
    {id: 0, alt: "My cat lounging on the bed", src: "/photos/cats.jpg"},
    {id: 1, alt: "Homemade pepperoni pizza fresh out of the oven", src: "/photos/pizza.jpg"},
    {id: 2, alt: "A sourdough loaf I baked", src: "/photos/sourdough.jpg"},
    {id: 3, alt: "Me at a Korean barbecue restaurant", src: "/photos/eatingOut0.jpg"},
    {id: 4, alt: "Homemade birria tacos with consommé", src: "/photos/myFood3.jpg"},
    {id: 5, alt: "Mussels and fries I cooked", src: "/photos/myFood2.jpg"},
    {id: 6, alt: "Breakfast I made: scrambled eggs, sausages, tomatoes and sourdough toast", src: "/photos/myFood1.jpg"},
    {id: 7, alt: "Japanese set with sashimi, tempura and udon", src: "/photos/eatingOut2.jpg"},
    {id: 8, alt: "Strawberry bingsu", src: "/photos/eatingOut1.jpg"}
]
