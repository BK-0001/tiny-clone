import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/nextjs";

export default function ClerkAuthButton() {
  return (
    <div className="space-x-4 flex items-center">
      <SignedOut>
        <SignInButton>
          <Button className="bg-transparent hover:bg-accent/50">Sign In</Button>
        </SignInButton>
        <SignUpButton>
          <Button className="bg-transparent hover:bg-accent/50">Sign Up</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
