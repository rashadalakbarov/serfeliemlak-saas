import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { assets } from "@/lib/config";
import Link from "next/link";
import { Dot, Heart, Share2 } from "lucide-react";

import image from "@/public/images/properties/p1.jpg";

const CardItem = () => {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Alqı-satqı</CardTitle>
        <CardDescription>Həyət evi/Bağ evi</CardDescription>
        <CardAction>
          <div className="flex gap-1 items-center">
            <Heart />
            <Share2 />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Image
            src={image}
            alt="property"
            width={500}
            height={100}
            className="rounded-sm"
            priority
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="font-bold text-xl">7000 AZN</span>
          <div className="flex gap-1 items-center">
            <Image src={assets.docs} alt="docs" width={20} height={20} />
            <Image
              src={assets.mortgage}
              alt="mortgage"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="mt-3 text-md">Novxanı</div>

        <div className="mt-1">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Dot />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/components">Components</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Dot />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/components">Components</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full text-muted-foreground">
          <span>Bakı, bugün 21:27</span>
          <div className="flex gap-1 items-center">
            <Image src={assets.vipped} alt="vip" width={20} height={20} />
            <Image src={assets.featured} alt="premium" width={20} height={20} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
