import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const FeatureFlagForm = () => {
  const [flagKey, setFlagKey] = React.useState('');
  const [state, setState] = React.useState(false);
  const [variants, setVariants] = React.useState([{ name: '', value: '' }]);

  const handleVariantChange = (index, key, value) => {
    const newVariants = variants.map((variant, i) => {
      if (i === index) {
        return { ...variant, [key]: value };
      }
      return variant;
    });
    setVariants(newVariants);
  };

  const addVariant = () => {
    setVariants([...variants, { name: '', value: '' }]);
  };

  const removeVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const generateJSON = () => {
    const json = {
      flagKey,
      state,
      variants: variants.reduce((acc, { name, value }) => {
        if (name && value) {
          acc[name] = value;
        }
        return acc;
      }, {}),
    };
    return JSON.stringify(json, null, 2);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 p-6">
        <div className="mb-4">
          <label htmlFor="flagKey" className="block mb-2">FlagKey</label>
          <Input id="flagKey" value={flagKey} onChange={(e) => setFlagKey(e.target.value)} />
        </div>
        <div className="mb-4">
          <Checkbox id="state" checked={state} onChange={(e) => setState(e.target.checked)} />
          <label htmlFor="state" className="ml-2">State</label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Variants</label>
          {variants.map((variant, index) => (
            <div key={index} className="flex items-center mb-2">
              <Input
                className="mr-2"
                placeholder="Name"
                value={variant.name}
                onChange={(e) => handleVariantChange(index, 'name', e.target.value)}
              />
              <Input
                className="mr-2"
                placeholder="Value"
                value={variant.value}
                onChange={(e) => handleVariantChange(index, 'value', e.target.value)}
              />
              <Button variant="outline" onClick={() => removeVariant(index)}>Remove</Button>
            </div>
          ))}
          <Button variant="outline" onClick={addVariant}>Add Variant</Button>
        </div>
      </div>
      <div className="w-1/2 p-6">
        <Textarea readOnly value={generateJSON()} className="h-full w-full" />
      </div>
    </div>
  );
};

export default FeatureFlagForm;