import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';

export default function FeatureFlagGenerator() {
  const [flagKey, setFlagKey] = useState('');

  const handleInputChange = (e) => {
    setFlagKey(e.target.value);
  };

  const generatedJson = JSON.stringify({
    flagKey: flagKey,
    enabled: false,
    variants: [],
  }, null, 2);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 p-6">
        <label htmlFor="flagKey" className="block text-sm font-medium text-gray-700">FlagKey</label>
        <Input id="flagKey" value={flagKey} onChange={handleInputChange} className="mt-1 block w-full" />
      </div>
      <div className="w-1/2 p-6">
        <label htmlFor="generatedJson" className="block text-sm font-medium text-gray-700">Generated JSON</label>
        <Textarea id="generatedJson" value={generatedJson} readOnly className="mt-1 block w-full h-full" />
      </div>
    </div>
  );
}