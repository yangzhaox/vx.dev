import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import React from 'react';

export default function FeatureFlagForm() {
  return (
    <TooltipProvider>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto my-12">
        <h2 className="text-2xl font-bold mb-4">Create Feature</h2>
        <div className="mb-4">
          <Label htmlFor="feature-key" className="block mb-2">Feature Key</Label>
          <Input id="feature-key" placeholder="my-feature" />
          <p className="text-sm text-gray-500 mt-1">
            Only letters, numbers, and the characters -_.,:;| allowed. No spaces. Cannot be changed later!
          </p>
        </div>
        <div className="mb-4">
          <Button variant="ghost" className="text-indigo-600">+ tags</Button>
          <Button variant="ghost" className="text-indigo-600 ml-2">+ description</Button>
        </div>
        <div className="mb-4">
          <Label htmlFor="value-type" className="block mb-2">Value Type</Label>
          <select id="value-type" className="border rounded px-3 py-2 w-full">
            <option>boolean (on/off)</option>
          </select>
        </div>
        <fieldset className="mb-4">
          <legend className="block mb-2">Enabled Environments</legend>
          <div className="flex justify-between">
            <div className="flex items-center">
              <Switch id="integration" />
              <Label htmlFor="integration" className="ml-2">integration</Label>
            </div>
            <div className="flex items-center">
              <Switch id="china" />
              <Label htmlFor="china" className="ml-2">china</Label>
            </div>
            <div className="flex items-center">
              <Switch id="eu2" />
              <Label htmlFor="eu2" className="ml-2">eu2</Label>
            </div>
            <div className="flex items-center">
              <Switch id="us" />
              <Label htmlFor="us" className="ml-2">us</Label>
            </div>
            <div className="flex items-center">
              <Switch id="cte3" />
              <Label htmlFor="cte3" className="ml-2">cte3</Label>
            </div>
          </div>
        </fieldset>
        <div className="mb-6">
          <Label htmlFor="default-value" className="block mb-2">Default Value when Enabled</Label>
          <Switch id="default-value" />
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="text-sm text-gray-500 mb-6">
              After creating your feature, you will be able to add targeted rules such as A/B Tests and Percentage Rollouts to control exactly how it gets released to users.
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Learn more about A/B Tests and Percentage Rollouts</p>
          </TooltipContent>
        </Tooltip>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button>Create</Button>
        </div>
      </div>
    </TooltipProvider>
  );
}