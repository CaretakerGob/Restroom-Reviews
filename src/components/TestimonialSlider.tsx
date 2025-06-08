
'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  avatarPlaceholder: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      "I never thought I'd love a bathroom review site... and yet here we are. This app is a lifesaver!",
    author: 'A Real Human',
    avatarPlaceholder: 'RH',
  },
  {
    id: '2',
    quote:
      'Finding a clean restroom used to be a gamble. Now, thanks to Restroom Reviews, I always know where to go!',
    author: 'Frequent Traveler',
    avatarPlaceholder: 'FT',
  },
  {
    id: '3',
    quote:
      "The 'Clean It Up' nomination feature is brilliant. I've already seen improvements in my local area.",
    author: 'Community Advocate',
    avatarPlaceholder: 'CA',
  },
  {
    id: '4',
    quote:
      'Finally, a platform that takes public restrooms seriously. The AI summaries are a great touch!',
    author: 'Tech Enthusiast',
    avatarPlaceholder: 'TE',
  },
];

export default function TestimonialSlider() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-xl"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/1">
            <div className="p-1">
              <Card className="shadow-md border-border/70">
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 aspect-video">
                  <Quote className="w-8 h-8 text-accent" />
                  <p className="text-center text-foreground/80 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3 pt-2">
                    <Avatar className="h-10 w-10">
                      {/* Placeholder for potential avatar image in the future */}
                      {/* <AvatarImage src={`https://placehold.co/40x40.png`} alt={testimonial.author} /> */}
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatarPlaceholder}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.author}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-background/80 hover:bg-accent text-primary hover:text-accent-foreground" />
      <CarouselNext className="bg-background/80 hover:bg-accent text-primary hover:text-accent-foreground" />
    </Carousel>
  );
}
