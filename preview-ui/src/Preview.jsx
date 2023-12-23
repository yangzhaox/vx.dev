import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import React from 'react';

export default function FeatureFlagEditor() {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-md shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">my-feature</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline">View Audit Log</Button>
          <Button>Test@test.com</Button>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-gray-200 px-2 py-1 rounded text-sm">Tags:</span>
          <span className="text-sm">Type: boolean</span>
          <span className="text-sm">Owner: Test</span>
        </div>
        <Button variant="outline">Add description</Button>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Enabled Environments</h2>
        <div className="flex gap-4">
          <Switch id="integration" />
          <Switch id="china" />
          <Switch id="eu2" />
          <Switch id="us2" />
          <Switch id="cte3" />
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Override Rules</h2>
        <Tabs defaultValue="integration" className="mb-6">
          <TabsList>
            <TabsTrigger value="integration">integration</TabsTrigger>
            <TabsTrigger value="china">china</TabsTrigger>
            <TabsTrigger value="eu2">eu2</TabsTrigger>
            <TabsTrigger value="us2">us2</TabsTrigger>
            <TabsTrigger value="cte3">cte3</TabsTrigger>
          </TabsList>
          <TabsContent value="integration">
            <div className="p-4 bg-gray-50 rounded-md">
              No override rules for this environment yet.
            </div>
          </TabsContent>
          <TabsContent value="china">
            <div className="p-4 bg-gray-50 rounded-md">
              No override rules for this environment yet.
            </div>
          </TabsContent>
          <TabsContent value="eu2">
            <div className="p-4 bg-gray-50 rounded-md">
              No override rules for this environment yet.
            </div>
          </TabsContent>
          <TabsContent value="us2">
            <div className="p-4 bg-gray-50 rounded-md">
              No override rules for this environment yet.
            </div>
          </TabsContent>
          <TabsContent value="cte3">
            <div className="p-4 bg-gray-50 rounded-md">
              No override rules for this environment yet.
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="outline" className="flex items-center">
              <span>?</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Need help? Visit our documentation for more information.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}