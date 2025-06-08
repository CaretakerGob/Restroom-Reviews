
'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  opacity: number;
  velocityY: number;
  rotationSpeed: number;
}

const colors = ["#E76F51", "#F4A261", "#264653", "#2A9D8F", "#E9C46A"];

interface ConfettiPlaceholderProps {
  children?: ReactNode;
}

const ConfettiPlaceholder: React.FC<ConfettiPlaceholderProps> = ({ children }) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generatePieces = () => {
      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < 100; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * 100, // vw
          y: -Math.random() * 100, // vh (start off-screen)
          rotation: Math.random() * 360,
          scale: Math.random() * 0.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 1,
          velocityY: Math.random() * 3 + 2, // pixels per frame
          rotationSpeed: Math.random() * 10 - 5,
        });
      }
      setPieces(newPieces);
    };

    generatePieces();

    let animationFrameId: number;
    const animate = () => {
      setPieces(prevPieces =>
        prevPieces.map(p => {
          const newY = p.y + p.velocityY;
          const newRotation = p.rotation + p.rotationSpeed;
          let newOpacity = p.opacity;

          if (newY > 120) { // if it falls below 120vh
             newOpacity -= 0.05; // Start fading
          }
          if(newOpacity < 0) newOpacity = 0;


          return { ...p, y: newY, rotation: newRotation, opacity: newOpacity };
        }).filter(p => p.opacity > 0) // Remove pieces that are fully faded
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const timer = setTimeout(() => {
       // After 5 seconds, fade all pieces out more rapidly or clear them
       setPieces(prev => prev.map(p => ({...p, opacity: 0})));
    }, 5000);


    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: `${p.scale * 10}px`,
            height: `${p.scale * 20}px`,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg) scale(${p.scale})`,
            opacity: p.opacity,
            transition: 'opacity 0.5s ease-out', // For smooth fading
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
        <div className="bg-card/90 p-8 rounded-lg shadow-2xl text-center max-w-lg backdrop-blur-sm">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-headline font-bold text-primary mb-2">Thank You!</h2>
          {children ? children : (
            <p className="text-foreground/80 text-lg">Your submission has been received.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfettiPlaceholder;
