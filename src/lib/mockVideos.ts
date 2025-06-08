
export interface Video {
  id: string;
  title: string;
  description?: string;
  type: 'youtube' | 'tiktok_placeholder' | 'custom_iframe';
  sourceUrl: string; // YouTube video ID for 'youtube', full TikTok URL for 'tiktok_placeholder', or full URL for 'custom_iframe'
  thumbnailUrl: string;
  uploader?: string;
  dataAiHint?: string;
}

export const mockVideosData: Video[] = [
  {
    id: '1',
    title: 'Hilarious Restroom Horror Story #1',
    description: "You won't believe what happened in this gas station restroom! Viewer discretion advised.",
    type: 'youtube',
    sourceUrl: 'dQw4w9WgXcQ', // Replace with a real example if possible, this is a placeholder
    thumbnailUrl: 'https://placehold.co/600x400.png',
    uploader: 'UserSubmission',
    dataAiHint: 'funny bathroom',
  },
  {
    id: '2',
    title: 'Amazing Restroom Transformation!',
    description: 'From grimy to gleaming - a Clean It Up success story. Witness the power of community action.',
    type: 'youtube',
    sourceUrl: 'YlöqjdXo04A', // Replace with a real example, this is a nature placeholder
    thumbnailUrl: 'https://placehold.co/600x400.png',
    uploader: 'RestroomReviewsTeam',
    dataAiHint: 'clean bathroom',
  },
  {
    id: '3',
    title: 'TikTok: The Quest for the Cleanest Throne',
    description: 'A funny take on using Restroom Reviews on the go. #RestroomAdventures',
    type: 'tiktok_placeholder',
    sourceUrl: 'https://www.tiktok.com/@tiktok/video/7000000000000000000', // Example TikTok URL
    thumbnailUrl: 'https://placehold.co/600x400.png',
    uploader: 'TikTokCreator',
    dataAiHint: 'mobile phone',
  },
  {
    id: '4',
    title: 'Before & After: The "Clean It Up" Magic',
    description: 'See the incredible difference our program makes to nominated restrooms.',
    type: 'custom_iframe', // Could also be YouTube
    sourceUrl: 'https://www.youtube.com/embed/jzqDQ3qZ0yU', // Example embed, can be any iframe source
    thumbnailUrl: 'https://placehold.co/600x400.png', // This won't be used if type is custom_iframe and directly embeds
    uploader: 'RestroomReviewsOfficial',
    dataAiHint: 'before after',
  },
];
