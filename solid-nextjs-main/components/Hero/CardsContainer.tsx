// Import React and CSS
import React from 'react';
 // Don't forget to replace with your actual stylesheet

// Define the Card component
interface CardProps {
  iconUrl: string;
  heading: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ iconUrl, heading, paragraph }) => (
  <div className="card">
    <div className="triangle"></div>
    <div className="card-content">
      <img src={iconUrl} alt="Icon" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      <h1 style={{ fontSize: '24px', margin: '10px 0' }}>{heading}</h1>
      <p>{paragraph}</p>
    </div>
  </div>
);

// Define the CardContainer component
const CardContainer: React.FC = () => (
  <div className="card-container">
    {/* Card 1 */}
    <Card
      iconUrl="your-icon-url-1"
      heading="Heading 1"
      paragraph="Your paragraph text here."
    />

    {/* Card 2 */}
    <Card
      iconUrl="your-icon-url-2"
      heading="Heading 2"
      paragraph="Your paragraph text here."
    />

    {/* Card 3 */}
    <Card
      iconUrl="your-icon-url-3"
      heading="Heading 3"
      paragraph="Your paragraph text here."
    />
  </div>
);

export default CardContainer;
