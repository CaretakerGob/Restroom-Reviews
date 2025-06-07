import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary">Admin Dashboard</CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Manage reviews, nominations, and site settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert variant="default" className="bg-secondary text-secondary-foreground border-secondary">
            <ShieldAlert className="h-5 w-5" />
            <AlertTitle className="font-headline">Protected Area</AlertTitle>
            <AlertDescription>
              This section is for administrators only. Full functionality requires Firebase Authentication.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Pending Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Reviews awaiting approval.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Pending Nominations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Nominations to review.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">"Cleaned by R&R" Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Locations successfully improved.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 border rounded-lg">
            <h3 className="text-2xl font-headline text-secondary mb-4">Future Functionality</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>View, edit, and delete submitted reviews.</li>
              <li>Approve or reject content before public display.</li>
              <li>Manage "Clean It Up" program nominations and status.</li>
              <li>Tag locations with a "Cleaned by R&R" badge.</li>
              <li>User management (if applicable).</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
