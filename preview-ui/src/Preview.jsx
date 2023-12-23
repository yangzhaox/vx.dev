import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
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
        <div className="flex items-center space-x-4">
          <Label htmlFor="integration">integration:</Label>
          <Switch id="integration" />
          <Label htmlFor="china">china:</Label>
          <Switch id="china" />
          <Label htmlFor="eu2">eu2:</Label>
          <Switch id="eu2" />
          <Label htmlFor="us2">us2:</Label>
          <Switch id="us2" />
          <Label htmlFor="cte3">cte3:</Label>
          <Switch id="cte3" />
        </div>
      </div>
      <div className="mb-6">
        <Tabs defaultValue="rules" className="w-full">
          <TabsList>
            <TabsTrigger value="rules">Rules and Values</TabsTrigger>
          </TabsList>
          <TabsContent value="rules">
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Live Revision</h3>
                <Button variant="outline">Revision 1 live</Button>
              </div>
              <p className="text-sm mb-4">Changes you make below will start a new draft</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Default Value</h4>
                <div className="flex items-center">
                  <Button variant="outline">SERVE</Button>
                  <span className="ml-2">OFF</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Override Rules</h4>
                <div className="flex items-center space-x-2 mb-2">
                  <Label htmlFor="integration-override">integration:</Label>
                  <Input id="integration-override" className="w-12" />
                  <Label htmlFor="china-override">china:</Label>
                  <Input id="china-override" className="w-12" />
                  <Label htmlFor="eu2-override">eu2:</Label>
                  <Input id="eu2-override" className="w-12" />
                  <Label htmlFor="us2-override">us2:</Label>
                  <Input id="us2-override" className="w-12" />
                  <Label htmlFor="cte3-override">cte3:</Label>
                  <Input id="cte3-override" className="w-12" />
                </div>
                <p className="text-sm italic">No override rules for this environment yet</p>
              </div>
              <Separator />
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Add Rules</h4>
                <div className="flex space-x-4">
                  <Button variant="outline">Add Forced Rule</Button>
                  <Button variant="outline">Add Rollout Rule</Button>
                  <Button variant="outline">Add Experiment Rule</Button>
                </div>
              </div>
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