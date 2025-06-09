
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, MessageSquarePlus, Wrench } from "lucide-react";

export default function ContactPage() {
  // Placeholder for form submission handling
  async function handleSubmit(formData: FormData) {
    "use server";
    // Process data here
    console.log("Form submitted!");
    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Subject:", formData.get("subject"));
    console.log("Message:", formData.get("message"));
    // Add your logic for sending email or saving to DB
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-headline text-primary text-center">Get In Touch</CardTitle>
          <CardDescription className="text-lg text-foreground/80 text-center">
            Questions, suggestions, partnership inquiries, or just want to share some Bathroom Buzz? We'd love to hear from you!
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-foreground/80">
            <h2 className="text-2xl font-headline text-secondary">Contact Information</h2>
            <p>
              Reach out through the form or using the contact details below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-accent" />
                <span>contact@restroomreviews.work</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-accent" />
                <span>(555) 123-4567 (Support Hours: M-F 9am-5pm)</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-accent" />
                <span>123 Porcelain Way, Flushville, CleanState 90210</span>
              </div>
            </div>
             <p className="text-sm mt-4">
              For partnership inquiries or media requests, please use the subject line "Partnership" or "Media Request" in your email or message.
            </p>

            <div className="mt-8 p-4 bg-card-foreground/5 rounded-lg border">
                <h3 className="text-xl font-headline text-secondary mb-2 flex items-center gap-2"><MessageSquarePlus /> Site Feedback & Suggestions</h3>
                <p className="text-sm text-muted-foreground">
                    Have ideas on how we can improve Restroom Reviews? Found a bug?
                    Use the contact form with "Site Feedback" or "Bug Report" as the subject. We appreciate your help in making our platform cleaner and better!
                </p>
            </div>
          </div>

          <form action={handleSubmit} className="space-y-6 p-6 bg-card-foreground/5 rounded-lg border">
            <div>
              <Label htmlFor="name" className="text-foreground">Your Name</Label>
              <Input type="text" id="name" name="name" required className="mt-1 bg-background"/>
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Your Email</Label>
              <Input type="email" id="email" name="email" required className="mt-1 bg-background"/>
            </div>
            <div>
              <Label htmlFor="subject" className="text-foreground">Subject</Label>
              <Input type="text" id="subject" name="subject" required className="mt-1 bg-background" placeholder="e.g., Partnership, Site Feedback, General Inquiry"/>
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground">Message</Label>
              <Textarea id="message" name="message" rows={5} required className="mt-1 bg-background"/>
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
