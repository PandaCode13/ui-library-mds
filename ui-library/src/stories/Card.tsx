import './Card.css';

export interface CardProps {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export interface CardItem extends CardProps {
  id: string;
}

const sampleCards: CardItem[] = [
  {
    id: 'card-1',
    title: 'Card Title 1',
    author: 'Author 1',
    description: 'This is a description for the first card.',
    imageUrl: 'https://placehold.co/600x360/e2e8f0/334155?text=Card+1',
    linkUrl: '/card1',
  },
  {
    id: 'card-2',
    title: 'Card Title 2',
    author: 'Author 2',
    description: 'This is a description for the second card.',
    imageUrl: 'https://placehold.co/600x360/dbeafe/1e3a8a?text=Card+2',
    linkUrl: '/card2',
  },
  {
    id: 'card-3',
    title: 'Card Title 3',
    author: 'Author 3',
    description: 'This is a description for the third card.',
    imageUrl: 'https://placehold.co/600x360/fce7f3/831843?text=Card+3',
    linkUrl: '/card3',
  },
];

export function CardList({ cards }: { cards: CardItem[] }) {
  return (
    <div className="card-grid">
      {cards.map(({ id, ...card }) => (
        <Card key={id} {...card} />
      ))}
    </div>
  );
}

export function CardGallery() {
  return <CardList cards={sampleCards} />;
}

export function Card({
  title,
  author,
  description,
  imageUrl,
  linkUrl,
}: CardProps) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-author">By {author}</p>
        <p className="card-description">{description}</p>
        <a href={linkUrl} className="card-link">
          Read more
        </a>
      </div>
    </div>
  );
}