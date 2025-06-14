
import React from 'react';
import type { Metadata } from 'next';
import { Layers, Utensils, Sprout, Building } from 'lucide-react'; // Example icons

export const metadata: Metadata = {
  title: 'R&R Category Expansion Plan',
  description: 'Our vision for expanding R&R reviews beyond restrooms to restaurants, recreation, resorts, and rooms.',
};

interface CategoryCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, icon }) => (
  <div className="bg-card border-2 border-border/20 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 w-full sm:w-64 text-center flex flex-col items-center hover:scale-105">
    {icon && <div className="text-accent mb-3">{React.cloneElement(icon as React.ReactElement, { size: 40 })}</div>}
    <h2 className="text-2xl font-headline text-primary mb-2">{title}</h2>
    <p className="text-sm text-foreground/80 flex-grow">{description}</p>
  </div>
);

export default function CategoryExpansionPage() {
  const categories = [
    {
      title: "Restroom",
      description: "The original throne room. We rate the stalls, the seats, and the supplies.",
      icon: <Layers />,
    },
    {
      title: "Restaurant",
      description: "From meals to mirror-checks, we review the full experience — bathroom included.",
      icon: <Utensils />,
    },
    {
      title: "Recreation",
      description: "Parks, gyms, hiking trails — if there’s a public restroom, we’ve got eyes on it.",
      icon: <Sprout />,
    },
    {
      title: "Resort",
      description: "Spas, hotels, and luxury restrooms that promise peace and porcelain perfection.",
      icon: <Building />,
    },
    {
      title: "Room",
      description: "Private lounges, venue restrooms, and hidden sanctuaries. We review them all.",
      icon: <Layers />, // Replaced with Layers as a placeholder
    },
  ];

  return (
    <div className="py-8 px-4 bg-background text-secondary">
      <h1 className="text-center text-primary text-4xl font-headline mb-10">
        R&R Category Expansion Map
      </h1>
      <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-5xl mx-auto">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-lg font-headline text-accent">
          R&R: We Review What Matters Most — Room by Room.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          (This page outlines future plans and is not yet the live homepage.)
        </p>
      </div>
    </div>
  );
}
