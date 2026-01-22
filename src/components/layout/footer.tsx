import { about } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container flex h-14 items-center justify-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} {about.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
