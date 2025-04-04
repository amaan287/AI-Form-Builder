"use client";
import React from "react";
import { useUser,SignInButton } from "@clerk/nextjs";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { WordRotate } from "@/components/magicui/word-rotate";
import Link from "next/link";
function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Hero() {
  const { isSignedIn, user, isLoaded } = useUser();
  const firstName = user?.firstName
    ? capitalizeFirstLetter(user.firstName)
    : "";
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-svh  lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          {isSignedIn ? (
            <div>
              <BlurFade delay={0.25} inView>
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Hello! {firstName}
                </h1>
              </BlurFade>
              <BlurFade delay={0.25 * 2} inView>
                <Link href={'/dashboard'}>
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl sm:block">
                  Generate Forms using AI
                </h1>
                </Link>
                <WordRotate
                  duration={3500}
                  className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl sm:block "
                  words={["Fast", "&", "Easy"]}
                />
              </BlurFade>
            </div>
          ) : (
            <div>
              <BlurFade delay={0.25} inView>
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Hello!
                </h1>
              </BlurFade>
              <BlurFade delay={0.25 * 2} inView>
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl sm:block">
                  Generate Forms using AI
                </h1>
                <WordRotate
                  duration={3500}
                  className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl sm:block "
                  words={["Fast", "&", "Easy"]}
                />
              </BlurFade>
            </div>
          )}
          <BlurFade delay={0.25 * 3} inView>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Craft Custom Forms Instantly
              <br />
              Form Building Made Fast and Simple
            </p>
          </BlurFade>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {isSignedIn ? (
              <Link href="/dashboard">
                <BlurFade delay={0.3 * 3} inView>
                  <ShimmerButton
                    background="rgb(94,106,250)"
                    borderRadius="10px"
                    className="shadow-2xl"
                  >
                    Generate Form
                  </ShimmerButton>
                </BlurFade>
              </Link>
            ) : (
              <SignInButton>
                <BlurFade delay={0.3 * 3} inView>
                  <ShimmerButton
                    background="rgb(94,106,250)"
                    borderRadius="10px"
                    className="shadow-2xl"
                  >
                    Get Started
                  </ShimmerButton>
                </BlurFade>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
