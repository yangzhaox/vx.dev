import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';

export default function FeatureFlagGenerator() {
  const [flagKey, setFlagKey] = useState('');
  const [state, setState] = useState(false);

  const handleInputChange = (e) => {
    setFlagKey(e.target.value);
  };

  const handleCheckboxChange = () => {
    setState(!state);
  };

  const generatedJson = JSON.stringify({
    flagKey: flagKey,
    enabled: state,
    variants: [],
  }, null, 2);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 p-6 space-y-4">
        <div>
          <label htmlFor="flagKey" className="block text-sm font-medium text-gray-700">FlagKey</label>
          <Input id="flagKey" value={flagKey} onChange={handleInputChange} className="mt-1 block w-full" />
        </div>
        <div>
          <label htmlFor="state" className="flex items-center space-x-2">
            <Checkbox id="state" checked={state} onChange={handleCheckboxChange} />
            <span className="text-sm font-medium text-gray-700">State</span>
          </label>
        </div>
      </div>
      <div className="w-1/2 p-6">
        <label htmlFor="generatedJson" className="block text-sm font-medium text-gray-700">Generated JSON</label>
        <Textarea id="generatedJson" value={generatedJson} readOnly className="mt-1 block w-full h-full" />
      </div>
    </div>
  );
}