export type CardProps = {
    title: string;
    description: string;
    image: string;
    buttonText: string;
}

function Card({ title, description, image, buttonText }: CardProps) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt={title} />
            <button>{buttonText}</button>
        </div>
    );
}

export default Card;

// Skapa ett test för funktionen Card i Card.test.ts
    // kontrollerar att komponenten rendreras korrekt
    // kontrollerar att komponenten har rätt props  
        // kontrollerar att komponenten har rätt text
        // kontrollerar att komponenten har rätt bild (hämta exempelvis från https://picsum.photos/200/300)
        // kontrollerar att komponenten har rätt alt text på bilden
        // kontrollerar att komponenten har rätt text på knappen
