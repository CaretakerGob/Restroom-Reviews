'use client';

import { useState, type FC } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  count?: number;
  initialValue?: number;
  onChange?: (rating: number) => void;
  size?: number;
  readonly?: boolean;
  className?: string;
}

const StarRating: FC<StarRatingProps> = ({
  count = 5,
  initialValue = 0,
  onChange,
  size = 24,
  readonly = false,
  className,
}) => {
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
  const [currentValue, setCurrentValue] = useState(initialValue);

  const handleClick = (value: number) => {
    if (readonly) return;
    setCurrentValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const handleMouseOver = (value: number) => {
    if (readonly) return;
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverValue(undefined);
  };

  return (
    <div className={cn("flex space-x-1", className)} role="radiogroup" aria-label="Star rating">
      {Array.from({ length: count }, (_, index) => {
        const starValue = index + 1;
        const filled = (hoverValue || currentValue) >= starValue;
        return (
          <button
            key={index}
            type="button"
            role="radio"
            aria-checked={currentValue === starValue}
            aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
            onClick={() => handleClick(starValue)}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "cursor-pointer transition-colors",
              readonly && "cursor-default"
            )}
            disabled={readonly}
          >
            <Star
              size={size}
              className={cn(
                filled ? 'text-accent fill-accent' : 'text-muted-foreground/50',
              )}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
