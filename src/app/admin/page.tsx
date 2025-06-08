
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert, MapPin, Users, Award, TrendingUp, HandHelping } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary">Admin Dashboard</CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Manage Restroom Reviews: reviews, nominations, site settings, and track our impact.
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

          <h2 className="text-2xl font-headline text-secondary pt-4 border-b pb-2">Platform Management</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Pending Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Stall Stories awaiting approval.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Pending Nominations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">"Cleanup Crusade" nominations to review.</p>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">128</p>
                <p className="text-sm text-muted-foreground">Registered community members.</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-headline text-secondary pt-6 border-b pb-2 mt-8 flex items-center gap-2">
            <HandHelping /> "Cleanup Crusade" Impact Tracker
            </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-accent">Nominations Received</CardTitle>
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">78</p>
                <p className="text-xs text-muted-foreground">Total businesses nominated for improvement.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-accent">Restrooms Cleaned</CardTitle>
                <Award className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">15</p>
                <p className="text-xs text-muted-foreground">Successfully renovated or deep-cleaned.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-accent">Cities Impacted</CardTitle>
                 <MapPin className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">5</p>
                <p className="text-xs text-muted-foreground">e.g., New York, Pleasantville, Readsville</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-accent">Community Hours</CardTitle>
                <Users className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">200+</p>
                <p className="text-xs text-muted-foreground">Volunteer hours contributed.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-6 border rounded-lg">
            <h3 className="text-2xl font-headline text-secondary mb-4">Future Admin Functionality</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>View, edit, and delete submitted reviews.</li>
              <li>Approve or reject content before public display.</li>
              <li>Manage "Cleanup Crusade" program nominations and status.</li>
              <li>Tag locations with a "Cleaned by Restroom Reviews" badge.</li>
              <li>User management (view, roles, ban).</li>
              <li>Site analytics and reporting.</li>
              <li>Configuration for AI summarization parameters.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
