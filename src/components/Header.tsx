"use client";

import { TMyPersonalGitHubData } from "@/types/GitHubData";
import { ModeToggle } from "./Mode-toggle";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Link from "next/link";
import TypedName from "./Typed-name";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import type { IpadCursorConfig } from "ipad-cursor";
interface IGitHubInfoProps {
  gitHubData: TMyPersonalGitHubData;
}

const Header = ({ gitHubData }: IGitHubInfoProps) => {
  const config: IpadCursorConfig = {
    normalStyle: {
      backdropBlur: "20px",
    },
    blockStyle: {
      backdropBlur: "0px",
      durationBackdropFilter: "0.5s",
    },
    enableAutoTextCursor: true,
  };

  useIPadCursor();
  return (
    <IPadCursorProvider config={config}>
      <header className="flex flex-col items-center justify-between sm:flex-row">
        <div className="flex gap-4 items-center my-5">
          <Link href={gitHubData.html_url} target="_blank">
            <Avatar
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 1.4s;border-radius: 50%"
            >
              <AvatarImage src={gitHubData.avatar_url} alt={gitHubData.name} />
              <AvatarFallback />
            </Avatar>
          </Link>
        </div>

        <div className="flex flex-row items-center text-lg mt-1">
          <span data-curso="text">Hi, I'm</span>
          <div
            data-cursor="block"
            data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.7s;border-radius: 6px"
            className="ml-2 px-2 text-nowrap inline-block"
          >
            <TypedName
              className="text-lg font-bold lucasleao"
              name="Lucas Leão"
            />
          </div>
        </div>

        <nav>
          <ul className="flex flex-row items-center gap-4 sm:text-base">
            <li
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.5s;border-radius: 6px"
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.5s;border-radius: 6px"
            >
              <Link href="/books">Livros</Link>
            </li>
            <li
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.5s;border-radius: 6px"
            >
              <Link href={"/"}>Projetos</Link>
            </li>
            <li
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.5s;border-radius: 6px"
            >
              <Link href={"/"}>Posts</Link>
            </li>
            <li
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.5s;border-radius: 6px"
            >
              <ModeToggle></ModeToggle>
            </li>
          </ul>
        </nav>
      </header>
    </IPadCursorProvider>
  );
};

export default Header;
