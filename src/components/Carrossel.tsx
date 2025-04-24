import * as React from 'react'
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { servicesData } from '@/lib/data'

export default function Carrossel() {
  return (
    <Carousel
      className="max-w-4xl h-[400px]"
      opts={{
        align: 'center',
        loop: true
      }}
    >
      <CarouselContent className="">
        {servicesData.map((service, index) => (
          <CarouselItem key={index} className="basis-2/3">
            <Card className="flex flex-col items-center gap-4 text-center bg-zinc-100 border border-zinc-300 p-4">
              <CardTitle>{service.title}</CardTitle>
              <CardContent className="w-full h-[300px] flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  quality={95}
                  className="w-full h-full object-cover rounded shadow-xl"
                />
              </CardContent>
              <CardDescription className="w-full">
                {service.description}
              </CardDescription>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
