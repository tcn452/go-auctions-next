import { FaCar } from 'react-icons/fa';

interface IconCardProps {
  icon?: React.ComponentType;
  title?: string;
  description?: string;
}

const DefaultIcon = FaCar; // Set a default icon

const IconCard: React.FC<IconCardProps> = ({
  icon: Icon = DefaultIcon,
  title = "Default Title",
  description = "Default description."
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-center justify-center mb-4">
      <Icon size={40} className="text-green-800" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default IconCard;
