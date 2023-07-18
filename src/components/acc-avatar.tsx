import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AccountAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
