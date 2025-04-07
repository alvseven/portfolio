"use client";

import { useState } from "react";
import { Share, ExternalLink } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./dropdown-menu";
import { Button } from "./button";
import { toast } from "@/hooks/use-toast";

import { WhatsappIcon } from "../icons/whatsapp";
import { TwitterIcon } from "../icons/twitter";
import { LinkedinIcon } from "../icons/linkedin";
import { cn } from "@/lib/utils";

interface ShareButtonProps {
  url: string;
  description: string;
  className?: string;
}

export function ShareButton({ url, description, className }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${url}`;

  const encodedShareText = encodeURIComponent(description);
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedShareText}%20${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copiado!",
        description: "Link copiado para a área de transferência.",
        duration: 3000,
      });
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o link.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsOpen(false);
    }
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className={cn("flex items-center px-4", className)}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 font-medium text-sm transition-colors"
          >
            <Share className="h-4 w-4 text-primary" />
            <p className="text-primary">Compartilhar</p>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-56 rounded-md border border-slate-200 p-1.5 shadow-lg animate-in fade-in-0 zoom-in-95 bg-slate-900/70 backdrop-blur-md"
        >
          <DropdownMenuItem
            onClick={() => handleShare("twitter")}
            className="flex cursor-pointer items-center rounded-sm px-3 py-2.5 text-sm font-medium bg-slate-900/70 backdrop-blur-md hover:bg-slate-800/70"
          >
            <TwitterIcon className="h-4 w-4 mr-3 text-primary " />
            <p className="text-primary">Twitter</p>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => handleShare("linkedin")}
            className="flex cursor-pointer items-center rounded-sm px-3 py-2.5 text-sm font-medium bg-slate-900/70 backdrop-blur-md hover:bg-slate-800/70"
          >
            <LinkedinIcon className="h-4 w-4 mr-3 text-primary" />
            <p className="text-primary">LinkedIn</p>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => handleShare("whatsapp")}
            className="flex cursor-pointer items-center rounded-sm px-3 py-2.5 text-sm font-medium bg-slate-900/70 backdrop-blur-md hover:bg-slate-800/70"
          >
            <WhatsappIcon className="h-4 w-4 mr-3 text-primary" />
            <p className="text-primary">WhatsApp</p>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="my-1 h-px " />

          <DropdownMenuItem
            onClick={copyToClipboard}
            className="flex cursor-pointer items-center rounded-sm px-3 py-2.5 text-sm font-medium bg-slate-900/70 backdrop-blur-md hover:bg-slate-800/70"
          >
            <ExternalLink className="h-4 w-4 mr-3 text-primary" />
            <p className="text-primary">Copiar link</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
