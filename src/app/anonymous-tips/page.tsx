
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ghost, Gem, Construction, FileText } from "lucide-react";
import Image from "next/image";

export default function AnonymousTipsPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-4xl font-headline text-primary flex items-center justify-center gap-3">
            <Ghost className="h-10 w-10" /> 🤫 Share a Secret or a Scare
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Got a restroom horror story or know a hidden gem? Drop an anonymous tip here! Feature coming soon.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 flex flex-col items-center justify-center text-center min-h-[500px]">
          <Construction className="h-24 w-24 text-primary opacity-50 mb-6" />
          <h2 className="text-3xl font-headline text-secondary">
            Incognito Intel Incoming!
          </h2>
          <p className="text-xl text-foreground/70 mt-2 max-w-xl">
            We're building a special portal for you to anonymously share those unforgettable restroom experiences – the shockingly bad or the surprisingly good! 
            This will help us uncover more locations for reviews or even nominations.
          </p>
          <p className="text-md text-muted-foreground mt-4">
            Soon, you'll be able to submit your tips without needing to create a full review. Stay tuned!
          </p>
          <Image
            src="https://placehold.co/600x300.png"
            alt="Anonymous submission concept art"
            width={600}
            height={300}
            className="mt-8 rounded-lg shadow-md opacity-70"
            data-ai-hint="anonymous secret message"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 max-w-2xl w-full">
            <Card className="bg-card-foreground/5">
                <CardHeader className="flex-row items-center gap-2 pb-2">
                    <Gem className="h-6 w-6 text-accent"/>
                    <CardTitle className="text-xl text-accent">Hidden Thrones</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Know a surprisingly good public restroom that deserves recognition? Tip us off!</p>
                </CardContent>
            </Card>
            <Card className="bg-card-foreground/5">
                <CardHeader className="flex-row items-center gap-2 pb-2">
                    <FileText className="h-6 w-6 text-destructive"/>
                    <CardTitle className="text-xl text-destructive">Restroom Regrets</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Experienced a restroom horror story that the world needs to (anonymously) know about? Share the chilling details.</p>
                </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
