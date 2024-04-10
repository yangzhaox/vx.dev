import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

export default function FeatureFlagForm() {
  // Static JSON data to simulate real-time update
  const jsonOutput = JSON.stringify({
    flagKey: "new-feature",
    state: true,
    type: "boolean",
    variants: [
      { name: "control", value: "A" },
      { name: "experiment", value: "B" },
    ],
  }, null, 2);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 p-6">
        <form>
          <div className="mb-4">
            <label htmlFor="flagKey" className="block text-sm font-medium text-gray-700">FlagKey</label>
            <Input id="flagKey" className="mt-1 block w-full" />
          </div>
          <div className="mb-4 flex items-center">
            <Checkbox id="state" className="mr-2" />
            <label htmlFor="state" className="text-sm font-medium text-gray-700">State</label>
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="boolean">Boolean</SelectItem>
                <SelectItem value="string">String</SelectItem>
                <SelectItem value="number">Number</SelectItem>
                <SelectItem value="JSON">JSON</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <fieldset className="mb-4">
            <legend className="block text-sm font-medium text-gray-700 mb-2">Variants</legend>
            <div className="mb-2">
              <label htmlFor="variantName1" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="variantName1" className="mt-1 block w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="variantValue1" className="block text-sm font-medium text-gray-700">Value</label>
              <Input id="variantValue1" className="mt-1 block w-full" />
            </div>
            {/* Additional variant inputs would be added here */}
          </fieldset>
        </form>
      </div>
      <div className="w-1/2 p-6">
        <label htmlFor="jsonOutput" className="block text-sm font-medium text-gray-700 mb-2">Generated JSON</label>
        <Textarea id="jsonOutput" className="h-full w-full" readOnly value={jsonOutput} />
      </div>
    </div>
  );
}