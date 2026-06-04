import React from 'react';
import { 
  Scissors, 
  Briefcase, 
  Leaf, 
  FlaskConical, 
  Coffee, 
  Tractor, 
  Snowflake, 
  Home,
  Factory
} from 'lucide-react';

interface GeometricIconProps {
  category: string;
  className?: string;
}

export function GeometricIcon({ category, className = '' }: GeometricIconProps) {
  const normalizedCategory = category.toLowerCase();

  const getIconData = () => {
    switch (normalizedCategory) {
      case 'textiles':
        return { Icon: Scissors, Shape: 'diamond', color: 'text-sundarban-green' };
      case 'leather':
        return { Icon: Briefcase, Shape: 'hexagon', color: 'text-jute-gold' };
      case 'jute':
        return { Icon: Leaf, Shape: 'square', color: 'text-jute-gold' };
      case 'pharma':
        return { Icon: FlaskConical, Shape: 'diamond', color: 'text-sundarban-green/80' };
      case 'ceramics':
        return { Icon: Coffee, Shape: 'hexagon', color: 'text-sundarban-green/60' };
      case 'agro':
        return { Icon: Tractor, Shape: 'square', color: 'text-sundarban-green' };
      case 'frozen':
        return { Icon: Snowflake, Shape: 'diamond', color: 'text-sundarban-green/70' };
      case 'home-textiles':
        return { Icon: Home, Shape: 'hexagon', color: 'text-jute-gold' };
      default:
        return { Icon: Factory, Shape: 'square', color: 'text-sundarban-green/50' };
    }
  };

  const { Icon, Shape, color } = getIconData();

  if (Shape === 'diamond') {
    return (
      <div className={`relative flex items-center justify-center w-12 h-12 border border-sundarban-green/10 bg-[#FDFDFB] rotate-45 shadow-[0_1px_3px_rgba(10,54,34,0.04)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-16px_rgba(10,54,34,0.08)] hover:border-jute-gold/30 ${className}`}>
        <div className="-rotate-45 flex items-center justify-center">
          <Icon className={`w-5 h-5 ${color} stroke-[1.5px]`} />
        </div>
      </div>
    );
  }

  if (Shape === 'hexagon') {
    return (
      <div 
        className={`group relative flex items-center justify-center w-12 h-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${className}`}
        style={{ filter: 'drop-shadow(0 1px 3px rgba(10,54,34,0.04))' }}
      >
        <div 
          className="absolute inset-0 bg-sundarban-green/10 transition-colors duration-700 group-hover:bg-jute-gold/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        <div 
          className="absolute inset-[1px] bg-[#FDFDFB] flex items-center justify-center" 
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        >
          <Icon className={`w-5 h-5 ${color} stroke-[1.5px]`} />
        </div>
      </div>
    );
  }

  // square
  return (
    <div className={`relative flex items-center justify-center w-12 h-12 border border-sundarban-green/10 bg-[#FDFDFB] shadow-[0_1px_3px_rgba(10,54,34,0.04)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-16px_rgba(10,54,34,0.08)] hover:border-jute-gold/30 ${className}`}>
      <Icon className={`w-5 h-5 ${color} stroke-[1.5px]`} />
    </div>
  );
}
