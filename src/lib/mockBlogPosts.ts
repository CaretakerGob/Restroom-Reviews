
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO Date string for consistency, e.g., "2024-08-01"
  author: string;
  imageUrl?: string;
  imageHint?: string;
  excerpt: string;
  content: string; // For simplicity, this will be plain text. For Markdown, further setup would be needed.
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "top-5-gas-stations-medal",
    title: "Top 5 Gas Stations That Deserve a Medal for Cleanliness",
    date: "2024-08-01T10:00:00Z",
    author: "The R&R Team",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "gas station pristine restroom",
    excerpt: "We've all been there, desperately hoping for a clean oasis on a long road trip. Today, we celebrate the unsung heroes of highway hygiene...",
    content: `
      <p>We've all been there, desperately hoping for a clean oasis on a long road trip. Today, we celebrate the unsung heroes of highway hygiene – those rare gas stations that go above and beyond. Here are our top 5 picks that truly deserve a medal for their commitment to cleanliness and comfort:</p>
      <ol class="list-decimal list-inside space-y-2 my-4">
        <li><strong>Sparkle Stop (Route 66, Arizona):</strong> Known for its gleaming floors and fresh scent. They even have little flower pots!</li>
        <li><strong>The Pristine Pump (I-95, Florida):</strong> Attendants are constantly cleaning, and the soap dispensers are always full. A true gem.</li>
        <li><strong>Gleam & Go (Midwest Express):</strong> Modern facilities, touchless fixtures, and surprisingly good lighting.</li>
        <li><strong>Highway Haven (Pacific Coast Highway, California):</strong> Offers not just cleanliness but also a pleasant, calming atmosphere.</li>
        <li><strong>The Reliable Rest (Cross-Country Connector):</strong> Consistently clean across multiple locations, showing a real brand commitment.</li>
      </ol>
      <p>Next time you're on the road, keep an eye out for these champions of cleanliness. And don't forget to submit your own reviews to help others find the best spots!</p>
    `,
  },
  {
    id: "2",
    slug: "worst-restroom-excuses",
    title: "Worst Restroom Excuses We've Heard (and Why They Don't Hold Water)",
    date: "2024-07-25T14:30:00Z",
    author: "Anonymous Contributor",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "person shrugging question mark",
    excerpt: "Business owners and managers sometimes have... creative reasons for less-than-stellar restrooms. We've compiled a list of the most common (and frustrating) excuses.",
    content: `
      <p>Business owners and managers sometimes have... creative reasons for less-than-stellar restrooms. We've compiled a list of the most common (and frustrating) excuses, and why they just don't flush with us:</p>
      <ul class="list-disc list-inside space-y-2 my-4">
        <li><strong>"It's a high-traffic area, we can't keep up!":</strong> While understandable, this points to a need for more frequent cleaning schedules or more staff, not an excuse to give up.</li>
        <li><strong>"Customers make the mess, not us!":</strong> Part of running a public-facing business is managing the wear and tear, including restroom upkeep.</li>
        <li><strong>"We're too busy focusing on our main product/service.":</strong> A clean restroom is part of the overall customer experience. Neglecting it can cost you customers.</li>
        <li><strong>"It's an old building, what can you do?":</strong> While renovations can be costly, regular cleaning, fresh paint, and ensuring supplies are stocked can make a huge difference even in older facilities.</li>
        <li><strong>"No one has complained.":</strong> Many people won't complain directly; they'll just vote with their feet and never return. Or worse, they'll tell their friends.</li>
      </ul>
      <p>Let's encourage businesses to prioritize restroom hygiene. It benefits everyone!</p>
    `,
  },
  {
    id: "3",
    slug: "how-to-nominate-with-style",
    title: "How to Nominate a Business for 'Clean It Up' with Style",
    date: "2024-07-18T09:00:00Z",
    author: "The R&R Team",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "detective magnifying glass",
    excerpt: "Want to help a business improve its restroom game? Our 'Clean It Up' program is here to help. Here’s how to make your nomination effective and impactful.",
    content: `
      <p>Want to help a business improve its restroom game? Our 'Clean It Up' program is here to help. A well-crafted nomination can make all the difference. Here’s how to submit your nomination with style and effectiveness:</p>
      <h3 class="text-xl font-semibold my-3 text-secondary">1. Be Specific About the Location</h3>
      <p>Provide the full business name and address. The more accurate the location, the easier it is for us (and potentially them) to identify the restroom in question.</p>
      <h3 class="text-xl font-semibold my-3 text-secondary">2. Clearly Describe the Issues</h3>
      <p>Instead of just saying "it's dirty," point out specific problems. For example: "The floors are consistently sticky," "There's often no soap or paper towels," "Two of the stall doors don't lock properly," or "There's a persistent unpleasant odor."</p>
      <h3 class="text-xl font-semibold my-3 text-secondary">3. Be Constructive, Not Just Critical</h3>
      <p>While it's important to highlight problems, frame your nomination with the goal of improvement. For example, "This is a great local cafe, but their restroom really lets them down and could use some attention to match their otherwise excellent service."</p>
      <h3 class="text-xl font-semibold my-3 text-secondary">4. (Optional) Include a Photo (Safely!)</h3>
      <p>If you can safely and discreetly take a photo that illustrates the issue (WITHOUT any people in it, per The Porcelain Rule!), it can be very helpful. Focus on general conditions, not on capturing an isolated messy moment if possible, unless it’s a recurring issue.</p>
      <h3 class="text-xl font-semibold my-3 text-secondary">5. Explain the Potential</h3>
      <p>Briefly mention why improving this restroom matters. Is it a high-traffic spot? A community hub? A place that many rely on? This adds weight to your nomination.</p>
      <p class="mt-4">Together, through thoughtful nominations, we can help businesses understand the importance of clean restrooms and make a real difference!</p>
    `,
  },
  {
    id: "4",
    slug: "the-art-of-the-courtesy-flush",
    title: "The Unspoken Rules: Mastering the Art of the Courtesy Flush",
    date: "2024-07-10T11:00:00Z",
    author: "Professor Privy",
    // No image for this one to test layout
    excerpt: "In the realm of shared spaces, the restroom presents unique challenges. One often-debated tactic for maintaining olfactory harmony is the 'courtesy flush'. Let's delve into its nuances.",
    content: `
      <p>In the realm of shared spaces, the public restroom presents unique social challenges. One often-debated tactic for maintaining olfactory harmony and general pleasantness is the 'courtesy flush'. While not enshrined in any written law, its practice is often appreciated. Let's delve into its nuances.</p>
      <h3 class="text-xl font-semibold my-3 text-secondary">What is a Courtesy Flush?</h3>
      <p>A courtesy flush is the act of flushing the toilet mid-use, typically after a bowel movement has commenced but before one has finished their business. The primary goal is to minimize odor. </p>
      <h3 class="text-xl font-semibold my-3 text-secondary">When is it Appropriate?</h3>
      <ul class="list-disc list-inside space-y-2 my-4">
        <li><strong>In close quarters:</strong> If you're in a busy restroom with occupied stalls nearby.</li>
        <li><strong>If you anticipate a fragrant experience:</strong> Self-awareness is key.</li>
        <li><strong>In poorly ventilated restrooms:</strong> Some spaces just need extra help.</li>
      </ul>
      <h3 class="text-xl font-semibold my-3 text-secondary">The Environmental Consideration</h3>
      <p>It's important to acknowledge that a courtesy flush uses additional water. In areas with water scarcity, or if you're particularly environmentally conscious, you might weigh this against the social benefit. Modern low-flow toilets mitigate this concern somewhat, but it's still a valid point.</p>
      <h3 class="text-xl font-semibold my-3 text-secondary">The Verdict?</h3>
      <p>Ultimately, the courtesy flush is a personal choice, often guided by situational awareness and consideration for others. While not mandatory, it's a gesture that can contribute to a more pleasant shared environment. What are your thoughts on this delicate subject? Let us know in the comments (if we had them!).</p>
    `,
  },
];
