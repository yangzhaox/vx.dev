import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import React from 'react';

export default function QAScreen() {
  return (
    <div className="bg-blue-800 text-white min-h-screen p-4">
      <div className="flex justify-between items-start">
        <div className="w-1/3">
          <AspectRatio ratio={1}>
            <div className="bg-gray-300 rounded-md" />
          </AspectRatio>
        </div>
        <div className="flex-1 ml-4">
          <h1 className="text-2xl font-bold mb-4">Q&A</h1>
          <ScrollArea className="h-[calc(100vh-200px)] w-full bg-blue-900 rounded-md p-4 space-y-4">
            <Card>
              <CardHeader>
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=800&dpr=2&q=80" />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <CardTitle>Chao</CardTitle>
                  <CardDescription>Hank可以分享下您在创业过程中的经验吗？</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                Hank可以分享下您在创业过程中的经验吗？...
              </CardContent>
              <CardFooter>
                <Badge variant="outline">4</Badge>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <CardTitle>Anonymous</CardTitle>
                  <CardDescription>可以给大家分享一些你在职场中的成功及失败吗？</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                可以给大家分享一些你在职场中的成功及失败吗？...
              </CardContent>
              <CardFooter>
                <Badge variant="outline">3</Badge>
              </CardFooter>
            </Card>
            {/* More cards for other questions */}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}